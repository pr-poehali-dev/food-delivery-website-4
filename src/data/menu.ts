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
  { id: 2, nameChinese: "猪蹄黄瓜", nameRussian: "Салат рулька с огурцом", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 3, nameChinese: "牛肚", nameRussian: "Салат из говяжьих желудков", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 4, nameChinese: "鱿鱼", nameRussian: "Салат из кальмаров", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Свежие кальмары с овощами", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400" },
  { id: 5, nameChinese: "肉类拼盘", nameRussian: "Мясное ассорти", price: 1500, priceSecondary: 1200, weight: "400 г / 300 г", description: "Ассорти из различных мясных деликатесов", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  { id: 6, nameChinese: "豆腐皮", nameRussian: "Салат из кожи тофу", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 7, nameChinese: "牛舌", nameRussian: "Салат из говяжьего языка", price: 1200, priceSecondary: 950, weight: "400 г / 300 г", description: "Кисло-сладкий, острый", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 8, nameChinese: "家常菜", nameRussian: "Салат по-домашнему", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Традиционный домашний салат", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 10, nameChinese: "牛舌切片", nameRussian: "Нарезка из говяжьего языка", price: 1800, priceSecondary: 1500, weight: "400 г / 300 г", description: "Тонко нарезанный говяжий язык", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  { id: 62, nameChinese: "猪耳黄瓜", nameRussian: "Салат свиные уши с огурцом", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 64, nameChinese: "鸡爪", nameRussian: "Салат из куриных лап", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 65, nameChinese: "鸡丝蕨菜", nameRussian: "Салат куриное филе с папоротником", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 66, nameChinese: "麻辣牛肉", nameRussian: "Салат пикантная говядина с луком", price: 1500, priceSecondary: 1200, weight: "400 г / 300 г", description: "Острая говядина с репчатым луком", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  { id: 74, nameChinese: "牛舌黄瓜", nameRussian: "Салат говяжий язык с огурцом", price: 1200, priceSecondary: 950, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 87, nameChinese: "土豆丝花生", nameRussian: "Салат картофель пай с арахисом и луком", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 89, nameChinese: "海带", nameRussian: "Салат из морской капусты", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 117, nameChinese: "茄子", nameRussian: "Салат из баклажанов", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 118, nameChinese: "土豆丝", nameRussian: "Салат из картофеля соломкой", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 119, nameChinese: "海鲜", nameRussian: "Салат из морепродуктов", price: 1200, priceSecondary: 950, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400" },
  { id: 203, nameChinese: "牛肉土豆丝", nameRussian: "Салат говядина с картофелем пай", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
  { id: 204, nameChinese: "白蘑菇", nameRussian: "Салат из белых грибов", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 205, nameChinese: "番茄黄瓜", nameRussian: "Нарезка помидоры и огурцы", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Свежие овощи", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 206, nameChinese: "豆芽", nameRussian: "Салат из бобовых ростков", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 208, nameChinese: "蔬菜薯片", nameRussian: "Салат из овощей с чипсами", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 209, nameChinese: "粉丝", nameRussian: "Салат из крахмальной лапши", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 210, nameChinese: "黑白蘑菇", nameRussian: "Салат из чёрных и белых грибов", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Кисло-сладкий", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 251, nameChinese: "豆腐葱", nameRussian: "Салат тофу с луком", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 252, nameChinese: "蔬菜沙拉", nameRussian: "Салат из овощей", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Свежие овощи", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 253, nameChinese: "芹菜花生", nameRussian: "Салат сельдерей с арахисом", price: 950, priceSecondary: 750, weight: "400 г / 300 г", description: "Солёный", category: "Салаты", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
];

export const categories = ['Все', 'Салаты'];
