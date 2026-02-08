import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt Text',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                },
            ],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Edukasi', value: 'edukasi' },
                    { title: 'Cara Jual', value: 'cara-jual' },
                    { title: 'FAQ', value: 'faq' },
                    { title: 'Regulasi', value: 'regulasi' },
                    { title: 'Industri', value: 'industri' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    validation: (Rule) => Rule.max(60),
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 2,
                    validation: (Rule) => Rule.max(160),
                },
                {
                    name: 'focusKeyword',
                    title: 'Focus Keyword',
                    type: 'string',
                },
            ],
        }),
        defineField({
            name: 'faq',
            title: 'FAQ Section',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                        },
                        {
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'relatedPosts',
            title: 'Related Posts',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'blog' }] }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'featuredImage',
            category: 'category',
        },
        prepare(selection) {
            const { title, media, category } = selection
            return {
                title,
                subtitle: category,
                media,
            }
        },
    },
})
