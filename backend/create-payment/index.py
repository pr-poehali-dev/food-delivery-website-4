import json
import os
import uuid
import base64
from typing import Dict, Any
from urllib import request as urllib_request
from urllib.error import HTTPError

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Создание платежа через ЮKassa
    Args: event - dict с httpMethod, body (amount, description, orderId)
          context - object с request_id
    Returns: HTTP response с payment_url и payment_id
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    shop_id = os.environ.get('YUKASSA_SHOP_ID')
    secret_key = os.environ.get('YUKASSA_SECRET_KEY')
    
    if not shop_id or not secret_key:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Payment credentials not configured'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    amount = body_data.get('amount')
    description = body_data.get('description', 'Оплата заказа')
    order_id = body_data.get('orderId', str(uuid.uuid4()))
    
    if not amount or amount <= 0:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid amount'}),
            'isBase64Encoded': False
        }
    
    idempotence_key = str(uuid.uuid4())
    
    payment_data = {
        'amount': {
            'value': f'{amount:.2f}',
            'currency': 'RUB'
        },
        'confirmation': {
            'type': 'redirect',
            'return_url': f'{os.environ.get("SITE_URL", "https://your-site.com")}/payment-success'
        },
        'capture': True,
        'description': description,
        'metadata': {
            'order_id': order_id
        }
    }
    
    auth_string = f'{shop_id}:{secret_key}'
    auth_bytes = auth_string.encode('ascii')
    auth_b64 = base64.b64encode(auth_bytes).decode('ascii')
    
    headers = {
        'Authorization': f'Basic {auth_b64}',
        'Idempotence-Key': idempotence_key,
        'Content-Type': 'application/json'
    }
    
    req = urllib_request.Request(
        'https://api.yookassa.ru/v3/payments',
        data=json.dumps(payment_data).encode('utf-8'),
        headers=headers,
        method='POST'
    )
    
    response_data = urllib_request.urlopen(req).read()
    payment_response = json.loads(response_data.decode('utf-8'))
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'payment_id': payment_response['id'],
            'payment_url': payment_response['confirmation']['confirmation_url'],
            'status': payment_response['status']
        }),
        'isBase64Encoded': False
    }
