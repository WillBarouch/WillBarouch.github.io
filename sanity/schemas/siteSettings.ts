import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            description: 'The headline shown under your name on the landing section.',
            type: 'text',
            rows: 2,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Contact email',
            type: 'string',
            validation: (rule) => rule.required().email(),
        }),
        defineField({
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'githubLabel',
            title: 'GitHub label',
            description: 'Text shown in the GitHub icon tooltip.',
            type: 'string',
        }),
        defineField({
            name: 'resumeUrl',
            title: 'Resume PDF URL',
            description: 'Path or URL the /resume route redirects to.',
            type: 'string',
        }),
    ],
    preview: {
        select: { title: 'name' },
        prepare: ({ title }) => ({ title: title || 'Site Settings' }),
    },
});
