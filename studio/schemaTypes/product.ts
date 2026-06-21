import {defineField, defineType} from 'sanity'

const localizedString = (name:string, title:string) => defineField({
  name, title, type:'object', fields:[
    {name:'en',title:'English',type:'string'},
    {name:'ru',title:'Русский',type:'string'},
    {name:'ar',title:'العربية',type:'string'}
  ]
})

const localizedText = (name:string, title:string) => defineField({
  name, title, type:'object', fields:[
    {name:'en',title:'English',type:'text',rows:4},
    {name:'ru',title:'Русский',type:'text',rows:4},
    {name:'ar',title:'العربية',type:'text',rows:4}
  ]
})

export default defineType({
  name:'product', title:'Products', type:'document',
  fields:[
    localizedString('title','Title / Название / الاسم'),
    defineField({name:'slug',title:'Slug',type:'slug',options:{source:'title.en',maxLength:96},validation:r=>r.required()}),
    localizedText('description','Description / Описание / الوصف'),
    defineField({
      name:'category',
      title:'Product category / Категория / الفئة',
      type:'string',
      options:{
        list:[
          {title:'1. Handmade Gifts / Подарки ручной работы / هدايا مصنوعة يدوياً',value:'handmadeGift'},
          {title:'2. Household / Товары для дома / مستلزمات منزلية',value:'household'},
          {title:'3. Mobile Phones / Мобильные телефоны / الهواتف المحمولة',value:'mobilePhone'},
          {title:'4. Mobile Accessories / Аксессуары для мобильных телефонов / ملحقات الهواتف المحمولة',value:'mobileAccessories'},
          {title:'5. Toys Collection / Коллекция игрушек / مجموعة الألعاب',value:'toysCollection'}
        ],
        layout:'dropdown'
      },
      initialValue:'handmadeGift',
      validation:r=>r.required()
    }),
    defineField({name:'images',title:'Photos',type:'array',of:[{type:'image',options:{hotspot:true}}],validation:r=>r.min(1).required()}),
    defineField({name:'price',title:'Price AED',type:'number',initialValue:0}),
    defineField({name:'status',title:'Status',type:'string',options:{list:[{title:'Available',value:'available'},{title:'Reserved',value:'reserved'},{title:'Sold',value:'sold'}],layout:'radio'},initialValue:'available'}),
    defineField({name:'visible',title:'Show on website',type:'boolean',initialValue:true}),
    defineField({name:'featured',title:'Featured on homepage',type:'boolean',initialValue:false}),
    defineField({name:'customOrderAvailable',title:'Similar custom order available',type:'boolean',initialValue:true}),
    defineField({name:'dimensions',title:'Dimensions',type:'string'}),
    defineField({name:'weight',title:'Weight',type:'string'}),
    defineField({name:'materials',title:'Materials',type:'string',initialValue:'Handmade epoxy resin'}),
    defineField({name:'order',title:'Display order',type:'number',initialValue:100})
  ],
  preview:{select:{title:'title.en',media:'images.0',status:'status',category:'category'},prepare({title,media,status,category}){return {title,media,subtitle:`${category || 'No category'} • ${status || ''}`}}}
})
