// Blog queries
export const allBlogPostsQuery = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    featuredImage,
    "author": author->name
  }
`

export const blogPostBySlugQuery = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    category,
    tags,
    publishedAt,
    featuredImage,
    seo,
    faq,
    "relatedPosts": relatedPosts[]-> {
      _id,
      title,
      slug,
      excerpt,
      featuredImage
    }
  }
`

// Location queries
export const allLocationsQuery = `
  *[_type == "location" && isActive == true] | order(name asc) {
    _id,
    name,
    slug,
    type,
    city,
    province,
    description
  }
`

export const locationBySlugQuery = `
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    type,
    city,
    province,
    description,
    content,
    kelurahan,
    postalCodes,
    seo,
    faq,
    "nearbyLocations": nearbyLocations[]-> {
      _id,
      name,
      slug,
      type
    }
  }
`

// Price queries
export const allPricesQuery = `
  *[_type == "price"] | order(updatedAt desc) {
    _id,
    type,
    pricePerKg,
    pricePerLiter,
    updatedAt,
    notes
  }
`

// Testimonial queries
export const activeTestimonialsQuery = `
  *[_type == "testimonial" && isActive == true] | order(_createdAt desc) {
    _id,
    name,
    role,
    location,
    content,
    rating,
    image
  }
`

// FAQ queries
export const allFaqsQuery = `
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`

// Site settings query
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    whatsappNumber,
    email,
    address,
    socialMedia
  }
`
