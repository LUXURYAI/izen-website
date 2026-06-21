export const fallbackProducts = [
  {
    slug: 'black-gold-automotive-art',
    title: { en: 'Black & Gold Automotive Art', ru: 'Автомобильная картина Black & Gold', ar: 'لوحة سيارات بالأسود والذهبي' },
    description: {
      en: 'A bold handmade epoxy resin wall piece with dimensional automotive detail and gold accents.',
      ru: 'Выразительная настенная работа из эпоксидной смолы с объёмной автомобильной деталью и золотыми акцентами.',
      ar: 'قطعة جدارية جريئة من راتنج الإيبوكسي مع تفاصيل سيارة بارزة ولمسات ذهبية.'
    },
    price: 0,
    status: 'available',
    images: ['/images/products/wall-art-main.png','/images/products/wall-art-collage.png']
  },
  {
    slug: 'black-gold-phone-stand',
    title: { en: 'Black & Gold Resin Stand', ru: 'Подставка Black & Gold', ar: 'حامل راتنج أسود وذهبي' },
    description: {
      en: 'A detachable handmade stand with a unique black-and-gold resin pattern.',
      ru: 'Разборная подставка ручной работы с уникальным чёрно-золотым рисунком смолы.',
      ar: 'حامل يدوي قابل للفصل بنقشة راتنج فريدة بالأسود والذهبي.'
    },
    price: 0,
    status: 'available',
    images: ['/images/products/phone-stand-black-main.png','/images/products/phone-stand-black-details.png']
  },
  {
    slug: 'orange-white-phone-stand',
    title: { en: 'Orange & White Resin Stand', ru: 'Подставка Orange & White', ar: 'حامل راتنج برتقالي وأبيض' },
    description: {
      en: 'A bright, individually poured resin stand with a naturally formed orange-and-white pattern.',
      ru: 'Яркая подставка из смолы с естественно сформированным оранжево-белым рисунком.',
      ar: 'حامل راتنج مشرق مصبوب يدوياً بنقشة برتقالية وبيضاء طبيعية.'
    },
    price: 0,
    status: 'available',
    images: ['/images/products/phone-stand-orange-main.png','/images/products/phone-stand-orange-details.png']
  },
  {
    slug: 'pink-white-phone-stand',
    title: { en: 'Pink & White Resin Stand', ru: 'Подставка Pink & White', ar: 'حامل راتنج وردي وأبيض' },
    description: {
      en: 'A distinctive handmade stand in pink, white and subtle gold tones.',
      ru: 'Оригинальная подставка ручной работы в розовых, белых и золотистых оттенках.',
      ar: 'حامل يدوي مميز بدرجات الوردي والأبيض ولمسات ذهبية ناعمة.'
    },
    price: 0,
    status: 'available',
    images: ['/images/products/phone-stand-pink-main.png','/images/products/phone-stand-pink-details.png']
  }
] as const;
