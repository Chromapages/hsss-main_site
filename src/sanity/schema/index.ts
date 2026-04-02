import { type SchemaTypeDefinition } from 'sanity'

import { eventType } from './event'
import { heroSlideType } from './heroSlide'
import { nextStepCardType } from './nextStepCard'
import { testimonialType } from './testimonial'
import { aboutSectionType } from './aboutSection'
import { homeSettingsType } from './homeSettings'
import { aboutSettingsType } from './aboutSettings'
import { videoType } from './video'
import { livestreamSettingsType } from './livestreamSettings'
import { coachingSettingsType } from './coachingSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, heroSlideType, nextStepCardType, testimonialType, aboutSectionType, homeSettingsType, aboutSettingsType, videoType, livestreamSettingsType, coachingSettingsType],
}
