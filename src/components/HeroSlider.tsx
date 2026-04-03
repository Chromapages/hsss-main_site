"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { urlFor } from "@/sanity/lib/image";

export interface HeroSlide {
  _id?: string;
  title: string;
  italicSubtitle?: string;
  description: string;
  image?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: {
        lqip: string;
      };
    };
  };
  imageAlt?: string;
  staticImage?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  order?: number;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoRotateMs?: number;
}

const isExternalLink = (href: string) => /^(https?:)?\/\//.test(href);

function SlideAction({
  href,
  children,
  variant,
}: {
  href: string;
  children: ReactNode;
  variant: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "signature-gradient touch-press no-select inline-flex min-h-[52px] items-center justify-center rounded-full px-8 py-4 text-base md:text-lg font-bold text-on-primary shadow-2xl shadow-primary/20 transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      : "touch-press no-select group inline-flex min-h-[52px] items-center gap-3 text-base md:text-lg font-bold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  if (isExternalLink(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function getSlideImage(slide: HeroSlide) {
  if (slide.image?.asset?.url) {
    return slide.image.asset.url;
  }
  return slide.staticImage || "/about_hsss.png";
}

export default function HeroSlider({
  slides,
  autoRotateMs = 5000,
}: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const slidesLengthRef = useRef(slides.length);

  // Touch swipe state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    slidesLengthRef.current = slides.length;
  }, [slides.length]);

  useEffect(() => {
    if (slides.length === 0) return;
    setActiveIndex((current) => (current >= slides.length ? 0 : current));
  }, [slides.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slidesLengthRef.current);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slidesLengthRef.current) % slidesLengthRef.current);
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || reducedMotion) return;
    const interval = window.setInterval(goToNext, autoRotateMs);
    return () => window.clearInterval(interval);
  }, [autoRotateMs, goToNext, reducedMotion, slides.length]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only swipe if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <section
      className="relative flex min-h-[88svh] md:min-h-[90vh] items-end md:items-center overflow-hidden bg-surface pb-8 md:pb-32 pt-0 md:pt-40"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const lqip = slide.image?.asset?.metadata?.lqip;
          return (
            <div
              key={slide._id || `${slide.title}-${index}`}
              className={`absolute inset-0 transition-opacity ${reducedMotion ? "duration-0" : "duration-1000"} ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={getSlideImage(slide)}
                alt={slide.imageAlt || slide.title}
                fill
                priority={index === 0}
                {...(index === 0 ? { fetchPriority: "high" } : { fetchPriority: "low" })}
                placeholder={lqip ? "blur" : "empty"}
                blurDataURL={lqip}
                className="object-cover object-center md:object-center"
                sizes="100vw"
              />
              {/* Mobile: stronger bottom gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-surface/30 md:hidden" />
              {/* Desktop: side gradient */}
              <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-surface via-surface/90 to-surface/20" />
            </div>
          );
        })}
      </div>

      <div className="absolute -left-24 -top-24 z-0 h-96 w-96 animate-pulse rounded-full bg-primary-fixed opacity-20 blur-3xl" />

      <div className="container relative z-20 mx-auto flex max-w-[1600px] flex-col gap-10 md:gap-16 px-5 md:px-12">
        <div className="w-full md:w-1/2">
          {/* Mobile: fixed height; desktop: same */}
          <div className="relative min-h-[340px] md:min-h-[520px]">
            {slides.map((slide, index) => (
              <div
                key={slide._id || `content-${index}`}
                className={`absolute inset-0 flex flex-col justify-end md:justify-center transition-opacity ${reducedMotion ? "duration-0" : "duration-700"} ${
                  index === activeIndex ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <span className="mb-4 md:mb-8 mt-6 md:mt-24 block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  He Said She Said Ministries
                </span>
                <h1 className="mb-5 md:mb-12 text-[2.6rem] leading-[1.05] tracking-tight text-on-surface md:text-[6rem] font-headline">
                  {slide.title}
                  {slide.italicSubtitle ? (
                    <>
                      <br />
                      <span className="serif ml-[-0.03em] italic text-primary">
                        {slide.italicSubtitle}
                      </span>
                    </>
                  ) : null}
                </h1>
                <p className="mb-7 md:mb-12 max-w-2xl text-base leading-[1.65] text-on-surface-variant md:text-2xl font-body line-clamp-3 md:line-clamp-none whitespace-pre-line">
                  {slide.description}
                </p>
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
                  {slide.primaryButtonText && slide.primaryButtonLink ? (
                    <SlideAction href={slide.primaryButtonLink} variant="primary">
                      {slide.primaryButtonText}
                    </SlideAction>
                  ) : null}
                  {slide.secondaryButtonText && slide.secondaryButtonLink ? (
                    <SlideAction href={slide.secondaryButtonLink} variant="secondary">
                      <span className="border-b-2 border-primary-fixed pb-1 transition-all duration-300 group-hover:border-primary">
                        {slide.secondaryButtonText}
                      </span>
                      <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2">
                        arrow_forward
                      </span>
                    </SlideAction>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          {slides.length > 1 ? (
            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3" aria-label="Hero slide navigation">
                {slides.map((slide, index) => (
                  <button
                    key={slide._id || `dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}: ${slide.title || 'Featured Slide'}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className="touch-press flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    <span
                      className={`block h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 md:w-12 bg-primary"
                          : "w-2.5 md:w-3 bg-on-surface/25 hover:bg-on-surface/45"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={goToPrev}
                  className="touch-press flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/70 text-on-surface shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span className="material-symbols-outlined text-lg md:text-base">west</span>
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={goToNext}
                  className="touch-press flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/70 text-on-surface shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span className="material-symbols-outlined text-lg md:text-base">east</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="hidden w-full md:block md:w-1/2" />
      </div>
    </section>
  );
}
