import { type SchemaTypeDefinition } from 'sanity'
import blog from './schemas/blog'
import location from './schemas/location'
import price from './schemas/price'
import testimonial from './schemas/testimonial'
import faq from './schemas/faq'
import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blog, location, price, testimonial, faq, siteSettings],
}
