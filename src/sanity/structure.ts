import type { StructureResolver } from 'sanity/desk'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: Home Settings
      S.listItem()
        .title('Home Settings')
        .id('homeSettings')
        .child(
          S.document()
            .schemaType('homeSettings')
            .documentId('homeSettings')
        ),
      S.divider(),
      // Regular document types - filter out singleton
      ...S.documentTypeListItems().filter(
        (listItem) => !['homeSettings'].includes(listItem.getId() || '')
      ),
    ])
