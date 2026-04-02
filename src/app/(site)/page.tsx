import { Suspense } from "react";
import FooterCTA from "@/components/FooterCTA";
import HeroSection from "@/features/home/HeroSection";
import AboutSection from "@/features/home/AboutSection";
import SanctuaryPathSection from "@/features/home/SanctuaryPathSection";
import ScriptureSection from "@/features/home/ScriptureSection";
import TestimonialsSection from "@/features/home/TestimonialsSection";
import EventsSection from "@/features/home/EventsSection";
import { 
  HeroSkeleton, 
  AboutSkeleton,
  SanctuaryPathSkeleton,
  EventsSkeleton,
  ScriptureSkeleton,
  TestimonialsSkeleton
} from "@/components/skeletons/SectionSkeletons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<AboutSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SanctuaryPathSkeleton />}>
        <SanctuaryPathSection />
      </Suspense>

      <Suspense fallback={<ScriptureSkeleton />}>
        <ScriptureSection />
      </Suspense>

      <Suspense fallback={<TestimonialsSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<EventsSkeleton />}>
        <EventsSection />
      </Suspense>

      <FooterCTA />
    </div>
  );
}
