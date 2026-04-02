import HeroSlider, { type HeroSlide } from "@/components/HeroSlider";
import { client } from "@/sanity/lib/client";
import { heroSlidesQuery } from "@/sanity/lib/queries";
import { FALLBACK_HERO_SLIDES } from "@/lib/constants";

export default async function HeroSection() {
  const heroSlides = await client.fetch<HeroSlide[]>(heroSlidesQuery);
  const displayHeroSlides = heroSlides?.length > 0 ? heroSlides : FALLBACK_HERO_SLIDES;

  return <HeroSlider slides={displayHeroSlides} />;
}
