"use client";

import React from "react";
import Image from "next/image";
import type { Testimonial } from "@/lib/constants";

interface MarqueeProps {
  testimonials: Testimonial[];
}

export default function Marquee({ testimonials }: MarqueeProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="overflow-hidden w-full">
      <div className="marquee-track flex gap-8 w-max">
        {/* Original Set */}
        {testimonials.map((t, i) => (
          <TestimonialCard key={t._id || `orig-${i}`} testimonial={t} />
        ))}
        {/* Duplicate Set for Seamless Loop */}
        {testimonials.map((t, i) => (
          <TestimonialCard key={t._id ? `${t._id}-dup` : `dup-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  const lqip = t.image?.asset?.metadata?.lqip;

  return (
    <div className="w-96 shrink-0 bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col gap-6 shadow-sm group hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <span
          className={`material-symbols-outlined ${colorMap[t.color]} text-4xl opacity-40`}
          style={{ fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48" }}
        >
          format_quote
        </span>
        {t.image?.asset?.url && (
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-surface-container-low shadow-sm">
            <Image
              src={t.image.asset.url}
              alt={t.author}
              width={56}
              height={56}
              placeholder={lqip ? "blur" : "empty"}
              blurDataURL={lqip}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <p className="font-body text-on-surface-variant leading-relaxed text-base flex-grow">
        {t.quote}
      </p>
      <div>
        <div className={`font-label font-bold ${colorMap[t.color]} text-sm`}>{t.author}</div>
        <div className="text-xs text-on-surface-variant tracking-wide mt-0.5">{t.role}</div>
      </div>
    </div>
  );
}
