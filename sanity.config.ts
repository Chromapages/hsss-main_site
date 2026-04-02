import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schema'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'HSSS Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool({
      structure,
    }),
    visionTool()
  ],

  schema: {
    types: schema.types,
    // Filter out singleton types from the global “New document” menu
    templates: (prev) => prev.filter((template) => !['homeSettings'].includes(template.id)),
  },
})
