import { defineField, defineType } from 'sanity'

export const coachingSettingsType = defineType({
  name: 'coachingSettings',
  title: 'Coaching Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Label', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'italicTitle', title: 'Italic Part of Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'testimonialQuote', title: 'Floating Testimonial Quote', type: 'string' }),
        defineField({ name: 'testimonialAuthor', title: 'Testimonial Author', type: 'string' }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Coaching Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number (e.g. 01)', type: 'string' }),
            defineField({ name: 'acronym', title: 'Acronym (e.g. B.A.E.)', type: 'string' }),
            defineField({ name: 'color', title: 'Color Theme', type: 'string', options: { list: ['primary', 'secondary', 'tertiary'] } }),
            defineField({ name: 'icon', title: 'Material Symbol Icon', type: 'string' }),
            defineField({ name: 'fullName', title: 'Full Name', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'duration', title: 'Duration (e.g. 3 Week Session)', type: 'string' }),
            defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
            defineField({ name: 'ctaLink', title: 'CTA Link', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'bannerSection',
      title: 'Banner Section',
      type: 'object',
      fields: [
        defineField({ name: 'image', title: 'Banner Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'italicTitle', title: 'Italic Part', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
        defineField({ name: 'ctaLink', title: 'CTA Link', type: 'string' }),
      ],
    }),
  ],
})
