import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            placeholder: 'e.g., Pemilik Warung Makan',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            placeholder: 'e.g., Jakarta Barat',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
            initialValue: 5,
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
})
