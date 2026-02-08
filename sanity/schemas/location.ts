import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Kecamatan', value: 'kecamatan' },
                    { title: 'Kota', value: 'kota' },
                    { title: 'Provinsi', value: 'provinsi' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'parentLocation',
            title: 'Parent Location',
            type: 'reference',
            to: [{ type: 'location' }],
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
        }),
        defineField({
            name: 'province',
            title: 'Province',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5,
            validation: (Rule) => Rule.required().min(150),
        }),
        defineField({
            name: 'content',
            title: 'Additional Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'nearbyLocations',
            title: 'Nearby Locations',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'location' }] }],
        }),
        defineField({
            name: 'kelurahan',
            title: 'Kelurahan/Villages',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'postalCodes',
            title: 'Postal Codes',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'geoCoordinates',
            title: 'Geo Coordinates',
            type: 'object',
            fields: [
                {
                    name: 'lat',
                    title: 'Latitude',
                    type: 'number',
                },
                {
                    name: 'lng',
                    title: 'Longitude',
                    type: 'number',
                },
            ],
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
            ],
        }),
        defineField({
            name: 'faq',
            title: 'FAQ',
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
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'type',
            city: 'city',
        },
        prepare(selection) {
            const { title, subtitle, city } = selection
            return {
                title,
                subtitle: city ? `${subtitle} - ${city}` : subtitle,
            }
        },
    },
})
