import { defineArrayMember, defineField, defineType } from 'sanity';
import { orderRankField } from '@sanity/orderable-document-list';

export const education = defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        orderRankField({ type: 'education' }),
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'period',
            title: 'Period',
            description: 'e.g. "2014–Present"',
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
                            name: 'muted',
                            title: 'Muted (secondary description style)',
                            type: 'boolean',
                            initialValue: false,
                        }),
                    ],
                    preview: {
                        select: { title: 'text', muted: 'muted' },
                        prepare: ({ title, muted }) => ({
                            title,
                            subtitle: muted ? 'muted' : undefined,
                        }),
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'institution', subtitle: 'period' },
    },
});
