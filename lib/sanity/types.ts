import { PortableTextBlock } from 'sanity'

export interface BlogPost {
    _id: string
    title: string
    slug: {
        current: string
    }
    excerpt: string
    content: PortableTextBlock[]
    featuredImage?: {
        asset: {
            _ref: string
        }
        alt?: string
    }
    category: 'edukasi' | 'cara-jual' | 'faq' | 'regulasi' | 'industri'
    tags?: string[]
    publishedAt: string
    seo?: {
        metaTitle?: string
        metaDescription?: string
        focusKeyword?: string
    }
    faq?: Array<{
        question: string
        answer: string
    }>
    relatedPosts?: BlogPost[]
}

export interface Location {
    _id: string
    name: string
    slug: {
        current: string
    }
    type: 'kecamatan' | 'kota' | 'provinsi'
    parentLocation?: Location
    city?: string
    province?: string
    description: string
    content?: PortableTextBlock[]
    nearbyLocations?: Location[]
    kelurahan?: string[]
    postalCodes?: string[]
    geoCoordinates?: {
        lat: number
        lng: number
    }
    seo?: {
        metaTitle?: string
        metaDescription?: string
    }
    faq?: Array<{
        question: string
        answer: string
    }>
    isActive: boolean
}

export interface Price {
    _id: string
    type: 'rumahan' | 'restoran' | 'industri' | 'premium'
    pricePerKg: number
    pricePerLiter: number
    updatedAt: string
    notes?: string
}

export interface Testimonial {
    _id: string
    name: string
    role?: string
    location?: string
    content: string
    rating: number
    image?: {
        asset: {
            _ref: string
        }
    }
    isActive: boolean
}

export interface FAQ {
    _id: string
    question: string
    answer: string
    category?: 'general' | 'pricing' | 'process' | 'area'
    order: number
}

export interface SiteSettings {
    siteName: string
    siteDescription?: string
    whatsappNumber: string
    email?: string
    address?: string
    socialMedia?: {
        facebook?: string
        instagram?: string
        twitter?: string
        linkedin?: string
    }
}
