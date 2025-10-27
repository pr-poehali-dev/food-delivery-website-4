import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface OrderItem {
  id: number;
  nameRussian: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  orderId: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  comment?: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  createdAt: string;
}

const Courier = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<'new' | 'in_progress' | 'completed'>('new');

  useEffect(() => {
    const authStatus = sessionStorage.getItem('courier_auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Cn8$mK2#pL9@vR4!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('courier_auth', 'authenticated');
      toast.success('Вход выполнен!');
    } else {
      toast.error('Неверный пароль');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('courier_auth');
    toast.success('Выход выполнен');
  };

  const loadOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://functions.poehali.dev/2459f17c-8002-4c58-9228-187b74bcef34?status=${selectedStatus}`
      );
      const data = await response.json();
      setOrders(data.orders || []);
    } catch (error) {
      console.error('Error loading orders:', error);
      toast.error('Ошибка загрузки заказов');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
    const interval = setInterval(loadOrders, 10000);
    return () => clearInterval(interval);
  }, [selectedStatus]);

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch('https://functions.poehali.dev/2459f17c-8002-4c58-9228-187b74bcef34', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status: newStatus })
      });

      if (!response.ok) throw new Error('Failed to update');

      toast.success('Статус заказа обновлен!');
      loadOrders();
    } catch (error) {
      console.error('Error updating order:', error);
      toast.error('Ошибка обновления статуса');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-500">Новый</Badge>;
      case 'in_progress':
        return <Badge className="bg-yellow-500">В доставке</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Доставлен</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'cash':
        return '💵 Наличные';
      case 'card':
        return '💳 Карта';
      case 'online':
        return '🌐 Онлайн';
      default:
        return method;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🚴</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Панель курьера</h1>
            <p className="text-gray-600">Введите пароль для доступа</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password" className="text-base">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                className="mt-2"
                autoFocus
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Icon name="LogIn" size={20} className="mr-2" />
              Войти
            </Button>
          </form>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 text-center">
              <Icon name="Info" size={16} className="inline mr-1" />
              Только для сотрудников
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🚴</div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  Панель курьера
                </h1>
                <p className="text-blue-100 text-sm">Управление доставками</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={loadOrders}
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600 font-bold shadow-lg"
              >
                <Icon name="RefreshCw" size={20} className="mr-2" />
                <span className="hidden md:inline">Обновить</span>
              </Button>
              <Button
                onClick={handleLogout}
                size="lg"
                variant="outline"
                className="bg-red-600 hover:bg-red-700 text-white border-0"
              >
                <Icon name="LogOut" size={20} className="mr-2" />
                <span className="hidden md:inline">Выход</span>
              </Button>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            <Button
              onClick={() => setSelectedStatus('new')}
              variant={selectedStatus === 'new' ? 'default' : 'outline'}
              className={`whitespace-nowrap font-bold ${
                selectedStatus === 'new'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              <Icon name="Bell" size={18} className="mr-2" />
              Новые
            </Button>
            <Button
              onClick={() => setSelectedStatus('in_progress')}
              variant={selectedStatus === 'in_progress' ? 'default' : 'outline'}
              className={`whitespace-nowrap font-bold ${
                selectedStatus === 'in_progress'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-yellow-50'
              }`}
            >
              <Icon name="Truck" size={18} className="mr-2" />
              В доставке
            </Button>
            <Button
              onClick={() => setSelectedStatus('completed')}
              variant={selectedStatus === 'completed' ? 'default' : 'outline'}
              className={`whitespace-nowrap font-bold ${
                selectedStatus === 'completed'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              <Icon name="CheckCircle" size={18} className="mr-2" />
              Доставлено
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">⏳</div>
            <p className="text-gray-600 text-lg">Загрузка заказов...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold mb-2">Заказов нет</h2>
            <p className="text-gray-600">В этом статусе пока нет заказов</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Заказ #{order.orderId}
                      </h3>
                      {getStatusBadge(order.orderStatus)}
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString('ru-RU')}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-indigo-600">
                      {order.totalAmount}₽
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {getPaymentMethodText(order.paymentMethod)}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="User" size={20} className="text-indigo-600 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">{order.customerName}</p>
                        <a
                          href={`tel:${order.customerPhone}`}
                          className="text-indigo-600 hover:underline"
                        >
                          {order.customerPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-indigo-600 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-700">Адрес доставки:</p>
                        <p className="text-gray-900">{order.deliveryAddress}</p>
                      </div>
                    </div>

                    {order.comment && (
                      <div className="flex items-start gap-3">
                        <Icon name="MessageSquare" size={20} className="text-indigo-600 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-700">Комментарий:</p>
                          <p className="text-gray-900">{order.comment}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Icon name="ShoppingBag" size={20} className="text-indigo-600" />
                      Состав заказа:
                    </p>
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                        >
                          <span className="text-gray-900">
                            {item.nameRussian} <span className="text-gray-500">x{item.quantity}</span>
                          </span>
                          <span className="font-semibold text-gray-900">
                            {item.price * item.quantity}₽
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {order.orderStatus === 'new' && (
                    <Button
                      onClick={() => updateOrderStatus(order.orderId, 'in_progress')}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white"
                    >
                      <Icon name="Truck" size={18} className="mr-2" />
                      Взять в доставку
                    </Button>
                  )}
                  {order.orderStatus === 'in_progress' && (
                    <Button
                      onClick={() => updateOrderStatus(order.orderId, 'completed')}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Icon name="CheckCircle" size={18} className="mr-2" />
                      Доставлен
                    </Button>
                  )}
                  <a href={`tel:${order.customerPhone}`}>
                    <Button variant="outline" className="border-indigo-600 text-indigo-600">
                      <Icon name="Phone" size={18} className="mr-2" />
                      Позвонить
                    </Button>
                  </a>
                  <a
                    href={`https://yandex.ru/maps/?text=${encodeURIComponent(order.deliveryAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-indigo-600 text-indigo-600">
                      <Icon name="Navigation" size={18} className="mr-2" />
                      Маршрут
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Courier;