import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'WhatsApp Number',
            type: 'string',
            placeholder: '628123456789',
            validation: (Rule) =>
                Rule.required().custom((value) => {
                    if (value && !value.match(/^62[0-9]{9,12}$/)) {
                        return 'Format must be 628XXXXXXXXX'
                    }
                    return true
                }),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'socialMedia',
            title: 'Social Media',
            type: 'object',
            fields: [
                {
                    name: 'facebook',
                    title: 'Facebook',
                    type: 'url',
                },
                {
                    name: 'instagram',
                    title: 'Instagram',
                    type: 'url',
                },
                {
                    name: 'twitter',
                    title: 'Twitter',
                    type: 'url',
                },
                {
                    name: 'linkedin',
                    title: 'LinkedIn',
                    type: 'url',
                },
            ],
        }),
    ],
})
