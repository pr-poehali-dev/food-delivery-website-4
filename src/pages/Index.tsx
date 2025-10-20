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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [selectedPortion, setSelectedPortion] = useState<'large' | 'small'>('large');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <header className={`bg-gradient-to-r from-red-600 via-red-500 to-orange-500 shadow-xl sticky top-0 z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-1">
                🏮 Китайская Еда
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

              </div>

              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                    {item.nameRussian}
                  </h3>
                  <p className="text-xs text-red-600 font-medium">{item.nameChinese}</p>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-red-600">{item.price}₽</span>
                    <span className="text-xs text-gray-500">{item.weight}</span>
                  </div>
                  {item.priceSecondary && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-red-500">{item.priceSecondary}₽</span>
                      <span className="text-xs text-gray-500">{item.weightSecondary}</span>
                    </div>
                  )}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDish(item);
                    }}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-md"
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-xl border-4 border-red-200">
                <img 
                  src="https://cdn.poehali.dev/files/280cb2dc-f9ab-47e3-ad4f-a59c7f8414e2.png" 
                  alt="Вход в ресторан Пекин с красными китайскими фонариками"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl border-4 border-red-200">
                <img 
                  src="https://cdn.poehali.dev/files/ce94420c-4f1c-41f3-bdec-64095f3fd1b8.png" 
                  alt="Здание торгового центра с рестораном Пекин"
                  className="w-full h-full object-cover"
                />
              </div>
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

      <Dialog open={!!selectedDish} onOpenChange={() => { setSelectedDish(null); setSelectedPortion('large'); }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedDish && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-red-800 flex items-center gap-3">
                  {selectedDish.nameRussian}
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
                  {selectedDish.description && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{selectedDish.description}</p>
                    </div>
                  )}

                  {selectedDish.priceSecondary ? (
                    <div className="space-y-3">
                      <p className="font-semibold text-gray-800">Выберите порцию:</p>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setSelectedPortion('large')}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedPortion === 'large'
                              ? 'border-red-600 bg-red-50 shadow-md'
                              : 'border-gray-200 hover:border-red-300'
                          }`}
                        >
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">{selectedDish.weight}</p>
                            <p className="text-2xl font-bold text-red-600">{selectedDish.price}₽</p>
                          </div>
                        </button>
                        <button
                          onClick={() => setSelectedPortion('small')}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedPortion === 'small'
                              ? 'border-red-600 bg-red-50 shadow-md'
                              : 'border-gray-200 hover:border-red-300'
                          }`}
                        >
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-1">{selectedDish.weightSecondary}</p>
                            <p className="text-2xl font-bold text-red-600">{selectedDish.priceSecondary}₽</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-red-50 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">Вес: {selectedDish.weight}</p>
                      <p className="text-3xl font-bold text-red-600">{selectedDish.price}₽</p>
                    </div>
                  )}

                  <Button
                    onClick={() => {
                      const itemToAdd = {
                        ...selectedDish,
                        price: selectedPortion === 'large' ? selectedDish.price : (selectedDish.priceSecondary || selectedDish.price),
                        weight: selectedPortion === 'large' ? selectedDish.weight : (selectedDish.weightSecondary || selectedDish.weight),
                        id: selectedPortion === 'large' ? selectedDish.id : selectedDish.id + 0.1,
                      };
                      addToCart(itemToAdd);
                      setSelectedDish(null);
                      setSelectedPortion('large');
                    }}
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-lg shadow-lg"
                  >
                    <Icon name="ShoppingCart" size={24} className="mr-2" />
                    Добавить в корзину за {selectedPortion === 'large' ? selectedDish.price : (selectedDish.priceSecondary || selectedDish.price)}₽
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