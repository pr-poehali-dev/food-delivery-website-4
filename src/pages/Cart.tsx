import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (id: number, change: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" size={24} />
            </Button>
            <h1 className="text-3xl font-bold text-primary">🛒 Корзина</h1>
          </div>
          <div className="text-2xl font-bold text-primary">
            {total} ₽
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <Card className="p-12 text-center animate-fade-in">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-2">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6">Добавьте вкусные блюда из меню</p>
            <Button onClick={() => navigate('/')} size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться в меню
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6">
            {cartItems.map(item => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                <div className="flex gap-4 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Icon name="Trash2" size={20} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="h-8 w-8 hover:bg-background"
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="h-8 w-8 hover:bg-background"
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {item.price * item.quantity} ₽
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-to-r from-primary to-destructive text-white sticky bottom-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-semibold">Итого:</span>
                <span className="text-3xl font-bold">{total} ₽</span>
              </div>
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg"
              >
                Оформить заказ
                <Icon name="CheckCircle" size={24} className="ml-2" />
              </Button>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
