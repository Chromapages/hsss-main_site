import { defineField, defineType } from 'sanity'

export const homeSettingsType = defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title (Internal)',
      type: 'string',
      initialValue: 'Homepage Settings',
      readOnly: true,
      hidden: true,
    }),
    {
      name: 'sanctuaryPath',
      title: 'The Sanctuary Path (Next Steps)',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Your Next Step.',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 3,
          initialValue: 'Discover the path tailored for your current season of growth and spiritual exploration.',
        }),
      ],
    },
    {
      name: 'scriptureSection',
      title: 'Scripture Highlight',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          title: 'Scripture Quote',
          type: 'text',
          rows: 4,
          initialValue: 'Then you will know which way to go, since you have never been this way before.',
        }),
        defineField({
          name: 'highlight',
          title: 'Italic Highlight',
          type: 'string',
          initialValue: 'never been this way before.',
          description: 'The part of the quote that will be italicized and underlined.',
        }),
        defineField({
          name: 'source',
          title: 'Source / Citation',
          type: 'string',
          initialValue: '— Joshua 3:4',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    },
    {
      name: 'testimonialsSection',
      title: 'Testimonials',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: "What They're Saying.",
        }),
      ],
    },
    {
      name: 'eventsSection',
      title: 'Events',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Upcoming Moments.',
        }),
        defineField({
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 3,
          initialValue: 'Mark the moments shaping this season of outreach, vision, and bold forward movement for the ministry community.',
        }),
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Settings',
      }
    },
  },
})
