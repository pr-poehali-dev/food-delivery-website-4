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
  // Горячие блюда - Страница 1
  { id: 265, nameChinese: "辣炒蛤贝", nameRussian: "Мидии в остром соусе", price: 400, description: "Свежие мидии в остром соусе с чесноком и перцем чили", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 266, nameChinese: "辣白菜炒年糕", nameRussian: "Рисовая лапша с пекинской капустой", price: 400, description: "Рисовая лапша с пекинской капустой в остром соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 267, nameChinese: "尖椒干豆腐", nameRussian: "Острый перец с сушёным тофу", price: 400, description: "Острый перец с нарезанным сушеным тофу", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 268, nameChinese: "辣白菜炒粉条", nameRussian: "Фунчоза с пекинской капустой", price: 400, description: "Стеклянная лапша с пекинской капустой в остром соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 269, nameChinese: "肉沫粉条", nameRussian: "Фунчоза с мясным фаршем", price: 400, description: "Стеклянная лапша с ароматным мясным фаршем", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 270, nameChinese: "焖丸子", nameRussian: "Свиные тефтели в соевом соусе", price: 400, priceSecondary: 950, description: "Нежные тефтели в ароматном соевом соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 271, nameChinese: "虎皮尖椒", nameRussian: "Жареный острый перец", price: 400, description: "Перец с тигровой корочкой в соевом соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 272, nameChinese: "家常烧茄子", nameRussian: "Баклажаны домашние", price: 400, description: "Тушеные баклажаны в домашнем стиле", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 273, nameChinese: "辣白菜炒肥牛", nameRussian: "Говядина с пекинской капустой", price: 400, priceSecondary: 450, description: "Нежная говядина с капустой в остром соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 274, nameChinese: "炖牛肉", nameRussian: "Тушеная говядина", price: 400, priceSecondary: 950, description: "Нежная говядина, тушенная до мягкости", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 275, nameChinese: "家常烧豆腐", nameRussian: "Тофу домашний", price: 400, description: "Тофу в домашнем соусе с овощами", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 276, nameChinese: "酸菜炒粉", nameRussian: "Фунчоза с квашеной капустой", price: 400, description: "Стеклянная лапша с кислой капустой", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 277, nameChinese: "西红柿炒蛋", nameRussian: "Помидоры с яйцом", price: 400, description: "Классическое сочетание помидоров и яиц", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 278, nameChinese: "地三鲜", nameRussian: "Три овоща (баклажан, картофель, перец)", price: 400, description: "Знаменитое блюдо из трех овощей", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 279, nameChinese: "尖椒肥牛", nameRussian: "Говядина с острым перцем", price: 400, priceSecondary: 450, description: "Нежная говядина с зеленым перцем", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 280, nameChinese: "鱼香肉丝", nameRussian: "Свинина по-сычуаньски", price: 400, description: "Полоски свинины в пряном соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 281, nameChinese: "熘肉段", nameRussian: "Жареная свинина кусочками", price: 400, description: "Хрустящие кусочки свинины", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 282, nameChinese: "锅包肉", nameRussian: "Свинина в кляре", price: 400, description: "Хрустящая свинина в сладком соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 283, nameChinese: "红烧排骨", nameRussian: "Ребрышки в красном соусе", price: 400, priceSecondary: 950, description: "Свиные ребрышки в красном соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 284, nameChinese: "糖醋排骨", nameRussian: "Ребрышки в кисло-сладком соусе", price: 400, priceSecondary: 950, description: "Ребрышки в кисло-сладкой глазури", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },

  // Супы - Страница 2
  { id: 48, nameChinese: "山东丸子汤", nameRussian: "Бульон с фрикадельками", price: 600, priceSecondary: 650, description: "Прозрачный бульон с мясными фрикадельками", category: "Супы", imageUrl: "https://i.imgur.com/YourImage2.jpg" },
  { id: 49, nameChinese: "木须柿子汤", nameRussian: "Суп с помидорами и яйцом", price: 400, description: "Легкий суп с помидорами и яйцом", category: "Супы", imageUrl: "https://i.imgur.com/YourImage2.jpg" },
  { id: 247, nameChinese: "鲜汤鱿鱼", nameRussian: "Бульон с кальмарами", price: 600, priceSecondary: 650, description: "Наваристый бульон с нежными кальмарами", category: "Супы", imageUrl: "https://i.imgur.com/YourImage2.jpg" },
  { id: 248, nameChinese: "牛肉柿子汤", nameRussian: "Суп с говядиной и помидорами", price: 600, priceSecondary: 850, description: "Питательный суп с говядиной", category: "Супы", imageUrl: "https://i.imgur.com/YourImage2.jpg" },
  { id: 249, nameChinese: "酸辣汤", nameRussian: "Кисло-острый суп", price: 400, description: "Классический кисло-острый суп", category: "Супы", imageUrl: "https://i.imgur.com/YourImage2.jpg" },
  { id: 250, nameChinese: "紫菜蛋花汤", nameRussian: "Суп с морской капустой и яйцом", price: 400, description: "Легкий суп с нори и яичными хлопьями", category: "Супы", imageUrl: "https://i.imgur.com/YourImage2.jpg" },
  { id: 251, nameChinese: "排骨白菜汤", nameRussian: "Суп с ребрышками и капустой", price: 600, priceSecondary: 650, description: "Наваристый суп с ребрышками", category: "Супы", imageUrl: "https://i.imgur.com/YourImage2.jpg" },

  // Гарниры - Страница 3
  { id: 28, nameChinese: "鱼香肉丝盖饭", nameRussian: "Рис с мясом по-сычуаньски", price: 400, description: "Рис с полосками свинины в пряном соусе", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 29, nameChinese: "红烧排骨盖饭", nameRussian: "Рис с ребрышками", price: 400, description: "Рис с ребрышками в красном соусе", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 30, nameChinese: "溜肉片盖饭", nameRussian: "Рис со свининой", price: 400, description: "Рис с обжаренной свининой", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 31, nameChinese: "黑椒牛柳盖饭", nameRussian: "Рис с говядиной в черном перце", price: 400, priceSecondary: 450, description: "Рис с говядиной в соусе из черного перца", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 32, nameChinese: "茄汁大虾盖饭", nameRussian: "Рис с креветками в томатном соусе", price: 400, priceSecondary: 450, description: "Рис с креветками в ароматном томатном соусе", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 33, nameChinese: "鱿鱼盖饭", nameRussian: "Рис с кальмарами", price: 400, priceSecondary: 450, description: "Рис с нежными кальмарами", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 34, nameChinese: "辣白菜肥牛盖饭", nameRussian: "Рис с говядиной и пекинской капустой", price: 400, priceSecondary: 450, description: "Рис с говядиной и острой капустой", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 35, nameChinese: "锅包肉盖饭", nameRussian: "Рис со свининой в кляре", price: 400, description: "Рис с хрустящей свининой", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 36, nameChinese: "地三鲜盖饭", nameRussian: "Рис с тремя овощами", price: 400, description: "Рис с баклажанами, картофелем и перцем", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 37, nameChinese: "西红柿炒蛋盖饭", nameRussian: "Рис с помидорами и яйцом", price: 400, description: "Рис с помидорами и яичницей", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 38, nameChinese: "熘肉段盖饭", nameRussian: "Рис с жареной свининой", price: 400, description: "Рис с кусочками жареной свинины", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 39, nameChinese: "糖醋排骨盖饭", nameRussian: "Рис с ребрышками кисло-сладкими", price: 400, description: "Рис с ребрышками в кисло-сладком соусе", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 50, nameChinese: "宫保鸡丁盖饭", nameRussian: "Рис Гунбао с курицей", price: 400, description: "Рис с курицей, арахисом в кисло-сладком соусе", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },
  { id: 51, nameChinese: "地三鲜盖饭", nameRussian: "Рис Дисаньсянь", price: 400, description: "Рис с тремя овощами в гармонии", category: "Гарниры", imageUrl: "https://i.imgur.com/YourImage3.jpg" },

  // Лапша и Рис - Страница 4
  { id: 40, nameChinese: "扬州炒饭", nameRussian: "Жареный рис по-янчжоуски", price: 400, description: "Жареный рис с яйцом, креветками и овощами", category: "Рис", imageUrl: "https://i.imgur.com/YourImage4.jpg" },
  { id: 41, nameChinese: "鸡肉炒面", nameRussian: "Жареная лапша с курицей", price: 400, description: "Обжаренная лапша с куриным филе", category: "Лапша", imageUrl: "https://i.imgur.com/YourImage4.jpg" },
  { id: 42, nameChinese: "小麦面饺子", nameRussian: "Пельмени вареные (20шт)", price: 450, description: "Сочные вареные пельмени с говядиной или свининой", category: "Пельмени", imageUrl: "https://i.imgur.com/YourImage4.jpg" },
  { id: 43, nameChinese: "牛肉面", nameRussian: "Лапша с говядиной", price: 400, description: "Лапша в бульоне с нежной говядиной", category: "Лапша", imageUrl: "https://i.imgur.com/YourImage4.jpg" },
  { id: 44, nameChinese: "蛋炒饭", nameRussian: "Жареный рис с яйцом", price: 400, description: "Рассыпчатый жареный рис с яйцом", category: "Рис", imageUrl: "https://i.imgur.com/YourImage4.jpg" },
  { id: 45, nameChinese: "煎饺", nameRussian: "Пельмени жареные (20шт)", price: 450, description: "Хрустящие жареные пельмени", category: "Пельмени", imageUrl: "https://i.imgur.com/YourImage4.jpg" },
  { id: 46, nameChinese: "米饭", nameRussian: "Рис вареный", price: 150, priceSecondary: 90, description: "Белый рассыпчатый рис", category: "Рис", imageUrl: "https://i.imgur.com/YourImage4.jpg" },
  { id: 47, nameChinese: "猪肉大葱馅饼", nameRussian: "Пирожки со свининой и луком (3шт)", price: 300, description: "Жареные пирожки с начинкой", category: "Закуски", imageUrl: "https://i.imgur.com/YourImage4.jpg" },

  // Манты и специальное - Страница 5
  { id: 73, nameChinese: "包子", nameRussian: "Паровые манты (6шт)", price: 450, description: "Большие сочные манты на пару. Говядина / Свинина", category: "Манты", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 244, nameChinese: "鱼香肉丝炒面", nameRussian: "Жареная лапша с мясом", price: 400, description: "Лапша с полосками свинины в кисло-сладком соусе", category: "Лапша", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 245, nameChinese: "海鲜炒面", nameRussian: "Жареная лапша с морепродуктами", price: 400, priceSecondary: 450, description: "Лапша с креветками и кальмарами", category: "Лапша", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 246, nameChinese: "冷面", nameRussian: "Холодная лапша", price: 500, priceSecondary: 450, description: "Освежающая холодная лапша с яйцом и говядиной", category: "Лапша", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 252, nameChinese: "牛肉炒饭", nameRussian: "Жареный рис с говядиной", price: 400, priceSecondary: 450, description: "Ароматный жареный рис с говядиной", category: "Рис", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 253, nameChinese: "海鲜炒饭", nameRussian: "Жареный рис с морепродуктами", price: 400, priceSecondary: 450, description: "Жареный рис с креветками и кальмарами", category: "Рис", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 254, nameChinese: "火腿炒饭", nameRussian: "Жареный рис с ветчиной", price: 400, description: "Жареный рис с кусочками ветчины", category: "Рис", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 255, nameChinese: "韭菜鸡蛋馅饼", nameRussian: "Пирожки с луком и яйцом (3шт)", price: 300, description: "Жареные пирожки с луком-пореем", category: "Закуски", imageUrl: "https://i.imgur.com/YourImage5.jpg" },
  { id: 256, nameChinese: "猪肉酸菜馅饼", nameRussian: "Пирожки со свининой и капустой (3шт)", price: 300, description: "Жареные пирожки с кислой капустой", category: "Закуски", imageUrl: "https://i.imgur.com/YourImage5.jpg" },

  // Дополнительные блюда
  { id: 101, nameChinese: "糖醋里脊", nameRussian: "Свинина в кисло-сладком соусе", price: 450, description: "Хрустящие кусочки свинины в фирменном соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 102, nameChinese: "宫保鸡丁", nameRussian: "Курица Гунбао", price: 420, description: "Курица с арахисом и перцем чили", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
  { id: 103, nameChinese: "麻婆豆腐", nameRussian: "Тофу Мапо", price: 350, description: "Шелковистый тофу в пикантном соусе", category: "Горячие блюда", imageUrl: "https://i.imgur.com/YourImage1.jpg" },
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
  { name: "Закуски", emoji: "🥙", color: "bg-gradient-to-r from-teal-500 to-cyan-500" },
];