import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Manage delivery orders for couriers and customers
    Args: event with httpMethod (GET/POST/PUT), body, queryStringParameters
    Returns: Orders list or order update confirmation
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database connection not configured'})
        }
    
    conn = psycopg2.connect(dsn)
    cursor = conn.cursor()
    
    try:
        if method == 'GET':
            params = event.get('queryStringParameters', {})
            status = params.get('status', 'new')
            
            cursor.execute(
                "SELECT id, order_id, customer_name, customer_phone, delivery_address, comment, items, total_amount, payment_method, payment_status, order_status, created_at FROM orders WHERE order_status = %s ORDER BY created_at DESC",
                (status,)
            )
            
            rows = cursor.fetchall()
            orders = []
            for row in rows:
                orders.append({
                    'id': row[0],
                    'orderId': row[1],
                    'customerName': row[2],
                    'customerPhone': row[3],
                    'deliveryAddress': row[4],
                    'comment': row[5],
                    'items': row[6],
                    'totalAmount': float(row[7]),
                    'paymentMethod': row[8],
                    'paymentStatus': row[9],
                    'orderStatus': row[10],
                    'createdAt': row[11].isoformat() if row[11] else None
                })
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'orders': orders})
            }
        
        elif method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            
            cursor.execute(
                "INSERT INTO orders (order_id, customer_name, customer_phone, delivery_address, comment, items, total_amount, payment_method, payment_status) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id",
                (
                    body_data['orderId'],
                    body_data['customerName'],
                    body_data['customerPhone'],
                    body_data['deliveryAddress'],
                    body_data.get('comment', ''),
                    json.dumps(body_data['items']),
                    body_data['totalAmount'],
                    body_data['paymentMethod'],
                    body_data.get('paymentStatus', 'pending')
                )
            )
            
            order_id = cursor.fetchone()[0]
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'success': True, 'orderId': order_id})
            }
        
        elif method == 'PUT':
            body_data = json.loads(event.get('body', '{}'))
            order_id = body_data.get('orderId')
            new_status = body_data.get('status')
            
            if not order_id or not new_status:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'orderId and status are required'})
                }
            
            cursor.execute(
                "UPDATE orders SET order_status = %s, updated_at = CURRENT_TIMESTAMP WHERE order_id = %s",
                (new_status, order_id)
            )
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'success': True, 'message': 'Order status updated'})
            }
        
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    finally:
        cursor.close()
        conn.close()
