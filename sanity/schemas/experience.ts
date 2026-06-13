import { defineArrayMember, defineField, defineType } from 'sanity';
import { orderRankField } from '@sanity/orderable-document-list';

export const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        orderRankField({ type: 'experience' }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            description: 'e.g. "Internship", "Judge"',
            type: 'string',
        }),
        defineField({
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Text',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'file',
                            title: 'PDF / file (optional)',
                            description: 'Upload a file to link this line to. Takes precedence over the URL below.',
                            type: 'file',
                        }),
                        defineField({
                            name: 'url',
                            title: 'Link URL (optional)',
                            description: 'External link. Used only if no file is uploaded above.',
                            type: 'string',
                        }),
                    ],
                    preview: {
                        select: { title: 'text', subtitle: 'url' },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'subtitle' },
    },
});
