import { defineArrayMember, defineField, defineType } from 'sanity';
import { orderRankField } from '@sanity/orderable-document-list';

import { iconOptions } from '../../lib/icons';

export const skillCategory = defineType({
    name: 'skillCategory',
    title: 'Skill Category',
    type: 'document',
    fields: [
        orderRankField({ type: 'skillCategory' }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'linkLabel',
            title: 'Link label',
            description: 'Optional link shown under the title (e.g. "My portfolio").',
            type: 'string',
        }),
        defineField({
            name: 'linkHref',
            title: 'Link href',
            type: 'string',
        }),
        defineField({
            name: 'icons',
            title: 'Icons',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'iconKey',
                            title: 'Icon',
                            type: 'string',
                            options: { list: iconOptions },
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'label',
                            title: 'Tooltip label',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'iconKey' },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title' },
    },
});
