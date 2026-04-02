"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Image as SanityImage } from "sanity";

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
      ? "signature-gradient inline-flex min-h-11 items-center justify-center rounded-full px-10 py-5 text-lg font-bold text-on-primary shadow-2xl shadow-primary/20 transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      : "group inline-flex min-h-11 items-center gap-4 text-lg font-bold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

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

  useEffect(() => {
    if (slides.length <= 1 || reducedMotion) return;

    const interval = window.setInterval(goToNext, autoRotateMs);
    return () => window.clearInterval(interval);
  }, [autoRotateMs, goToNext, reducedMotion, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-surface pb-32 pt-40">
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
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20" />
            </div>
          );
        })}
      </div>

      <div className="absolute -left-24 -top-24 z-0 h-96 w-96 animate-pulse rounded-full bg-primary-fixed opacity-20 blur-3xl" />

      <div className="container relative z-20 mx-auto flex max-w-[1600px] flex-col gap-16 px-8 md:flex-row md:px-12">
        <div className="w-full md:w-1/2">
          <div className="relative min-h-[520px]">
            {slides.map((slide, index) => (
              <div
                key={slide._id || `content-${index}`}
                className={`absolute inset-0 flex flex-col justify-center transition-opacity ${reducedMotion ? "duration-0" : "duration-700"} ${
                  index === activeIndex ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <span className="mb-8 mt-24 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  He Said She Said Ministries
                </span>
                <h1 className="mb-12 text-4xl leading-[1] tracking-tight text-on-surface md:text-[6rem] font-headline">
                  {slide.title}
                  {slide.italicSubtitle ? (
                    <>
                      <br />
                      <span className="serif ml-[-0.05em] italic text-primary">
                        {slide.italicSubtitle}
                      </span>
                    </>
                  ) : null}
                </h1>
                <p className="mb-12 max-w-2xl text-xl leading-[1.6] text-on-surface-variant md:text-2xl font-body whitespace-pre-line">
                  {slide.description}
                </p>
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
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

          {slides.length > 1 ? (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3" aria-label="Hero slide navigation">
                {slides.map((slide, index) => (
                  <button
                    key={slide._id || `dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    <span
                      className={`block h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-12 bg-primary"
                          : "w-3 bg-on-surface/25 hover:bg-on-surface/45"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() =>
                    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/70 text-on-surface shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => setActiveIndex((current) => (current + 1) % slides.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/15 bg-surface/70 text-on-surface shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span className="material-symbols-outlined">east</span>
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
