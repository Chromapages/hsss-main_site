import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Image as SanityImage } from "sanity";
import HeroSlider, { type HeroSlide } from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import FooterCTA from "@/components/FooterCTA";
import { client } from "@/sanity/lib/client";
import {
  eventsQuery,
  heroSlidesQuery,
  nextStepCardsQuery,
  testimonialsQuery,
  aboutSectionQuery,
  homeSettingsQuery,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Testimonial = {
  _id?: string;
  author: string;
  role: string;
  quote: string;
  color: "primary" | "secondary" | "tertiary";
};

type EventItem = {
  _id: string;
  title: string;
  slug?: string;
  date: string;
  location?: string;
  description: string;
  image?: SanityImage;
  staticImage?: string;
  category?: string;
  icon?: string;
  color?: "primary" | "secondary" | "tertiary";
  isFeaturedTheme?: boolean;
  subtitle?: string;
  italicTitle?: string;
  scripture?: string;
  themeYear?: string;
  buttonText?: string;
};

type NextStepCard = {
  _id?: string;
  title: string;
  icon: string;
  badgeText?: string;
  badgeIcon?: string;
  description: string;
  meetingId?: string;
  ctaText: string;
  ctaLink: string;
  colorTheme: "primary" | "secondary" | "tertiary";
  order?: number;
};

type AboutSection = {
  _id?: string;
  title: string;
  italicTitle?: string;
  content: string;
  image: SanityImage;
  stats?: Array<{ value: string; label: string }>;
};

type HomeSettings = {
  _id?: string;
  sanctuaryPath?: {
    title: string;
    description: string;
  };
  scriptureSection?: {
    quote: string;
    highlight: string;
    source: string;
    backgroundImage?: SanityImage;
  };
  testimonialsSection?: {
    title: string;
  };
  eventsSection?: {
    title: string;
    description: string;
  };
};

const fallbackHeroSlides: HeroSlide[] = [
  {
    _id: "hero-1",
    title: "His Word. Your Purpose.",
    italicSubtitle: "No Compromise.",
    description:
      "Feeling clouded by the world's expectations? You're not alone. We build our lives around what others tell us we are. But what if He has already said something different?\n\nHSSS helps you identify the noise, pursue the mind of Christ, and walk boldly in who He says you are.",
    staticImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZKjS9LcbUC_JIcQNQOsm1tN8GmpaosSfynZduGd7TNyeKHaOv189ZgVKSgFQJ_lVcBn4RtkfxPRSlurXmY-HUmsc0FxW0b_xvWaSU_e49uSB_8T761_WK4EnFDFVwUn6NJSnCHF2VxqyLVQfDis0DdN8RiT19_sCIEkMEy0mWSvMrchNI_RvRQHxY2Y8ylqQfNn8GKdBwpjDfCVqGGXRWpKdxI1RxFfnh6aNFLmepYN_8RIIyeTexC9bFDvzaKDzwe9qk0WVqIA",
    primaryButtonText: "Join Morning Prayer",
    primaryButtonLink: "/livestream",
    secondaryButtonText: "Our Story",
    secondaryButtonLink: "/about",
    imageAlt: "Serene morning prayer",
    order: 0,
  },
  {
    _id: "hero-2",
    title: "Drop the World's Narrative.",
    italicSubtitle: "Pursue Christ's Mind.",
    description:
      "Every gathering is designed to help you hear clearly, heal honestly, and move with courage. We create space for truth, clarity, and practical next steps rooted in God's voice.",
    staticImage: "/about_hsss.png",
    primaryButtonText: "Explore the Ministry",
    primaryButtonLink: "/about",
    secondaryButtonText: "See Livestreams",
    secondaryButtonLink: "/livestream",
    imageAlt: "Ministry portrait",
    order: 1,
  },
  {
    _id: "hero-3",
    title: "Find the Courage to Shift.",
    italicSubtitle: "Move Boldly Forward.",
    description:
      "From weekly prayer to evening Bible sessions, HSSS gives you consistent places to return to God's truth, strengthen your faith, and take the next faithful step.",
    staticImage: "/bible_study_1.png",
    primaryButtonText: "View This Season",
    primaryButtonLink: "/livestream",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
    imageAlt: "Bible study gathering",
    order: 2,
  },
];

const fallbackNextStepCards: NextStepCard[] = [
  {
    _id: "step-1",
    title: "5:45 AM Tuesday Prayer",
    icon: "videocam",
    badgeText: "Every Tuesday",
    badgeIcon: "schedule",
    description:
      "We are now on Zoom — No signup needed. Come as you are. Join our collective prayer calls designed to align your heart with divine intentions.",
    meetingId: "815 758 1664",
    ctaText: "Join Morning Prayer",
    ctaLink: "https://us06web.zoom.us/j/8157581664?omn=82461919629",
    colorTheme: "primary",
    order: 0,
  },
  {
    _id: "step-2",
    title: "Join the Men of HSSS",
    icon: "shield",
    badgeText: "4th Tuesdays",
    badgeIcon: "calendar_month",
    description:
      "A special space for men to gather, grow, and lead with purpose. Led by Leonard Jones — All are welcome!",
    ctaText: "All Are Welcome!",
    ctaLink: "/about",
    colorTheme: "secondary",
    order: 1,
  },
  {
    _id: "step-3",
    title: "7:15 PM Bible Session",
    icon: "groups",
    badgeText: "Except 1st Tuesdays",
    badgeIcon: "event_busy",
    description:
      "Interactive evening sessions focusing on the mind of Christ and your purpose. Join us on Zoom (No passcode needed).",
    meetingId: "815 758 1664",
    ctaText: "Join Evening Session",
    ctaLink: "https://us06web.zoom.us/j/8157581664?omn=82461919629",
    colorTheme: "tertiary",
    order: 2,
  },
];

const fallbackTestimonials: Testimonial[] = [
  {
    author: "Y.S.",
    role: "Community Member",
    quote:
      "Realizing my blind spot was Trust. I had to step out on Faith… I started practicing 'Open Handed Living' and taking baby steps in believing that God had my best interest at heart. Still growing and learning. God Bless you for HSSS — IT HAS BEEN A BLESSING!",
    color: "primary",
  },
  {
    author: "C.S.",
    role: "Weekly Attendee",
    quote:
      "He Said/She Said is a constant reminder of what God says and feels about me. It serves as a weekly reminder of God's care, consideration and His loving kindness towards me. He Said/She Said is simply a must have in my life!!!",
    color: "secondary",
  },
  {
    author: "Anonymous",
    role: "HSSS Member",
    quote:
      "What God has taught me through HSSS mainly is patience… He's taking me the long way around to make sure I'm equipped for the job. Patience is not easy but will pay off if you trust God.",
    color: "tertiary",
  },
];

const fallbackEvents: EventItem[] = [
  {
    _id: "giveaway",
    title: "HSSS Food Giveaway",
    date: "2025-12-06",
    description:
      "An annual community outreach event dedicated to serving, sharing, and providing for those in need with compassion and dignity.",
    staticImage: "/giveaway-hsss.avif",
    category: "Annual Outreach",
    icon: "volunteer_activism",
    color: "primary",
  },
  {
    _id: "pivot",
    title: "PIVOT Conference",
    date: "2023-03-09",
    description:
      'A bold conference call to reposition, refocus, and embrace "the COURAGE TO SHIFT NOW!" with faith-led intention.',
    staticImage: "/pivot-hsss.avif",
    category: "Past Conference",
    icon: "sync_alt",
    color: "tertiary",
    subtitle: "Pursuing Intentional Vision Over Thought",
  },
];

const nextStepThemeMap: Record<
  NextStepCard["colorTheme"],
  {
    iconBg: string;
    iconText: string;
    badge: string;
    cta: string;
  }
> = {
  primary: {
    iconBg: "bg-primary-fixed/50",
    iconText: "text-primary",
    badge: "bg-primary/10 text-primary",
    cta: "text-primary",
  },
  secondary: {
    iconBg: "bg-secondary-fixed/50",
    iconText: "text-secondary",
    badge: "bg-secondary/10 text-secondary",
    cta: "text-secondary",
  },
  tertiary: {
    iconBg: "bg-tertiary-fixed/50",
    iconText: "text-tertiary",
    badge: "bg-tertiary/10 text-tertiary",
    cta: "text-tertiary",
  },
};

function isExternalLink(href: string) {
  return /^(https?:)?\/\//.test(href);
}

function NextStepLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
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

export default async function Home() {
  const [events, testimonials, heroSlides, nextStepCards, aboutData, homeSettings] = await Promise.all([
    client.fetch<EventItem[]>(eventsQuery),
    client.fetch<Testimonial[]>(testimonialsQuery),
    client.fetch<HeroSlide[]>(heroSlidesQuery),
    client.fetch<NextStepCard[]>(nextStepCardsQuery),
    client.fetch<AboutSection>(aboutSectionQuery),
    client.fetch<HomeSettings>(homeSettingsQuery),
  ]);

  const displayTestimonials = testimonials?.length > 0 ? testimonials : fallbackTestimonials;

  const displayEventsRaw = events?.length > 0 ? events : fallbackEvents;
  const standardEvents = displayEventsRaw.filter((e) => !e.isFeaturedTheme);
  const featuredTheme = displayEventsRaw.find((e) => e.isFeaturedTheme) || {
    _id: "default-theme",
    title: "BOLDLY GO!",
    subtitle: "2026 Organization Theme",
    description: "Our 2026 organization theme, anchored in Joshua 3:4B, calling the ministry to move with courage into unfamiliar territory and trust the direction of God.",
    scripture: "Joshua 3:4B",
    themeYear: "2026",
    buttonText: "Embrace The Theme",
    italicTitle: "GO!",
    isFeaturedTheme: true,
    date: "2026-01-01"
  };

  const displayHeroSlides = heroSlides?.length > 0 ? heroSlides : fallbackHeroSlides;
  const displayNextStepCards =
    nextStepCards?.length > 0 ? nextStepCards : fallbackNextStepCards;

  const getEventImageSrc = (event: EventItem) =>
    event.image?.asset?._ref ? urlFor(event.image).url() : event.staticImage || "/giveaway-hsss.avif";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider slides={displayHeroSlides} />

      {/* About/Intro Section */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-4/5 bg-surface-container-low -z-10 rounded-l-[100px]"></div>
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
            <div className="md:col-span-6 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 group">
                <Image
                  src={aboutData?.image ? urlFor(aboutData.image).url() : "https://lh3.googleusercontent.com/aida-public/AB6AXuAs0ig0bDF0pIEaZwEb5-S1VaQvqIOjQgr3o4GIrHHMOZffcrUFUbWEsvz_9tPS0pgNfDQxu8SoYa1y5A7cnjOnOv3wtNL_IZNXFrE18nuhqPLRaGdnhWh3bHSqUyBkw_AXYdqjyBF1LUbC_x7GPRnwnq3iJMH2nQawkGnWaYiBGE28XD4YlluduCvG1FKNqdzKsbKrrnJI5UJiu_McpDzo65lebrBwP5y0uz2fTTjuAEdm81WcGdABWILo0yZ1HDMFjTBoeR5Y8g"}
                  alt={aboutData?.title || "Sacred Study"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed opacity-30 blur-3xl -z-10 animate-pulse"></div>
            </div>

            <div className="md:col-span-6 md:-ml-32 z-20">
              <div className="bg-surface-container-lowest p-12 md:p-16 rounded-[2.5rem] shadow-[0_48px_80px_-16px_rgba(140,112,119,0.08)]">
                <h2 className="text-5xl md:text-6xl mb-10 leading-[1.1] tracking-tight font-headline">
                  {aboutData?.title || "Built for His Purpose."} <br />
                  <span className="italic text-secondary serif">{aboutData?.italicTitle || "Designed for You."}</span>
                </h2>
                <div className="space-y-8 text-lg md:text-xl text-on-surface-variant leading-relaxed font-body whitespace-pre-line">
                  {aboutData?.content ? (
                    aboutData.content
                  ) : (
                    <>
                      <p>
                        HE SAID she said, is a faith-based navigation system designed to guide him and her into wholeness — spirit, soul, and body. We help men and women move beyond the ideologies and distorted perspectives shaped by their environment, and into alignment with the vision God has uniquely purposed for their lives.
                      </p>
                      <p>
                        Through that alignment, each person is equipped — not just inspired — to build practical strategies that transform themselves and the world around them.
                      </p>
                      <p>
                        We meet you where you are. Through virtual coaching sessions, community gatherings, and mental health referral services, HE SAID she said walks alongside you every step of the journey.
                      </p>
                    </>
                  )}
                </div>
                
                <div className="mt-16 pt-12 border-t border-outline-variant/10 grid grid-cols-2 gap-12">
                  {(aboutData?.stats && aboutData.stats.length > 0) ? (
                    aboutData.stats.map((stat, idx) => (
                      <div key={idx} className="group">
                        <div className="text-5xl font-headline text-primary mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">{stat.value}</div>
                        <div className="text-xs font-label uppercase tracking-[0.2em] text-outline font-bold">{stat.label}</div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="group">
                        <div className="text-5xl font-headline text-primary mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">500+</div>
                        <div className="text-xs font-label uppercase tracking-[0.2em] text-outline font-bold">Soul Journers</div>
                      </div>
                      <div className="group">
                        <div className="text-5xl font-headline text-primary mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">Daily</div>
                        <div className="text-xs font-label uppercase tracking-[0.2em] text-outline font-bold">Divine Connection</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Path Cards */}
      <section className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-6 block font-bold">The Sanctuary Path</span>
              <h2 className="text-5xl md:text-7xl leading-tight tracking-tighter font-headline">
                {homeSettings?.sanctuaryPath?.title
                  ? homeSettings.sanctuaryPath.title
                  : <>Your Next <span className="italic text-secondary serif">Step.</span></>
                }
              </h2>
            </div>
            <p className="text-xl text-on-surface-variant max-w-md font-body leading-relaxed">
              {homeSettings?.sanctuaryPath?.description || "Discover the path tailored for your current season of growth and spiritual exploration."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {displayNextStepCards.map((card) => {
              const theme = nextStepThemeMap[card.colorTheme] || nextStepThemeMap.primary;

              return (
                <div
                  key={card._id || card.title}
                  className="group flex h-full flex-col rounded-[2rem] bg-surface-container-lowest p-12 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_32px_64px_-16px_rgba(140,112,119,0.12)]"
                >
                  <div className={`mb-10 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 ${theme.iconBg}`}>
                    <span className={`material-symbols-outlined text-4xl ${theme.iconText}`}>
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="mb-4 text-3xl tracking-tight font-headline">{card.title}</h3>
                  {card.badgeText ? (
                    <div className={`mb-6 inline-flex self-start rounded-full px-3 py-1 ${theme.badge}`}>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">
                          {card.badgeIcon || "schedule"}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest font-label">
                          {card.badgeText}
                        </span>
                      </span>
                    </div>
                  ) : null}
                  <p className="mb-4 text-lg leading-relaxed text-on-surface-variant font-body">
                    {card.description}
                  </p>
                  {card.meetingId ? (
                    <div className="mb-10 rounded-xl border border-outline-variant/10 bg-surface-container-low p-4">
                      <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 font-label">
                        Meeting ID
                      </div>
                      <div className="font-mono text-lg font-bold text-on-surface">
                        {card.meetingId}
                      </div>
                    </div>
                  ) : null}
                  <div className="mt-auto border-t border-outline-variant/10 pt-8">
                    <NextStepLink
                      href={card.ctaLink}
                      className={`group/link flex items-center gap-3 text-lg font-bold ${theme.cta}`}
                    >
                      <span>{card.ctaText}</span>
                      <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">
                        east
                      </span>
                    </NextStepLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section
        className="py-24 relative overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${homeSettings?.scriptureSection?.backgroundImage ? urlFor(homeSettings.scriptureSection.backgroundImage).url() : '/assets/scripture_bg.png'}')` }}
      >
        <div className="absolute inset-0 bg-[#1c1b1b]/50 backdrop-blur-[1px]"></div>
        <div className="container mx-auto px-12 max-w-5xl relative z-10">
          <div className="text-center">
            <span className="material-symbols-outlined text-primary-fixed text-7xl opacity-50 block mb-10">format_quote</span>
            <blockquote className="text-[2.5rem] md:text-[4.5rem] leading-[1.1] text-white serif tracking-tight mb-12 relative drop-shadow-xl font-headline">
              {homeSettings?.scriptureSection?.quote ? (
                homeSettings.scriptureSection.highlight ? (
                  <>
                    {homeSettings.scriptureSection.quote.split(homeSettings.scriptureSection.highlight)[0]}
                    <span className="relative">
                      {homeSettings.scriptureSection.highlight}
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-fixed/30 -z-10"></div>
                    </span>
                    {homeSettings.scriptureSection.quote.split(homeSettings.scriptureSection.highlight)[1]}
                  </>
                ) : (
                  homeSettings.scriptureSection.quote
                )
              ) : (
                <>
                  "Then you will know which way to go, since you have <br className="hidden md:block"/>
                  <span className="relative">
                    never been this way before.
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-fixed/30 -z-10"></div>
                  </span>"
                </>
              )}
            </blockquote>
            <cite className="block text-xl font-body text-white/80 not-italic tracking-[0.3em] uppercase text-sm font-bold">
              {homeSettings?.scriptureSection?.source || "— Joshua 3:4"}
            </cite>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-32 bg-surface overflow-hidden relative">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary-fixed rounded-full blur-[120px] opacity-30 -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-12 max-w-[1600px] mb-20 text-right">
          <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-8 block font-bold">Voices From the Sanctuary</span>
          <h2 className="text-5xl md:text-7xl leading-tight tracking-tighter font-headline">
            {homeSettings?.testimonialsSection?.title ? (
              homeSettings.testimonialsSection.title.includes("Saying.") ? (
                <>What They're <span className="italic text-secondary serif">Saying.</span></>
              ) : (
                homeSettings.testimonialsSection.title
              )
            ) : (
              <>What They're <span className="italic text-secondary serif">Saying.</span></>
            )}
          </h2>
        </div>
        <Marquee testimonials={displayTestimonials} />
      </section>

      {/* Events Grid */}
      <section className="py-32 bg-surface-container-low relative">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-3xl">
              <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-8 block font-bold">Community Gatherings</span>
              <h2 className="text-5xl md:text-7xl leading-tight tracking-tighter font-headline">
                {homeSettings?.eventsSection?.title ? (
                  homeSettings.eventsSection.title.includes("Moments.") ? (
                    <>Upcoming <span className="italic text-secondary serif">Moments.</span></>
                  ) : (
                    homeSettings.eventsSection.title
                  )
                ) : (
                  <>Upcoming <span className="italic text-secondary serif">Moments.</span></>
                )}
              </h2>
            </div>
            <p className="text-xl text-on-surface-variant max-w-md font-body leading-relaxed mb-4">
              {homeSettings?.eventsSection?.description || "Mark the moments shaping this season of outreach, vision, and bold forward movement for the ministry community."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardEvents.map((event: EventItem) => (
              <div key={event._id} className="bg-surface-container-lowest rounded-[2.5rem] overflow-hidden transition-all duration-500 group hover:translate-y-[-8px] hover:shadow-[0_48px_80px_-20px_rgba(140,112,119,0.15)] flex flex-col">
                <div className="relative h-56 overflow-hidden rounded-t-[2.5rem]">
                  <Image 
                    src={getEventImageSrc(event)}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-[11px] font-label font-bold uppercase tracking-[0.28em] shadow-sm ${event.color === 'tertiary' ? 'text-tertiary' : 'text-primary'}`}>
                        {event.category || 'Event'}
                      </span>
                      <span className={`flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-white/70 shadow-lg ${event.color === 'tertiary' ? 'text-tertiary shadow-tertiary/10' : 'text-primary shadow-primary/10'}`}>
                        <span className="material-symbols-outlined text-[2rem]">{event.icon || 'calendar_today'}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000 ${event.color === 'tertiary' ? 'bg-tertiary-fixed/20' : 'bg-secondary-fixed/20'}`}></div>
                  <div className={`flex items-center gap-3 font-bold mb-6 ${event.color === 'tertiary' ? 'text-tertiary' : 'text-secondary'}`}>
                    <span className="material-symbols-outlined text-xl">{event.icon || 'event'}</span>
                    <span className="text-xs font-label uppercase tracking-[0.25em]">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-5 leading-tight tracking-tight font-headline">{event.title}</h3>
                  {event.subtitle && <p className="text-sm font-label uppercase tracking-[0.22em] text-secondary mb-5">{event.subtitle}</p>}
                  <p className="text-base text-on-surface-variant mb-10 flex-grow leading-relaxed font-body">
                    {event.description}
                  </p>
                  <a href={event.slug ? `/events/${event.slug}` : "/contact"} className="block w-full">
                    <button className="bg-surface-container text-on-surface px-8 py-4 rounded-2xl font-bold text-base hover:bg-surface-container-high transition-colors w-full">
                      View Event Details
                    </button>
                  </a>
                </div>
              </div>
            ))}


            {/* Featured Theme */}
            <div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden transition-all duration-500 group hover:shadow-[0_64px_120px_-24px_rgba(20,40,20,0.25)] min-h-[420px] flex items-end">
              {featuredTheme.image?.asset?._ref ? (
                <>
                  <Image 
                    src={urlFor(featuredTheme.image).url()}
                    alt={featuredTheme.title}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,31,15,0.92),rgba(20,54,25,0.8)_45%,rgba(34,139,34,0.65)_100%)]"></div>
                </>
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,31,15,0.94),rgba(20,54,25,0.85)_45%,rgba(34,139,34,0.82)_100%)] transition-transform duration-[2000ms] group-hover:scale-105"></div>
              )}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_15%_20%,rgba(255,217,227,0.18),transparent_22%)]"></div>
              <div className="absolute right-10 top-10 hidden md:flex h-40 w-40 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-[11px] font-label uppercase tracking-[0.28em] text-[#ecd28b]">Theme</div>
                  <div className="mt-3 text-3xl font-headline tracking-tight text-white">{featuredTheme.themeYear || "2026"}</div>
                </div>
              </div>
              <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 w-full text-white">
                <div>
                  <div className="flex items-center gap-3 text-[#ecd28b] font-bold mb-6">
                    <span className="material-symbols-outlined text-xl">near_me</span>
                    <span className="text-xs font-label uppercase tracking-[0.25em]">{featuredTheme.subtitle || "Organization Theme"}</span>
                    <span className="ml-2 px-3 py-1 rounded-full bg-[#ecd28b] text-black text-[10px] font-label font-bold uppercase tracking-widest">Featured</span>
                  </div>
                  <h3 className="text-4xl md:text-7xl mb-5 leading-[0.95] tracking-tighter font-headline">
                    {featuredTheme.italicTitle ? (
                      <>
                        {featuredTheme.title.replace(featuredTheme.italicTitle, '')}
                        <span className="italic text-[#ecd28b]">{featuredTheme.italicTitle}</span>
                      </>
                    ) : (
                      featuredTheme.title
                    )}
                  </h3>
                  <p className="text-lg text-white/80 max-w-2xl leading-relaxed font-body whitespace-pre-line">
                    {featuredTheme.description}
                  </p>
                  <p className="mt-5 text-xs font-label uppercase tracking-[0.28em] text-white/65">{featuredTheme.scripture}</p>
                </div>
                <div className="shrink-0">
                  <button className="bg-[#ecd28b] text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-2xl shadow-yellow-900/20 whitespace-nowrap">
                    {featuredTheme.buttonText || "Embrace The Theme"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
