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
  { id: 265, nameChinese: "辣炒蛤贝", nameRussian: "Мидии в остром соусе", price: 400, category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 266, nameChinese: "辣白菜炒年糕", nameRussian: "Рисовая лапша с пекинской капустой", price: 400, category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },
  { id: 270, nameChinese: "焖丸子", nameRussian: "Свиная шарика в соевом соусе (вкус соленый)", price: 400, priceSecondary: 950, category: "Горячие блюда", imageUrl: "https://cdn.poehali.dev/files/6ad3a006-f185-4e10-ad0a-64627cc911aa.jpg" },

  // Супы - Страница 2
  { id: 48, nameChinese: "山东丸子汤", nameRussian: "Бульон с фрикадельками", price: 600, priceSecondary: 650, category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 49, nameChinese: "木须柿子汤", nameRussian: "Суп с помидоров яйцом", price: 400, category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 247, nameChinese: "鲜汤鱿鱼", nameRussian: "Бульон с кальмаров", price: 600, priceSecondary: 650, category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },
  { id: 248, nameChinese: "牛肉柿子汤", nameRussian: "Суп с говядины помидорами", price: 600, priceSecondary: 850, category: "Супы", imageUrl: "https://cdn.poehali.dev/files/03e0c56f-b502-48a6-a3cc-7d1787bbc081.jpg" },

  // Гарниры - Страница 3
  { id: 28, nameChinese: "鱼香肉丝盖饭", nameRussian: "Рис с мясом с веревочкой", price: 400, category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 29, nameChinese: "红烧排骨盖饭", nameRussian: "Рис с ребрышками", price: 400, category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 30, nameChinese: "溜肉片盖饭", nameRussian: "Рис со свининой", price: 400, category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 31, nameChinese: "黑椒牛柳盖饭", nameRussian: "Рис с говядиной", price: 400, priceSecondary: 450, category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },
  { id: 33, nameChinese: "鱿鱼盖饭", nameRussian: "Рис с кальмаров", price: 400, priceSecondary: 450, category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/4e22b86a-a664-4a3d-9677-50d7b4696520.jpg" },

  // Лапша и рис - Страница 4
  { id: 40, nameChinese: "扬州炒饭", nameRussian: "Жареный рис по Янжоу", price: 400, category: "Рис", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 41, nameChinese: "鸡肉炒面", nameRussian: "Жареная лапша с куриные филе", price: 400, category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 42, nameChinese: "小麦面饺子", nameRussian: "Пельмени вареные (20шт)", price: 450, description: "Говядина / Свинина", category: "Пельмени", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 43, nameChinese: "牛肉面", nameRussian: "Лапша с говядиной", price: 400, category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/8fa6bbc1-3403-49d6-8c50-17dcfc70cfe2.jpg" },
  { id: 44, nameChinese: "蛋炒饭", nameRussian: "Жареные рис яйцом", price: 400, category: "Рис", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },
  { id: 45, nameChinese: "煎饺", nameRussian: "Пильмене жареные (20шт)", price: 450, description: "Говядина / Свинина", category: "Пельмени", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },
  { id: 46, nameChinese: "米饭", nameRussian: "Рис вареньe", price: 150, priceSecondary: 90, category: "Рис", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },
  { id: 50, nameChinese: "宫保鸡丁盖饭", nameRussian: "Рис гонбао (рис,куриные филе,огурец, лук, арахис вкус:кисло сладки)", price: 400, category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },
  { id: 51, nameChinese: "地三鲜盖饭", nameRussian: "Рис Чисанчи", price: 400, category: "Гарниры", imageUrl: "https://cdn.poehali.dev/files/e003172d-49df-476f-b59d-01460387e9e8.jpg" },

  // Манты и лапша - Страница 5
  { id: 73, nameChinese: "包子", nameRussian: "Паровые манты (6шт)", price: 450, description: "Говядина / Свинина", category: "Манты", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },
  { id: 244, nameChinese: "鱼香肉丝炒面", nameRussian: "Жареная лапша с мясом (кисло сладки)", price: 400, category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },
  { id: 245, nameChinese: "海鲜炒面", nameRussian: "Жареная лапша с морепродуктов", price: 400, priceSecondary: 450, category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },
  { id: 246, nameChinese: "冷面", nameRussian: "Холодная лапша (лапша, яйцо, говядина помидоры, вкус)", price: 500, priceSecondary: 450, category: "Лапша", imageUrl: "https://cdn.poehali.dev/files/db7034a1-99d4-449c-b721-c8bcc9e415c8.jpg" },
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
