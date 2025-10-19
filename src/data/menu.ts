export interface MenuItem {
  id: number;
  nameChinese: string;
  nameRussian: string;
  price: number;
  priceSecondary?: number;
  category: string;
  imageUrl: string;
  description?: string;
}

export const menuData: MenuItem[] = [
  // Горячие блюда
  { id: 265, nameChinese: "辣炒蛤贝", nameRussian: "Мидии в остром соусе", price: 400, description: "Свежие мидии, обжаренные в остром соусе с чесноком, имбирем и перцем чили. Острое пикантное блюдо.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 266, nameChinese: "辣白菜炒年糕", nameRussian: "Рисовая лапша с пекинской капустой", price: 400, description: "Рисовая лапша, обжаренная с пекинской капустой в остром соусе. Классическое блюдо с богатым вкусом.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 270, nameChinese: "焖丸子", nameRussian: "Свиные тефтели в соевом соусе", price: 400, priceSecondary: 950, description: "Нежные свиные тефтели, тушеные в ароматном соевом соусе с добавлением специй.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 101, nameChinese: "糖醋里脊", nameRussian: "Свинина в кисло-сладком соусе", price: 450, description: "Хрустящие кусочки свинины в фирменном кисло-сладком соусе. Идеальный баланс вкусов.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 102, nameChinese: "宫保鸡丁", nameRussian: "Курица Гунбао", price: 420, description: "Курица с арахисом, овощами и перцем чили в остром соусе. Знаменитое блюдо провинции Сычуань.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 103, nameChinese: "麻婆豆腐", nameRussian: "Тофу Мапо", price: 350, description: "Шелковистый тофу в пикантном соусе с фаршем, чесноком и сычуаньским перцем.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 104, nameChinese: "回锅肉", nameRussian: "Свинина дважды приготовленная", price: 480, description: "Свинина, сначала отваренная, затем обжаренная с овощами и специальным соусом.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 105, nameChinese: "鱼香茄子", nameRussian: "Баклажаны по-сычуаньски", price: 380, description: "Нежные баклажаны в пряном соусе с чесноком, имбирем и зеленым луком.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 106, nameChinese: "干煸豆角", nameRussian: "Стручковая фасоль", price: 360, description: "Хрустящая стручковая фасоль, обжаренная до золотистой корочки с чесноком и специями.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 107, nameChinese: "水煮鱼", nameRussian: "Рыба в остром масле", price: 650, description: "Нежная рыба в ароматном остром масле с большим количеством перца чили. Очень острое!", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 108, nameChinese: "北京烤鸭", nameRussian: "Утка по-пекински", price: 1200, description: "Целая утка с хрустящей корочкой и нежным мясом. Подается с тонкими блинчиками и соусом.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 109, nameChinese: "红烧排骨", nameRussian: "Ребрышки в красном соусе", price: 520, description: "Свиные ребрышки, тушеные в красном соусе до мягкости. Мясо легко отделяется от кости.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 110, nameChinese: "糖醋排骨", nameRussian: "Ребрышки в кисло-сладком соусе", price: 520, description: "Сочные ребрышки в глазури из кисло-сладкого соуса. Прекрасное сочетание вкусов.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 115, nameChinese: "酸菜鱼", nameRussian: "Рыба с квашеной капустой", price: 680, description: "Свежая рыба с кислой капустой в ароматном бульоне. Традиционное блюдо Сычуани.", category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },

  // Супы
  { id: 48, nameChinese: "山东丸子汤", nameRussian: "Бульон с фрикадельками", price: 600, priceSecondary: 650, description: "Прозрачный ароматный бульон с нежными мясными фрикадельками и свежей зеленью.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 49, nameChinese: "木须柿子汤", nameRussian: "Суп с помидорами и яйцом", price: 400, description: "Легкий суп с помидорами, яйцом и деревянными грибами. Освежающий и полезный.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 247, nameChinese: "鲜汤鱿鱼", nameRussian: "Бульон с кальмарами", price: 600, priceSecondary: 650, description: "Наваристый бульон с нежными кальмарами, овощами и ароматными специями.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 248, nameChinese: "牛肉柿子汤", nameRussian: "Суп с говядиной и помидорами", price: 600, priceSecondary: 850, description: "Питательный суп с нежной говядиной и сочными помидорами в ароматном бульоне.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 111, nameChinese: "酸辣汤", nameRussian: "Кисло-острый суп", price: 350, description: "Классический китайский суп с идеальным балансом кислого и острого вкусов. С тофу, грибами и бамбуком.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 112, nameChinese: "玉米汤", nameRussian: "Кукурузный суп", price: 300, description: "Нежный кремовый суп из свежей кукурузы с яичными хлопьями. Мягкий и согревающий.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 113, nameChinese: "海鲜汤", nameRussian: "Суп с морепродуктами", price: 550, description: "Богатый суп с креветками, кальмарами, мидиями и овощами. Вкус моря в каждой ложке.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 114, nameChinese: "蛋花汤", nameRussian: "Суп с яичными хлопьями", price: 280, description: "Легкий прозрачный суп с нежными яичными хлопьями и зеленым луком. Классика китайской кухни.", category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },

  // Гарниры
  { id: 28, nameChinese: "鱼香肉丝盖饭", nameRussian: "Рис с мясом по-сычуаньски", price: 400, description: "Рис с нежными полосками свинины в пряном соусе с овощами. Насыщенный вкус.", category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 29, nameChinese: "红烧排骨盖饭", nameRussian: "Рис с ребрышками", price: 400, description: "Рассыпчатый рис с тушеными ребрышками в красном соусе. Сытное и вкусное блюдо.", category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 30, nameChinese: "溜肉片盖饭", nameRussian: "Рис со свининой", price: 400, description: "Рис с обжаренной свининой и овощами в ароматном соусе. Классическое сочетание.", category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 31, nameChinese: "黑椒牛柳盖饭", nameRussian: "Рис с говядиной в черном перце", price: 400, priceSecondary: 450, description: "Рис с нежной говядиной в соусе из черного перца. Пряное и ароматное.", category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 33, nameChinese: "鱿鱼盖饭", nameRussian: "Рис с кальмарами", price: 400, priceSecondary: 450, description: "Рис с нежными кальмарами и овощами в легком соусе. Морской деликатес.", category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 50, nameChinese: "宫保鸡丁盖饭", nameRussian: "Рис Гунбао с курицей", price: 400, description: "Рис с курицей, огурцом, луком и арахисом в кисло-сладком соусе. Идеальное сочетание.", category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },
  { id: 51, nameChinese: "地三鲜盖饭", nameRussian: "Рис Дисаньсянь", price: 400, description: "Рис с баклажанами, картофелем и перцем. Три овоща в гармонии.", category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },

  // Лапша
  { id: 41, nameChinese: "鸡肉炒面", nameRussian: "Жареная лапша с курицей", price: 400, description: "Обжаренная лапша с куриным филе и свежими овощами в соевом соусе.", category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 43, nameChinese: "牛肉面", nameRussian: "Лапша с говядиной", price: 400, description: "Лапша в ароматном бульоне с нежной говядиной и зеленым луком.", category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 244, nameChinese: "鱼香肉丝炒面", nameRussian: "Жареная лапша с мясом", price: 400, description: "Лапша с полосками свинины в кисло-сладком соусе. Яркий насыщенный вкус.", category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },
  { id: 245, nameChinese: "海鲜炒面", nameRussian: "Жареная лапша с морепродуктами", price: 400, priceSecondary: 450, description: "Лапша с креветками, кальмарами и мидиями. Щедрая порция морепродуктов.", category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },
  { id: 246, nameChinese: "冷面", nameRussian: "Холодная лапша", price: 500, priceSecondary: 450, description: "Освежающая холодная лапша с яйцом, говядиной, огурцами и помидорами в специальном соусе.", category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },

  // Рис
  { id: 40, nameChinese: "扬州炒饭", nameRussian: "Жареный рис по-янчжоуски", price: 400, description: "Классический жареный рис с яйцом, креветками, горошком и морковью. Знаменитое блюдо.", category: "Рис", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 44, nameChinese: "蛋炒饭", nameRussian: "Жареный рис с яйцом", price: 400, description: "Рассыпчатый жареный рис с яйцом и зеленым луком. Просто и вкусно.", category: "Рис", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },
  { id: 46, nameChinese: "米饭", nameRussian: "Рис вареный", price: 150, priceSecondary: 90, description: "Белый рассыпчатый рис, приготовленный на пару. Идеальный гарнир к любому блюду.", category: "Рис", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },

  // Пельмени
  { id: 42, nameChinese: "小麦面饺子", nameRussian: "Пельмени вареные (20шт)", price: 450, description: "Сочные пельмени с говядиной или свининой. Приготовлены на пару, подаются с соевым соусом.", category: "Пельмени", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 45, nameChinese: "煎饺", nameRussian: "Пельмени жареные (20шт)", price: 450, description: "Хрустящие жареные пельмени с сочной начинкой из говядины или свинины. С румяной корочкой.", category: "Пельмени", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },

  // Манты
  { id: 73, nameChinese: "包子", nameRussian: "Паровые манты (6шт)", price: 450, description: "Большие сочные манты с говядиной или свининой, приготовленные на пару. Традиционное блюдо.", category: "Манты", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },
];

export const categories = [
  { name: "Все", emoji: "🍽️", color: "bg-gradient-to-r from-red-500 to-orange-500" },
  { name: "Горячие блюда", emoji: "🔥", color: "bg-gradient-to-r from-orange-500 to-red-600" },
  { name: "Супы", emoji: "🍜", color: "bg-gradient-to-r from-red-500 to-pink-500" },
  { name: "Гарниры", emoji: "🍛", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
  { name: "Лапша", emoji: "🍝", color: "bg-gradient-to-r from-amber-500 to-yellow-600" },
  { name: "Рис", emoji: "🍚", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { name: "Пельмени", emoji: "🥟", color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
  { name: "Манты", emoji: "🥟", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
];
