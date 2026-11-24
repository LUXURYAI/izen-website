
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recommendation',
  title: 'Amazon Recommendations',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Product Title / Название товара',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'string', validation: Rule => Rule.required()},
        {name: 'ru', title: 'Русский', type: 'string', validation: Rule => Rule.required()},
        {name: 'ar', title: 'العربية', type: 'string', validation: Rule => Rule.required()}
      ],
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'description',
      title: 'Description / Описание',
      type: 'object',
      fields: [
        {name: 'en', title: 'English', type: 'text', rows: 4},
        {name: 'ru', title: 'Русский', type: 'text', rows: 4},
        {name: 'ar', title: 'العربية', type: 'text', rows: 4}
      ]
    }),

    defineField({
      name: 'image',
      title: 'Product Photo / Фото товара',
      type: 'image',
      options: {hotspot: true},
      description: 'Use only images you are authorized to publish.'
    }),

    defineField({
      name: 'affiliateUrl',
      title: 'Amazon Affiliate Link',
      type: 'url',
      description: 'Official Amazon UAE affiliate link.',
      validation: Rule => Rule.required().custom(value => {
        if (!value) return true

        try {
          const url = new URL(value)
          const host = url.hostname.toLowerCase()

          if (
            url.protocol === 'https:' &&
            !url.username &&
            !url.password &&
            (
              host === 'amazon.ae' ||
              host === 'www.amazon.ae' ||
              host === 'amzn.to'
            )
          ) {
            return true
          }
        } catch {
          return 'Invalid URL'
        }

        return 'Use a valid HTTPS Amazon UAE or Amazon short link.'
      })
    }),

    defineField({
      name: 'visible',
      title: 'Show on Website / Показывать на сайте',
      type: 'boolean',
      initialValue: false
    }),

    defineField({
      name: 'order',
      title: 'Display Order / Порядок отображения',
      type: 'number',
      initialValue: 100,
      validation: Rule => Rule.integer().min(0)
    })
  ],

  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'image',
      visible: 'visible'
    },
    prepare({title, media, visible}) {
      return {
        title: title || 'Untitled Recommendation',
        media,
        subtitle: visible
          ? 'Amazon | Visible'
          : 'Amazon | Hidden'
      }
    }
  }
})
