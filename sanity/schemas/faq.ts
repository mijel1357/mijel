import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'General', value: 'general' },
                    { title: 'Pricing', value: 'pricing' },
                    { title: 'Process', value: 'process' },
                    { title: 'Area', value: 'area' },
                ],
            },
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'category',
        },
    },
})
