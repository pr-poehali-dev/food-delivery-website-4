import json
import os
import base64
from typing import Dict, Any
from urllib import request as urllib_request

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Проверка статуса платежа в ЮKassa
    Args: event - dict с httpMethod, queryStringParameters (payment_id)
          context - object с request_id
    Returns: HTTP response со статусом платежа
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
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
    
    params = event.get('queryStringParameters', {})
    payment_id = params.get('payment_id')
    
    if not payment_id:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'payment_id is required'}),
            'isBase64Encoded': False
        }
    
    auth_string = f'{shop_id}:{secret_key}'
    auth_bytes = auth_string.encode('ascii')
    auth_b64 = base64.b64encode(auth_bytes).decode('ascii')
    
    headers = {
        'Authorization': f'Basic {auth_b64}',
        'Content-Type': 'application/json'
    }
    
    req = urllib_request.Request(
        f'https://api.yookassa.ru/v3/payments/{payment_id}',
        headers=headers,
        method='GET'
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
            'status': payment_response['status'],
            'paid': payment_response['paid'],
            'amount': payment_response['amount']['value'],
            'currency': payment_response['amount']['currency'],
            'metadata': payment_response.get('metadata', {})
        }),
        'isBase64Encoded': False
    }
