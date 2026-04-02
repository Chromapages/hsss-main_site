import { defineField, defineType } from 'sanity'

export const videoType = defineType({
  name: 'video',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Session Date',
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Morning Prayer', value: 'Morning Prayer' },
          { title: 'Bible Session', value: 'Bible Session' },
          { title: 'Special Event', value: 'Special Event' },
        ],
      },
      initialValue: 'Morning Prayer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (Direct/Embed Link)',
      type: 'url',
      description: 'The direct link or embed URL for the video (e.g., YouTube embed URL).',
    }),
    defineField({
      name: 'embedCode',
      title: 'Custom Embed Code',
      type: 'text',
      rows: 5,
      description: 'Optional: Use this if you have a full iframe embed code.',
    }),
    defineField({
      name: 'type',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'Archive (Coming Soon)', value: 'archive' },
          { title: 'Embedded Player', value: 'wix' }, // Keeping "wix" as type if we want to reuse existing logic
        ],
      },
      initialValue: 'archive',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      category: 'category',
      media: 'thumbnail',
    },
    prepare(selection) {
      const { title, date, category, media } = selection
      return {
        title,
        subtitle: `${category} - ${date}`,
        media,
      }
    },
  },
})
