import { defineField, defineType } from 'sanity'

export const nextStepCardType = defineType({
  name: 'nextStepCard',
  title: 'Next Step Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      description: 'Google Material Symbols icon name, e.g. videocam or groups.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
    }),
    defineField({
      name: 'badgeIcon',
      title: 'Badge Icon',
      description: 'Google Material Symbols icon name for the badge.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'meetingId',
      title: 'Meeting ID',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'colorTheme',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Tertiary', value: 'tertiary' },
        ],
      },
      initialValue: 'primary',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badgeText',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle || 'Homepage next step card',
      }
    },
  },
})
