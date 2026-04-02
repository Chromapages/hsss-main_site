import { defineField, defineType } from 'sanity'

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'About Section (Homepage)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'The main headline (e.g., "Built for His Purpose.")',
    }),
    defineField({
      name: 'italicTitle',
      title: 'Italic Title Part',
      type: 'string',
      description: 'The italicized part of the headline (e.g., "Designed for You.")',
    }),
    defineField({
      name: 'content',
      title: 'Body Content',
      type: 'text',
      rows: 10,
      validation: (rule) => rule.required(),
      description: 'Add multiple paragraphs by separating them with a single line break.',
    }),
    defineField({
      name: 'image',
      title: 'Main Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Statistics Badges',
      type: 'array',
      description: 'The number stats that appear at the bottom of the section (max 2 recommended).',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', title: 'Value (e.g., 500+)' }),
            defineField({ name: 'label', type: 'string', title: 'Label (e.g., Soul Journers)' }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'About Section',
        subtitle: 'Focus section on homepage',
        media,
      }
    },
  },
})
