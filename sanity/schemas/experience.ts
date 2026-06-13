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
                            name: 'url',
                            title: 'Link (optional)',
                            description: 'Turns the line into a link when set.',
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
