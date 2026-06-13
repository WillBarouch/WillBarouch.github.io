import type { StructureResolver } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const structure: StructureResolver = (S, context) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings'),
                ),
            S.divider(),
            orderableDocumentListDeskItem({
                type: 'education',
                title: 'Education',
                S,
                context,
            }),
            orderableDocumentListDeskItem({
                type: 'skillCategory',
                title: 'Skill Categories',
                S,
                context,
            }),
            orderableDocumentListDeskItem({
                type: 'debating',
                title: 'Debating',
                S,
                context,
            }),
            orderableDocumentListDeskItem({
                type: 'experience',
                title: 'Experience',
                S,
                context,
            }),
        ]);
