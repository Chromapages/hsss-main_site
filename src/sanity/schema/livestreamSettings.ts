import { defineField, defineType } from 'sanity'

export const livestreamSettingsType = defineType({
  name: 'livestreamSettings',
  title: 'Livestream Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title (Internal)',
      type: 'string',
      initialValue: 'Livestream Page Settings',
      readOnly: true,
      hidden: true,
    }),
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Hero Main Title',
          type: 'string',
          initialValue: 'Weekly Prayer',
          description: 'The first part of the headline.',
        }),
        defineField({
          name: 'italicTitle',
          title: 'Hero Italic Title',
          type: 'string',
          initialValue: '& Bible Study.',
          description: 'The italicized part of the headline.',
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 4,
          initialValue: 'Join us every Tuesday for a sacred time of intercession, alignment, and deep study into the Word.',
          description: 'The introductory text for the page.',
        }),
      ],
    },
    {
      name: 'zoomDetails',
      title: 'Zoom Details',
      type: 'object',
      fields: [
        defineField({
          name: 'meetingId',
          title: 'Zoom Meeting ID',
          type: 'string',
          initialValue: '815 758 1664',
          description: 'The numeric ID for the Zoom meeting.',
        }),
        defineField({
          name: 'zoomLink',
          title: 'Direct Zoom Link',
          type: 'string',
          initialValue: 'https://us06web.zoom.us/j/8157581664?omn=82461919629',
          description: 'The full link to launch the Zoom session.',
        }),
      ],
    },
    {
      name: 'gallerySection',
      title: 'Gallery Section Header',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Section Badge',
          type: 'string',
          initialValue: 'The Archives',
          description: 'The small uppercase label above the title.',
        }),
        defineField({
          name: 'title',
          title: 'Gallery Main Title',
          type: 'string',
          initialValue: 'Past Sessions',
          description: 'The first part of the gallery headline.',
        }),
        defineField({
          name: 'italicTitle',
          title: 'Gallery Italic Title',
          type: 'string',
          initialValue: '& Teachings.',
          description: 'The italicized part of the headline.',
        }),
        defineField({
          name: 'subtitle',
          title: 'Gallery Subtitle',
          type: 'text',
          rows: 3,
          initialValue: 'Missed a session? Catch up on our latest spiritual explorations and group prayers in our high-definition archive.',
          description: 'The descriptive text next to the header.',
        }),
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Livestream Page Settings',
      }
    },
  },
})
