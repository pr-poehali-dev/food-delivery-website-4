import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface CartItem {
  id: number;
  nameRussian: string;
  nameChinese?: string;
  price: number;
  imageUrl: string;
  category: string;
  quantity: number;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = total >= 1000 ? 0 : 150;
  const finalTotal = total + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      toast.error('Заполните все обязательные поля!');
      return;
    }

    if (paymentMethod === 'online') {
      setLoading(true);
      try {
        const orderDescription = cartItems
          .map(item => `${item.nameRussian} x${item.quantity}`)
          .join(', ');
        const orderId = `ORDER-${Date.now()}`;

        const response = await fetch('https://functions.poehali.dev/b4975d5f-0704-40a2-92bb-fec3bc126d65', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: finalTotal,
            description: orderDescription,
            orderId: orderId
          })
        });

        if (!response.ok) throw new Error('Ошибка создания платежа');

        const data = await response.json();

        localStorage.setItem('current_order', JSON.stringify({
          orderId,
          items: cartItems,
          customerInfo: { name, phone, address, comment },
          total: finalTotal,
          paymentId: data.payment_id
        }));

        window.location.href = data.payment_url;
      } catch (error) {
        console.error('Payment error:', error);
        toast.error('Ошибка при создании платежа. Попробуйте позже.');
        setLoading(false);
      }
    } else {
      localStorage.removeItem('cart');
      toast.success('Заказ успешно оформлен! Ожидайте звонка.');
      setTimeout(() => navigate('/'), 2000);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <Card className="p-12 text-center max-w-md">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">Добавьте блюда в корзину для оформления заказа</p>
          <Button onClick={() => navigate('/')} size="lg" className="bg-gradient-to-r from-red-600 to-orange-600">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться в меню
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <header className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/cart')}
              className="hover:bg-white/10 text-white"
            >
              <Icon name="ArrowLeft" size={24} />
            </Button>
            <h1 className="text-3xl font-bold text-white">📝 Оформление заказа</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="User" size={24} className="text-red-600" />
                Контактные данные
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите ваше имя"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-base">Адрес доставки *</Label>
                  <Input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Улица, дом, квартира"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="comment" className="text-base">Комментарий к заказу</Label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Уточнения, пожелания"
                    className="mt-2 min-h-[80px]"
                  />
                </div>
              </form>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="CreditCard" size={24} className="text-red-600" />
                Способ оплаты
              </h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-red-50 cursor-pointer">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex-1 cursor-pointer flex items-center gap-3">
                    <Icon name="Banknote" size={20} className="text-green-600" />
                    <div>
                      <div className="font-semibold">Наличными курьеру</div>
                      <div className="text-sm text-gray-500">Оплата при получении</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-red-50 cursor-pointer">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center gap-3">
                    <Icon name="CreditCard" size={20} className="text-blue-600" />
                    <div>
                      <div className="font-semibold">Картой курьеру</div>
                      <div className="text-sm text-gray-500">Оплата при получении терминалом</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 border-purple-200 bg-purple-50 rounded-lg hover:bg-purple-100 cursor-pointer">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online" className="flex-1 cursor-pointer flex items-center gap-3">
                    <Icon name="Smartphone" size={20} className="text-purple-600" />
                    <div>
                      <div className="font-semibold flex items-center gap-2">
                        Онлайн оплата через ЮKassa
                        <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded">Рекомендуем</span>
                      </div>
                      <div className="text-sm text-gray-600">Visa, MasterCard, Мир, СБП</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="ShoppingBag" size={24} className="text-red-600" />
                Ваш заказ
              </h2>

              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b">
                    <img
                      src={item.imageUrl}
                      alt={item.nameRussian}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{item.nameRussian}</h3>
                      <p className="text-xs text-gray-500">{item.quantity} × {item.price}₽</p>
                      <p className="text-sm font-bold text-red-600">{item.price * item.quantity}₽</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pt-4 border-t">
                <div className="flex justify-between text-gray-600">
                  <span>Сумма заказа:</span>
                  <span className="font-semibold">{total}₽</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Доставка:</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">Бесплатно</span>
                    ) : (
                      `${deliveryFee}₽`
                    )}
                  </span>
                </div>
                {total < 1000 && (
                  <p className="text-xs text-gray-500">
                    Бесплатная доставка от 1000₽
                  </p>
                )}
                <div className="flex justify-between text-xl font-bold pt-3 border-t">
                  <span>Итого:</span>
                  <span className="text-red-600">{finalTotal}₽</span>
                </div>
              </div>

              {paymentMethod === 'online' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Icon name="Lock" size={16} className="text-blue-600 mt-0.5" />
                    <p className="text-xs text-blue-800">
                      Безопасная оплата. После нажатия кнопки вы будете перенаправлены на страницу оплаты ЮKassa.
                    </p>
                  </div>
                </div>
              )}

              <Button
                onClick={handleSubmit}
                disabled={loading}
                size="lg"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-lg"
              >
                {loading ? (
                  <>
                    <Icon name="Loader2" size={24} className="mr-2 animate-spin" />
                    Подготовка оплаты...
                  </>
                ) : paymentMethod === 'online' ? (
                  <>
                    <Icon name="CreditCard" size={24} className="mr-2" />
                    Перейти к оплате {finalTotal}₽
                  </>
                ) : (
                  <>
                    Оформить заказ
                    <Icon name="CheckCircle" size={24} className="ml-2" />
                  </>
                )}
              </Button>

              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <div className="flex items-start gap-2 text-sm text-green-800">
                  <Icon name="Clock" size={16} className="mt-0.5" />
                  <div>
                    <div className="font-semibold">Доставка 40-60 минут</div>
                    <div className="text-xs text-green-600">Позвоним для подтверждения</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;