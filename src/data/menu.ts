export interface MenuItem {
  id: number;
  nameChinese: string;
  nameRussian: string;
  price: number;
  priceSecondary?: number;
  category: string;
  imageUrl: string;
  description?: string;
  weight?: string;
}

export const menuData: MenuItem[] = [
  { id: 1, nameChinese: "猪蹄黄瓜", nameRussian: "Салат рулька с огурцом", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 2, nameChinese: "牛肚", nameRussian: "Салат из говяжьих желудков", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 3, nameChinese: "鱿鱼", nameRussian: "Салат из кальмаров", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Свежие кальмары с овощами", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400" },
  { id: 4, nameChinese: "肉类拼盘", nameRussian: "Мясное ассорти", price: 1500, priceSecondary: 1200, weight: "400 г / 300 г", description: "Ассорти из различных мясных деликатесов", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  { id: 5, nameChinese: "豆腐皮", nameRussian: "Салат из кожи тофу", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 6, nameChinese: "牛舌", nameRussian: "Салат из говяжьего языка", price: 1200, priceSecondary: 950, weight: "400 г / 300 г", description: "Острый", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 7, nameChinese: "猪耳黄瓜", nameRussian: "Салат свиные уши с огурцом", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 8, nameChinese: "麻辣牛肉", nameRussian: "Салат пикантная говядина с луком", price: 1500, priceSecondary: 1200, weight: "400 г / 300 г", description: "Острая говядина с репчатым луком", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  { id: 9, nameChinese: "海带", nameRussian: "Салат из морской капусты", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 10, nameChinese: "豆腐葱", nameRussian: "Салат тофу с луком", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },

  { id: 13, nameChinese: "锅包肉", nameRussian: "Свинина в кляре (Гобааожоу)", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Хрустящая свинина в сладком соусе", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 14, nameChinese: "红烧鲤鱼", nameRussian: "Тушёный карп в соевом соусе", price: 4500, weight: "2.5 кг", description: "Целый карп в ароматном соусе", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1580959375944-d48fdb687e90?w=400" },
  { id: 15, nameChinese: "孜然羊肉", nameRussian: "Баранина с зирой", price: 1200, priceSecondary: 950, weight: "400 г / 300 г", description: "Ароматная баранина с пряностями", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400" },
  { id: 16, nameChinese: "糖醋里脊", nameRussian: "Свинина в кисло-сладком соусе", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Нежная свинина в кисло-сладкой глазури", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 17, nameChinese: "宫保鸡丁", nameRussian: "Курица Гун Бао", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Курица с арахисом в остром соусе", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400" },
  { id: 18, nameChinese: "铁板猪肉", nameRussian: "Свинина на чугунной сковороде", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Жареная свинина на горячей сковороде", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 19, nameChinese: "铁板牛肉", nameRussian: "Говядина на чугунной сковороде", price: 1200, priceSecondary: 950, weight: "400 г / 300 г", description: "Жареная говядина на горячей сковороде", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1588168333450-5bd1c0baaa0e?w=400" },
  { id: 20, nameChinese: "糖醋排骨", nameRussian: "Свиные рёбра в кисло-сладком соусе", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Рёбрышки в кисло-сладкой глазури", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 21, nameChinese: "辣炒肉片", nameRussian: "Свинина ломтиками в остром соусе", price: 1200, weight: "500 г", description: "Острая свинина с овощами", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 22, nameChinese: "红烧排骨", nameRussian: "Свиные рёбра в соевом соусе", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Тушёные рёбрышки в соевом соусе", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 23, nameChinese: "茄汁猪肉", nameRussian: "Свинина в томатном соусе", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Свинина в ароматном томатном соусе", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 24, nameChinese: "炒粉条", nameRussian: "Жареная крахмальная лапша с мясом", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Стеклянная лапша с мясом и овощами", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 25, nameChinese: "炖肉", nameRussian: "Тушёная свинина", price: 950, weight: "500 г", description: "Нежная тушёная свинина", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1603073926512-36f3c3e554e1?w=400" },
  { id: 26, nameChinese: "铁板茄子", nameRussian: "Фаршированные баклажаны на чугунной сковороде", price: 1200, priceSecondary: 950, weight: "400 г / 300 г", description: "Баклажаны с мясом на горячей сковороде", category: "Горячие блюда", imageUrl: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400" },

  { id: 48, nameChinese: "丸子汤", nameRussian: "Бульон с фрикадельками", price: 650, weight: "600 г", description: "Прозрачный бульон с мясными фрикадельками", category: "Супы", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 49, nameChinese: "番茄蛋汤", nameRussian: "Суп с помидорами и яйцом", price: 400, weight: "400 г", description: "Лёгкий суп с помидорами и яичными хлопьями", category: "Супы", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 50, nameChinese: "鱿鱼汤", nameRussian: "Бульон с кальмаром", price: 650, weight: "600 г", description: "Наваристый бульон с кальмаром", category: "Супы", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 51, nameChinese: "番茄牛肉汤", nameRussian: "Суп с говядиной и помидорами", price: 850, weight: "600 г", description: "Питательный суп с говядиной", category: "Супы", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },

  { id: 28, nameChinese: "肉丝盖饭", nameRussian: "Рис с мясом верёвочкой", price: 400, weight: "400 г", description: "Рис с нарезанной свининой", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
  { id: 29, nameChinese: "排骨盖饭", nameRussian: "Рис с рёбрышками", price: 400, weight: "400 г", description: "Рис с тушёными рёбрышками", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
  { id: 30, nameChinese: "牛肉盖饭", nameRussian: "Рис с говядиной", price: 450, weight: "400 г", description: "Рис с нежной говядиной", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
  { id: 31, nameChinese: "鱿鱼盖饭", nameRussian: "Рис с кальмаром", price: 450, weight: "400 г", description: "Рис с кальмаром", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
  { id: 32, nameChinese: "扬州炒饭", nameRussian: "Жареный рис по-Янчжоу", price: 400, weight: "400 г", description: "Классический жареный рис с яйцом и креветками", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
  { id: 33, nameChinese: "鸡肉炒面", nameRussian: "Жареная лапша с курицей", price: 400, weight: "400 г", description: "Жареная лапша с курицей", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 34, nameChinese: "牛肉面", nameRussian: "Лапша с говядиной", price: 400, weight: "400 г", description: "Лапша с говядиной", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 35, nameChinese: "蛋炒饭", nameRussian: "Жареный рис с яйцом", price: 400, weight: "400 г", description: "Простой жареный рис с яйцом", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
  { id: 36, nameChinese: "肉炒面", nameRussian: "Жареная лапша с мясом", price: 400, weight: "400 г", description: "Жареная лапша с мясом", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 37, nameChinese: "海鲜炒面", nameRussian: "Жареная лапша с морепродуктами", price: 450, weight: "400 г", description: "Жареная лапша с морепродуктами", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },
  { id: 38, nameChinese: "凉面", nameRussian: "Холодная лапша", price: 450, weight: "500 г", description: "Освежающая холодная лапша с соусом", category: "Рис / Лапша", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" },

  { id: 42, nameChinese: "水饺", nameRussian: "Пельмени варёные (говядина)", price: 450, weight: "20 шт", description: "Классические пельмени с говядиной", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
  { id: 421, nameChinese: "水饺", nameRussian: "Пельмени варёные (свинина)", price: 400, weight: "20 шт", description: "Классические пельмени со свининой", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
  { id: 43, nameChinese: "煎饺", nameRussian: "Пельмени жареные (говядина)", price: 450, weight: "12 шт", description: "Хрустящие жареные пельмени с говядиной", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
  { id: 431, nameChinese: "煎饺", nameRussian: "Пельмени жареные (свинина)", price: 400, weight: "12 шт", description: "Хрустящие жареные пельмени со свининой", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
  { id: 44, nameChinese: "米饭", nameRussian: "Рис варёный", price: 90, weight: "150 г", description: "Порция белого риса", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
  { id: 45, nameChinese: "包子", nameRussian: "Паровые манты (говядина)", price: 450, weight: "6 шт", description: "Паровые манты с говядиной", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
  { id: 451, nameChinese: "包子", nameRussian: "Паровые манты (свинина)", price: 400, weight: "6 шт", description: "Паровые манты со свининой", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
  { id: 46, nameChinese: "馒头", nameRussian: "Паровые пампушки", price: 50, weight: "1 шт", description: "Мягкая паровая пампушка", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
  { id: 47, nameChinese: "饼", nameRussian: "Лепёшка", price: 50, weight: "1 шт", description: "Свежая лепёшка", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: 481, nameChinese: "肉饼", nameRussian: "Пирожок мясной по-китайски", price: 400, description: "Традиционный мясной пирожок", category: "Мучные изделия", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" },
];

export const categories = ['Все', 'Салаты', 'Горячие блюда', 'Супы', 'Рис / Лапша', 'Мучные изделия'];