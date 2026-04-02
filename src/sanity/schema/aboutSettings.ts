import { defineField, defineType } from 'sanity'

export const aboutSettingsType = defineType({
  name: 'aboutSettings',
  title: 'About Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title (Internal)',
      type: 'string',
      initialValue: 'About Page Settings',
      readOnly: true,
      hidden: true,
    }),
    {
      name: 'originSection',
      title: 'Origin Section (Hero)',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Main Title',
          type: 'string',
          initialValue: "Drop the World's Narrative.",
          description: 'The first part of the headline.',
        }),
        defineField({
          name: 'italicTitle',
          title: 'Section Italic Title',
          type: 'string',
          initialValue: 'Pursue the Mind of Christ.',
          description: 'The italicized part of the headline.',
        }),
        defineField({
          name: 'description',
          title: 'Description Content',
          type: 'text',
          rows: 6,
          initialValue: `He Said She Said Ministries was born out of a desire to see men and women live in the fullness of their identity. For too long, we've allowed our environment, our failures, and even our successes to define who we are.
          
We believe that true transformation happens when we align our thoughts with His Word. When we do, we don't just change our behavior; we change our nature.

Our mission is to provide a sanctuary for this alignment through teaching, community, and coaching.`,
          description: 'The introductory text for the about page.',
        }),
        defineField({
          name: 'image',
          title: 'Origin Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    },
    {
      name: 'founderSection',
      title: "Founder's Journey Section",
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'Healer | Speaker | Founder',
          description: 'The small uppercase text above the headline.',
        }),
        defineField({
          name: 'title',
          title: 'Section Main Title',
          type: 'string',
          initialValue: 'Healing Hands:',
          description: 'The first part of the headline.',
        }),
        defineField({
          name: 'italicTitle',
          title: 'Section Italic Title',
          type: 'string',
          initialValue: "The Founder's Journey.",
          description: 'The italicized part of the headline.',
        }),
        defineField({
          name: 'description',
          title: 'Description Content',
          type: 'text',
          rows: 10,
          description: 'The main story text. Use single line breaks between paragraphs.',
          initialValue: `In 2012, God gave Andrea a dream — she was curled in a fetal position, her hands covered in cuts. A man in the dream said, "You can't talk to people with your hands cut, you'll bleed all over them."

Those cuts represented her own wounds — sexual molestation, fear, low self-esteem, depression, and unforgiveness. Through prayer, fasting, and Christian counseling, she discovered that healing from those wounds was essential to truly helping others.

Out of that journey, HE SAID she said was born — a movement dedicated to helping women and men heal, find freedom, and walk fully in their God-given purpose.`,
        }),
        defineField({
          name: 'image',
          title: 'Founder Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA Button Label',
          type: 'string',
          initialValue: 'Explore Coaching with Andrea',
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
          initialValue: '/coaching',
        }),
      ],
    },
    {
      name: 'pillarsSection',
      title: 'Three Pillars Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Main Title',
          type: 'string',
          initialValue: 'The Three Pillars',
        }),
        defineField({
          name: 'italicTitle',
          title: 'Section Italic Title',
          type: 'string',
          initialValue: 'of our Work.',
        }),
        defineField({
          name: 'pillars',
          title: 'Pillars',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
                defineField({ 
                  name: 'icon', 
                  title: 'Icon Name', 
                  type: 'string', 
                  description: 'Material Symbols Name (e.g., spa, construction, groups)' 
                }),
                defineField({ 
                  name: 'color', 
                  title: 'Color Theme', 
                  type: 'string', 
                  options: { 
                    list: [
                      { title: 'Primary (Green)', value: 'primary' },
                      { title: 'Secondary (Gold)', value: 'secondary' },
                      { title: 'Tertiary (Bronze)', value: 'tertiary' }
                    ] 
                  } 
                }),
              ]
            }
          ]
        })
      ]
    },
    {
      name: 'ctaSection',
      title: 'Next Step CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'CTA Main Title',
          type: 'string',
          initialValue: 'Ready to',
        }),
        defineField({
          name: 'italicTitle',
          title: 'CTA Italic Title',
          type: 'string',
          initialValue: 'Start Your Alignment?',
        }),
        defineField({
          name: 'description',
          title: 'CTA Description',
          type: 'text',
          rows: 4,
          initialValue: "Don't wait for \"someday\" to find clarity. Join us this Tuesday at 5:45 AM for a sacred time of prayer and intercession. No signup needed—just bring your heart."
        }),
        defineField({
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
          initialValue: 'Join the Next Prayer Call',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/livestream',
        }),
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page Settings',
      }
    },
  },
})
