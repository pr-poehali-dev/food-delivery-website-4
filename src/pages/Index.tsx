import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const categories = [
  { name: 'Пицца', emoji: '🍕', color: 'bg-orange-500' },
  { name: 'Суши', emoji: '🍣', color: 'bg-red-500' },
  { name: 'Бургеры', emoji: '🍔', color: 'bg-yellow-500' },
  { name: 'Салаты', emoji: '🥗', color: 'bg-green-500' },
  { name: 'Напитки', emoji: '🥤', color: 'bg-blue-500' },
  { name: 'Десерты', emoji: '🍰', color: 'bg-pink-500' },
];

const products: Product[] = [
  { id: 1, name: 'Пепперони', price: 590, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Пицца' },
  { id: 2, name: 'Маргарита', price: 490, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Пицца' },
  { id: 3, name: '4 Сыра', price: 650, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Пицца' },
  { id: 4, name: 'Гавайская', price: 620, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Пицца' },
  { id: 5, name: 'Мясная', price: 680, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Пицца' },
  
  { id: 6, name: 'Филадельфия', price: 450, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/bf68ab52-e67a-43e6-901b-3c332d5ceced.jpg', category: 'Суши' },
  { id: 7, name: 'Калифорния', price: 420, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/bf68ab52-e67a-43e6-901b-3c332d5ceced.jpg', category: 'Суши' },
  { id: 8, name: 'Дракон', price: 480, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/bf68ab52-e67a-43e6-901b-3c332d5ceced.jpg', category: 'Суши' },
  { id: 9, name: 'Запеченный', price: 390, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/bf68ab52-e67a-43e6-901b-3c332d5ceced.jpg', category: 'Суши' },
  { id: 10, name: 'Нигири сет', price: 520, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/bf68ab52-e67a-43e6-901b-3c332d5ceced.jpg', category: 'Суши' },
  
  { id: 11, name: 'Классический', price: 320, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/566aa890-198c-4355-81ec-b41ce2723370.jpg', category: 'Бургеры' },
  { id: 12, name: 'Чизбургер', price: 350, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/566aa890-198c-4355-81ec-b41ce2723370.jpg', category: 'Бургеры' },
  { id: 13, name: 'Двойной', price: 450, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/566aa890-198c-4355-81ec-b41ce2723370.jpg', category: 'Бургеры' },
  { id: 14, name: 'BBQ Бургер', price: 420, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/566aa890-198c-4355-81ec-b41ce2723370.jpg', category: 'Бургеры' },
  { id: 15, name: 'Куриный', price: 290, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/566aa890-198c-4355-81ec-b41ce2723370.jpg', category: 'Бургеры' },
  
  { id: 16, name: 'Цезарь', price: 280, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Салаты' },
  { id: 17, name: 'Греческий', price: 250, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Салаты' },
  { id: 18, name: 'Овощной', price: 220, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Салаты' },
  { id: 19, name: 'С курицей', price: 290, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Салаты' },
  { id: 20, name: 'С тунцом', price: 320, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Салаты' },
  
  { id: 21, name: 'Кола', price: 120, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Напитки' },
  { id: 22, name: 'Спрайт', price: 120, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Напитки' },
  { id: 23, name: 'Сок апельсин', price: 150, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Напитки' },
  { id: 24, name: 'Вода', price: 80, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Напитки' },
  { id: 25, name: 'Чай', price: 100, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Напитки' },
  
  { id: 26, name: 'Чизкейк', price: 280, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Десерты' },
  { id: 27, name: 'Тирамису', price: 320, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Десерты' },
  { id: 28, name: 'Панакота', price: 250, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Десерты' },
  { id: 29, name: 'Мороженое', price: 180, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Десерты' },
  { id: 30, name: 'Шоколадный торт', price: 300, image: 'https://cdn.poehali.dev/projects/fa051e33-e818-49b8-9bde-7a92df2a57fc/files/498563c6-bf19-42de-a2bb-adbc4ae627c0.jpg', category: 'Десерты' },
];

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
      setCartCount(total);
    }
  }, []);

  const addToCart = (product: Product) => {
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    const existingItem = cart.find((item: any) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setCartCount(total);
    
    toast.success(`${product.name} добавлен в корзину!`, {
      duration: 2000,
    });
  };

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-destructive to-secondary bg-clip-text text-transparent">
              🍕 Быстрая Доставка
            </h1>
            <Button
              onClick={() => navigate('/cart')}
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-white font-bold"
            >
              <Icon name="ShoppingCart" size={24} className="mr-2" />
              Корзина
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-destructive text-white min-w-[24px] h-6 flex items-center justify-center">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              onClick={() => setSelectedCategory('Все')}
              variant={selectedCategory === 'Все' ? 'default' : 'outline'}
              className={`whitespace-nowrap font-semibold ${selectedCategory === 'Все' ? 'bg-gradient-to-r from-primary to-destructive' : ''}`}
            >
              Все
            </Button>
            {categories.map(cat => (
              <Button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                variant={selectedCategory === cat.name ? 'default' : 'outline'}
                className={`whitespace-nowrap font-semibold ${selectedCategory === cat.name ? cat.color : ''}`}
              >
                <span className="mr-2">{cat.emoji}</span>
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map(product => (
            <Card
              key={product.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-2 right-2 bg-white/90 text-foreground">
                  {product.category}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  <Button
                    onClick={() => addToCart(product)}
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 font-semibold"
                  >
                    <Icon name="Plus" size={16} className="mr-1" />
                    В корзину
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
