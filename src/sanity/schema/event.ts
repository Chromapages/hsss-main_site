import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. "Annual Outreach", "Workshop"',
      hidden: ({ document }) => !!document?.isFeaturedTheme,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Material symbol name (e.g. "event", "volunteer_activism")',
      hidden: ({ document }) => !!document?.isFeaturedTheme,
    }),
    defineField({
      name: 'color',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Pink)', value: 'primary' },
          { title: 'Secondary (Light Pink)', value: 'secondary' },
          { title: 'Tertiary (Gold/Yellow)', value: 'tertiary' },
        ],
      },
      hidden: ({ document }) => !!document?.isFeaturedTheme,
    }),
    defineField({
      name: 'isFeaturedTheme',
      title: 'Is Featured Theme?',
      type: 'boolean',
      description: 'If checked, this event will render as the full-width theme card at the bottom of the grid.',
      initialValue: false,
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      hidden: ({ document }) => !document?.isFeaturedTheme,
    }),
    defineField({
      name: 'italicTitle',
      title: 'Italic Part of Title',
      type: 'string',
      description: 'For emphasizing parts like "GO!" in "BOLDLY GO!"',
      hidden: ({ document }) => !document?.isFeaturedTheme,
    }),
    defineField({
      name: 'scripture',
      type: 'string',
      hidden: ({ document }) => !document?.isFeaturedTheme,
    }),
    defineField({
      name: 'themeYear',
      type: 'string',
      hidden: ({ document }) => !document?.isFeaturedTheme,
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      hidden: ({ document }) => !document?.isFeaturedTheme,
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
