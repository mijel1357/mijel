import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'price',
    title: 'Price',
    type: 'document',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Rumah Tangga', value: 'rumahan' },
                    { title: 'Restoran', value: 'restoran' },
                    { title: 'Industri', value: 'industri' },
                    { title: 'Premium', value: 'premium' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pricePerKg',
            title: 'Price per Kg (IDR)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'pricePerLiter',
            title: 'Price per Liter (IDR)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'updatedAt',
            title: 'Updated At',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'notes',
            title: 'Notes',
            type: 'text',
            rows: 3,
        }),
    ],
    preview: {
        select: {
            type: 'type',
            pricePerKg: 'pricePerKg',
        },
        prepare(selection) {
            const { type, pricePerKg } = selection
            return {
                title: type,
                subtitle: `Rp ${pricePerKg.toLocaleString('id-ID')}/kg`,
            }
        },
    },
})
