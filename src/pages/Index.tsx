import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';
import { menuData, categories, MenuItem } from '@/data/menu';

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [cartCount, setCartCount] = useState(0);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
      setCartCount(total);
    }
  }, []);

  const addToCart = (product: MenuItem, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    
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
    
    toast.success(`${product.nameRussian} добавлен в корзину!`, {
      duration: 2000,
    });
  };

  const filteredProducts = selectedCategory === 'Все' 
    ? menuData 
    : menuData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <header className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-1">
                🏮 Китайский Ресторан
              </h1>
              <p className="text-red-100 text-sm">Аутентичная китайская кухня</p>
            </div>
            <Button
              onClick={() => navigate('/cart')}
              size="lg"
              className="relative bg-white hover:bg-red-50 text-red-600 font-bold shadow-lg"
            >
              <Icon name="ShoppingCart" size={24} className="mr-2" />
              Корзина
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-red-900 min-w-[24px] h-6 flex items-center justify-center font-bold">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                variant={selectedCategory === cat.name ? 'default' : 'outline'}
                className={`whitespace-nowrap font-semibold shadow-md transition-all ${
                  selectedCategory === cat.name
                    ? `${cat.color} text-white border-none`
                    : 'bg-white text-gray-700 hover:bg-red-50'
                }`}
              >
                <span className="mr-2 text-lg">{cat.emoji}</span>
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-2">
            {selectedCategory === 'Все' ? 'Все блюда' : selectedCategory}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'блюдо' : 'блюд'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Card
              key={item.id}
              onClick={() => setSelectedDish(item)}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-red-100 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-100 to-orange-100">
                <img
                  src={item.imageUrl}
                  alt={item.nameRussian}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-red-600 text-white font-bold shadow-lg">
                  #{item.id}
                </Badge>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">
                    {item.nameRussian}
                  </h3>
                  <p className="text-sm text-red-600 font-medium">{item.nameChinese}</p>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{item.description}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-red-600">
                      {item.price}₽
                    </span>
                    {item.priceSecondary && (
                      <span className="text-sm text-gray-500 ml-2">
                        / {item.priceSecondary}₽
                      </span>
                    )}
                  </div>
                  <Button
                    onClick={(e) => addToCart(item, e)}
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-md"
                  >
                    <Icon name="Plus" size={20} className="mr-1" />
                    В корзину
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🥢</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Блюда не найдены
            </h3>
            <p className="text-gray-500">
              Попробуйте выбрать другую категорию
            </p>
          </div>
        )}
      </main>

      <section className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            📍 Как нас найти
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-lg">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Кемерово, ул. Тухачевского, 22В</p>
                  <p className="text-sm text-red-600 font-semibold">Ресторан Пекин</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-lg">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Телефон</h3>
                  <a href="tel:+73842657758" className="text-gray-600 hover:text-red-600 transition-colors">
                    +7 (384) 265-77-58
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-lg">
                <div className="bg-red-600 text-white p-3 rounded-full">
                  <Icon name="Clock" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Режим работы</h3>
                  <p className="text-gray-600">Ежедневно: 10:00 - 23:00</p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-lg"
              >
                <a href="https://yandex.ru/maps/?text=г. Кемерово, ул. Тухачевского, 22В, Ресторан Пекин" target="_blank" rel="noopener noreferrer">
                  <Icon name="Navigation" size={20} className="mr-2" />
                  Построить маршрут
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-red-800 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">🏮 Китайский Ресторан</h3>
            <p className="text-red-200">Вкус настоящего Китая</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-red-100">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              <a href="tel:+73842657758" className="hover:text-white transition-colors">
                +7 (384) 265-77-58
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Ежедневно: 10:00 - 23:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              <span>г. Кемерово, ул. Тухачевского, 22В</span>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedDish} onOpenChange={() => setSelectedDish(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedDish && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-red-800 flex items-center gap-3">
                  {selectedDish.nameRussian}
                  <Badge className="bg-red-600 text-white">#{selectedDish.id}</Badge>
                </DialogTitle>
                <p className="text-xl text-red-600 font-medium">{selectedDish.nameChinese}</p>
              </DialogHeader>

              <div className="space-y-6">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={selectedDish.imageUrl}
                    alt={selectedDish.nameRussian}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Категория</p>
                      <p className="text-lg font-semibold text-gray-800">{selectedDish.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Цена</p>
                      <div>
                        <span className="text-3xl font-bold text-red-600">{selectedDish.price}₽</span>
                        {selectedDish.priceSecondary && (
                          <span className="text-lg text-gray-500 ml-2">/ {selectedDish.priceSecondary}₽</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {selectedDish.description && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Icon name="Info" size={20} className="text-orange-600" />
                        Описание
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{selectedDish.description}</p>
                    </div>
                  )}

                  <Button
                    onClick={() => {
                      addToCart(selectedDish);
                      setSelectedDish(null);
                    }}
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-lg shadow-lg"
                  >
                    <Icon name="ShoppingCart" size={24} className="mr-2" />
                    Добавить в корзину за {selectedDish.price}₽
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;