import { groq } from 'next-sanity'

export const heroSlidesQuery = groq`*[_type == "heroSlide"] | order(order asc, _createdAt asc) {
  _id,
  title,
  italicSubtitle,
  description,
  image,
  staticImage,
  imageAlt,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  order
}`

export const nextStepCardsQuery = groq`*[_type == "nextStepCard"] | order(order asc, _createdAt asc) {
  _id,
  title,
  icon,
  badgeText,
  badgeIcon,
  description,
  meetingId,
  ctaText,
  ctaLink,
  colorTheme,
  order
}`

export const eventsQuery = groq`*[_type == "event"] | order(date asc) {
  _id,
  title,
  "slug": slug.current,
  date,
  location,
  description,
  image,
  isFeaturedTheme,
  subtitle,
  italicTitle,
  scripture,
  themeYear,
  buttonText,
  category,
  icon,
  color
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  author,
  quote,
  role,
  image,
  color
}`

export const aboutSectionQuery = groq`*[_type == "aboutSection"][0] {
  _id,
  title,
  italicTitle,
  content,
  image,
  stats
}`

export const homeSettingsQuery = groq`*[_type == "homeSettings"][0] {
  _id,
  sanctuaryPath,
  scriptureSection {
    quote,
    highlight,
    source,
    backgroundImage
  },
  testimonialsSection,
  eventsSection
}`

export const aboutSettingsQuery = groq`*[_type == "aboutSettings"][0] {
  _id,
  originSection {
    title,
    italicTitle,
    description,
    image
  },
  founderSection {
    badge,
    title,
    italicTitle,
    description,
    image,
    ctaLabel,
    ctaLink
  },
  pillarsSection {
    title,
    italicTitle,
    pillars[] {
      title,
      description,
      icon,
      color
    }
  },
  ctaSection {
    title,
    italicTitle,
    description,
    buttonLabel,
    buttonLink
  }
}`

export const videosQuery = groq`*[_type == "video"] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  category,
  thumbnail,
  videoUrl,
  embedCode,
  type
}`

export const coachingSettingsQuery = groq`*[_type == "coachingSettings"][0] {
  _id,
  heroSection {
    eyebrow,
    title,
    italicTitle,
    description,
    image,
    testimonialQuote,
    testimonialAuthor
  },
  services[] {
    number,
    acronym,
    color,
    icon,
    fullName,
    description,
    duration,
    ctaText,
    ctaLink
  },
  bannerSection {
    image,
    title,
    italicTitle,
    description,
    ctaText,
    ctaLink
  }
}`

export const livestreamSettingsQuery = groq`*[_type == "livestreamSettings"][0] {
  _id,
  heroSection {
    title,
    italicTitle,
    description
  },
  zoomDetails {
    meetingId,
    zoomLink
  },
  gallerySection {
    badge,
    title,
    italicTitle,
    subtitle
  }
}`
