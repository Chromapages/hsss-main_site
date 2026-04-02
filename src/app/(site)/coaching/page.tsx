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
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-primary font-label tracking-[0.3em] uppercase text-sm block font-bold">
                  {hero?.eyebrow || "HESAIDshesaid in Life Coaching"}
                </span>
                <h1 className="text-5xl md:text-[6.5rem] leading-[0.95] tracking-tight font-headline">
                  {hero?.title || "Navigate Your Journey"} <br/>
                  <span className="text-primary italic serif">{hero?.italicTitle || "with Clarity."}</span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
                {hero?.description || "Our coaching is not about motivation. It's about strategy. We help you identify the mindsets that are keeping you stuck and replace them with the Word of God."}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 flex-1">
                  <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/70 mb-2">Session Inquiries</div>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:hsssat@outlook.com" className="text-primary font-bold text-lg hover:underline transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">mail</span>
                      hsssat@outlook.com
                    </a>
                    <a href="tel:855-474-3724" className="text-on-surface font-bold text-lg hover:text-primary transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">call</span>
                      855-474-3724
                    </a>
                  </div>
                </div>
                <div className="pt-2 flex items-center">
                  <a href="/contact">
                    <button className="signature-gradient text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-300">
                      Book a Session
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src={heroImageSrc}
                  alt="Coaching Session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-4 block font-bold">The Curriculum</span>
              <h2 className="text-5xl md:text-7xl font-headline">Our <span className="italic text-secondary serif">Services.</span></h2>
            </div>
            <p className="text-on-surface-variant text-xl max-w-md font-body leading-relaxed mb-4">
              Structured courses designed to lead you through spiritual assessment, communication strategies, and actionable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const theme = serviceColorMap[service.color || "primary"] || serviceColorMap.primary;
              return (
                <div
                  key={service.acronym || service.number}
                  className="bg-surface-container-lowest p-12 md:p-16 rounded-[4rem] border border-outline-variant/5 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-12">
                      <div className={`text-6xl md:text-8xl font-headline text-outline-variant/30 transition-colors duration-500 ${theme.numberColor}`}>
                        {service.number}
                      </div>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${theme.iconBg} ${theme.iconText}`}>
                        <span className="material-symbols-outlined text-3xl">{service.icon || "psychology_alt"}</span>
                      </div>
                    </div>
                    <h3 className={`text-3xl font-label tracking-[0.2em] uppercase mb-2 ${theme.badge}`}>{service.acronym}</h3>
                    <h4 className="text-4xl md:text-5xl font-headline mb-8 leading-tight">{service.fullName}</h4>
                    <p className="text-on-surface-variant text-lg font-body leading-relaxed mb-8">{service.description}</p>
                  </div>
                  <div className="pt-8 border-t border-outline-variant/10">
                    <div className="flex flex-col gap-6">
                      <div className="inline-flex items-center gap-2 px-6 py-2 bg-surface rounded-full text-sm font-bold border border-outline-variant/20 self-start">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {service.duration}
                      </div>
                      <a href={service.ctaLink || "/contact"}>
                        <button className={`${theme.btn} px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 w-full`}>
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
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImageSrc}
          alt={banner?.title || "Inspiration Banner"}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="container mx-auto px-12 max-w-[1600px] relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl text-white font-headline leading-tight">
              {banner?.title || "Your Journey to"}{" "}
              <span className="italic serif text-primary-fixed">{banner?.italicTitle || "Clarity"}</span>{" "}
              {!banner?.title && "Begins Here."}
            </h2>
            <p className="text-white/80 text-xl font-body leading-relaxed max-w-xl mx-auto">
              {banner?.description || "Ready to assess, restore, and execute your purpose? Join the next B.A.E. or C.O.R.E. session to discover what's possible."}
            </p>
            <div className="pt-8">
              <a href={banner?.ctaLink || "/contact"}>
                <button className="signature-gradient text-on-primary px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300">
                  {banner?.ctaText || "Join a Course Now"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="text-center mb-24">
            <span className="text-secondary font-label tracking-[0.3em] uppercase text-xs mb-4 block font-bold">Transformation Stories</span>
            <h2 className="text-5xl md:text-7xl font-headline">Client <span className="italic text-primary serif">Voices.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { quote: "Through the Holy Spirit, I have identified areas in my life that were hindering my progress in God. I am overcoming these areas by prayer and fasting.", attr: "Spiritual Growth Client", color: "text-primary" },
              { quote: "Since March 2021, my focus has been to listen for God as He's always speaking. My faith has increased through the weekly teaching shared during HSSS.", attr: "HSSS Member since 2021", color: "text-secondary" },
              { quote: "I came into HSSS in a state of confusion. God revealed that my anxiety was fed by lack of trust. I gained clarity and confusion was cancelled OUT!", attr: "Faith Coaching Client", color: "text-tertiary" },
            ].map((item, i) => (
              <div key={i} className="relative p-12 bg-surface-container-low rounded-[4rem] group hover:bg-surface-container transition-colors duration-500">
                <span className={`material-symbols-outlined text-[8rem] ${item.color}/5 absolute top-8 left-8 select-none group-hover:${item.color}/10 transition-colors`}>format_quote</span>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-on-surface font-body leading-relaxed mb-12 italic">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-1 rounded-full bg-${item.color.replace("text-", "")}`} />
                    <div className="font-bold text-on-surface-variant uppercase tracking-widest text-xs">{item.attr}</div>
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
