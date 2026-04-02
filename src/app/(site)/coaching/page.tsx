import Image from "next/image";
import type { Metadata } from "next";
import FooterCTA from "@/components/FooterCTA";
import { client } from "@/sanity/lib/client";
import { coachingSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

export const metadata: Metadata = {
  title: "Faith Coaching | He Said She Said Ministries",
  description: "One-on-one faith coaching with HSSS. Explore B.A.E. and C.O.R.E. — courses designed to help you identify mindsets, communicate with purpose, and walk in God's vision for your life.",
  openGraph: {
    title: "Faith Coaching | HSSS Ministries",
    description: "Structured coaching courses — B.A.E. and C.O.R.E. — to help you navigate your spiritual journey with clarity.",
    url: "https://hsss-ministries.org/coaching",
  },
};

type CoachingService = {
  number?: string;
  acronym?: string;
  color?: string;
  icon?: string;
  fullName?: string;
  description?: string;
  duration?: string;
  ctaText?: string;
  ctaLink?: string;
};

type CoachingSettings = {
  heroSection?: {
    eyebrow?: string;
    title?: string;
    italicTitle?: string;
    description?: string;
    image?: SanityImage;
    testimonialQuote?: string;
    testimonialAuthor?: string;
  };
  services?: CoachingService[];
  bannerSection?: {
    image?: SanityImage;
    title?: string;
    italicTitle?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
  };
};

const serviceColorMap: Record<string, { numberColor: string; iconBg: string; iconText: string; badge: string; btn: string }> = {
  primary: {
    numberColor: "group-hover:text-primary/20",
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    badge: "text-primary",
    btn: "signature-gradient text-on-primary",
  },
  secondary: {
    numberColor: "group-hover:text-secondary/20",
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
    badge: "text-secondary",
    btn: "bg-secondary text-on-secondary",
  },
  tertiary: {
    numberColor: "group-hover:text-tertiary/20",
    iconBg: "bg-tertiary/10",
    iconText: "text-tertiary",
    badge: "text-tertiary",
    btn: "bg-tertiary text-on-tertiary",
  },
};

const defaultServices: CoachingService[] = [
  {
    number: "01",
    acronym: "B.A.E.",
    color: "primary",
    icon: "psychology_alt",
    fullName: "Behavioral Assessment Exercises.",
    description: "This course is a 3-week session dedicated to assessing your perspective and way of thinking. Identifying patterns that hinder your growth.",
    duration: "3 Week Session",
    ctaText: "Inquire About B.A.E.",
    ctaLink: "/contact?interest=bae",
  },
  {
    number: "02",
    acronym: "C.O.R.E.",
    color: "secondary",
    icon: "hub",
    fullName: "Communicating Objectives Resolve Execution.",
    description: "An extensive 6-week course that coaches in communication along with establishing objectives, leading to resolve and execution in all areas of life.",
    duration: "6 Week Extensive Course",
    ctaText: "Inquire About C.O.R.E.",
    ctaLink: "/contact?interest=core",
  },
];

export default async function Coaching() {
  const settings = await client.fetch<CoachingSettings>(coachingSettingsQuery);

  const hero = settings?.heroSection;
  const services = settings?.services?.length ? settings.services : defaultServices;
  const banner = settings?.bannerSection;

  const heroImageSrc = hero?.image ? urlFor(hero.image).url() : "/about_hsss.png";
  const bannerImageSrc = banner?.image ? urlFor(banner.image).url() : "/coaching-banner.png";

  return (
    <div className="flex flex-col min-h-screen pt-4 md:pt-24">

      {/* Hero Section */}
      <section className="py-10 md:py-24 bg-surface">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center">
            <div className="space-y-7 md:space-y-12">
              <div className="space-y-3 md:space-y-4">
                <span className="text-primary font-label tracking-[0.3em] uppercase text-xs md:text-sm block font-bold">
                  {hero?.eyebrow || "HESAIDshesaid in Life Coaching"}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-[6.5rem] leading-[1.0] md:leading-[0.95] tracking-tight font-headline">
                  {hero?.title || "Navigate Your Journey"}{" "}
                  <span className="text-primary italic serif">{hero?.italicTitle || "with Clarity."}</span>
                </h1>
              </div>

              <p className="text-base md:text-xl lg:text-2xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
                {hero?.description || "Our coaching is not about motivation. It's about strategy. We help you identify the mindsets that are keeping you stuck and replace them with the Word of God."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 md:pt-4">
                <div className="bg-surface-container-low p-5 md:p-6 rounded-2xl md:rounded-3xl border border-outline-variant/10 flex-1">
                  <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/70 mb-2">Session Inquiries</div>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:hsssat@outlook.com" className="touch-press text-primary font-bold text-base md:text-lg hover:underline transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">mail</span>
                      hsssat@outlook.com
                    </a>
                    <a href="tel:855-474-3724" className="touch-press text-on-surface font-bold text-base md:text-lg hover:text-primary transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">call</span>
                      855-474-3724
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <a href="/contact" className="w-full sm:w-auto">
                    <button className="touch-press no-select signature-gradient text-on-primary w-full px-10 py-5 rounded-full text-base md:text-lg font-bold shadow-2xl shadow-primary/20 active:scale-95 transition-all duration-300">
                      Book a Session
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero image — hidden on mobile to save space, shown on desktop */}
            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src={heroImageSrc}
                  alt="Coaching Session"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed opacity-20 blur-3xl -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-2xl z-20 max-w-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
                <p className="italic text-on-surface/80 serif text-xl mb-4 leading-relaxed">
                  &ldquo;{hero?.testimonialQuote || "I gained clarity and confusion was cancelled OUT!"}&rdquo;
                </p>
                <div className="text-primary font-bold text-sm tracking-widest uppercase">
                  — {hero?.testimonialAuthor || "B.B., HSSS Client"}
                </div>
              </div>
            </div>

            {/* Mobile testimonial chip */}
            <div className="lg:hidden bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/10 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl mb-2 block">format_quote</span>
              <p className="italic text-on-surface/80 serif text-base leading-relaxed mb-3">
                &ldquo;{hero?.testimonialQuote || "I gained clarity and confusion was cancelled OUT!"}&rdquo;
              </p>
              <div className="text-primary font-bold text-xs tracking-widest uppercase">
                — {hero?.testimonialAuthor || "B.B., HSSS Client"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 md:py-32 bg-surface-container-low">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-24 gap-5 md:gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-3 md:mb-4 block font-bold">The Curriculum</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-headline">
                Our <span className="italic text-secondary serif">Services.</span>
              </h2>
            </div>
            <p className="text-on-surface-variant text-base md:text-xl max-w-md font-body leading-relaxed">
              Structured courses designed to lead you through spiritual assessment, communication strategies, and actionable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {services.map((service) => {
              const theme = serviceColorMap[service.color || "primary"] || serviceColorMap.primary;
              return (
                <div
                  key={service.acronym || service.number}
                  className="bg-surface-container-lowest p-7 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] border border-outline-variant/5 shadow-sm card-interactive group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6 md:mb-12">
                      <div className={`text-5xl md:text-6xl lg:text-8xl font-headline text-outline-variant/30 transition-colors duration-500 ${theme.numberColor}`}>
                        {service.number}
                      </div>
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center ${theme.iconBg} ${theme.iconText}`}>
                        <span className="material-symbols-outlined text-2xl md:text-3xl">{service.icon || "psychology_alt"}</span>
                      </div>
                    </div>
                    <h3 className={`text-xl md:text-3xl font-label tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 ${theme.badge}`}>{service.acronym}</h3>
                    <h4 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-headline mb-5 md:mb-8 leading-tight">{service.fullName}</h4>
                    <p className="text-on-surface-variant text-sm md:text-lg font-body leading-relaxed mb-5 md:mb-8">{service.description}</p>
                  </div>
                  <div className="pt-5 md:pt-8 border-t border-outline-variant/10">
                    <div className="flex flex-col gap-4 md:gap-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 bg-surface rounded-full text-xs md:text-sm font-bold border border-outline-variant/20 self-start">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {service.duration}
                      </div>
                      <a href={service.ctaLink || "/contact"}>
                        <button className={`touch-press no-select ${theme.btn} px-8 py-4 rounded-xl md:rounded-2xl font-bold active:scale-95 transition-all duration-300 w-full`}>
                          {service.ctaText}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative min-h-[360px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImageSrc}
          alt={banner?.title || "Inspiration Banner"}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px] relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-headline leading-tight">
              {banner?.title || "Your Journey to"}{" "}
              <span className="italic serif text-primary-fixed">{banner?.italicTitle || "Clarity"}</span>{" "}
              {!banner?.title && "Begins Here."}
            </h2>
            <p className="text-white/80 text-base md:text-xl font-body leading-relaxed max-w-xl mx-auto">
              {banner?.description || "Ready to assess, restore, and execute your purpose? Join the next B.A.E. or C.O.R.E. session to discover what's possible."}
            </p>
            <div className="pt-4 md:pt-8">
              <a href={banner?.ctaLink || "/contact"}>
                <button className="touch-press no-select signature-gradient text-on-primary px-10 py-5 md:px-12 md:py-6 rounded-full text-lg md:text-xl font-bold shadow-2xl active:scale-95 transition-all duration-300">
                  {banner?.ctaText || "Join a Course Now"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 md:py-32 bg-surface">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="text-center mb-10 md:mb-24">
            <span className="text-secondary font-label tracking-[0.3em] uppercase text-xs mb-3 md:mb-4 block font-bold">Transformation Stories</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-headline">
              Client <span className="italic text-primary serif">Voices.</span>
            </h2>
          </div>

          {/* Horizontal scroll on mobile, 3-col grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 scroll-fade-right md:overflow-visible">
            {[
              { quote: "Through the Holy Spirit, I have identified areas in my life that were hindering my progress in God. I am overcoming these areas by prayer and fasting.", attr: "Spiritual Growth Client", color: "text-primary" },
              { quote: "Since March 2021, my focus has been to listen for God as He's always speaking. My faith has increased through the weekly teaching shared during HSSS.", attr: "HSSS Member since 2021", color: "text-secondary" },
              { quote: "I came into HSSS in a state of confusion. God revealed that my anxiety was fed by lack of trust. I gained clarity and confusion was cancelled OUT!", attr: "Faith Coaching Client", color: "text-tertiary" },
            ].map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start relative p-7 md:p-12 bg-surface-container-low rounded-[2rem] md:rounded-[4rem] group card-interactive overflow-hidden">
                <span className={`material-symbols-outlined text-[6rem] md:text-[8rem] ${item.color}/5 absolute top-4 left-4 md:top-8 md:left-8 select-none`}>format_quote</span>
                <div className="relative z-10">
                  <p className="text-base md:text-xl lg:text-2xl text-on-surface font-body leading-relaxed mb-7 md:mb-12 italic">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-8 md:w-12 h-1 rounded-full ${item.color.replace("text-", "bg-")}`} />
                    <div className="font-bold text-on-surface-variant uppercase tracking-widest text-[10px] md:text-xs">{item.attr}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
