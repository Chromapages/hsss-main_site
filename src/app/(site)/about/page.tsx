import Image from "next/image";
import type { Metadata } from "next";
import FooterCTA from "@/components/FooterCTA";
import { client } from "@/sanity/lib/client";
import { aboutSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

export const metadata: Metadata = {
  title: "About | He Said She Said Ministries",
  description: "Learn the vision, values, and founder's story behind He Said She Said Ministries — a faith-based movement helping men and women align their lives with God's purpose.",
  openGraph: {
    title: "About HSSS Ministries",
    description: "The story behind He Said She Said Ministries and the heart of its founder, Andrea.",
    url: "https://hsss-ministries.org/about",
  },
};

type AboutSettings = {
  _id?: string;
  originSection?: {
    title?: string;
    italicTitle?: string;
    description?: string;
    image?: SanityImage;
  };
  founderSection?: {
    badge?: string;
    title?: string;
    italicTitle?: string;
    description?: string;
    image?: SanityImage;
    ctaLabel?: string;
    ctaLink?: string;
  };
  pillarsSection?: {
    title?: string;
    italicTitle?: string;
    pillars?: Array<{
      title?: string;
      description?: string;
      icon?: string;
      color?: string;
    }>;
  };
  ctaSection?: {
    title?: string;
    italicTitle?: string;
    description?: string;
    buttonLabel?: string;
    buttonLink?: string;
  };
};

export default async function About() {
  const aboutSettings = await client.fetch<AboutSettings>(aboutSettingsQuery);
  const origin = aboutSettings?.originSection;
  const founder = aboutSettings?.founderSection;
  const pillarsNav = aboutSettings?.pillarsSection;
  const cta = aboutSettings?.ctaSection;

  const defaultPillars = [
    { title: "Wholeness", description: "Spirit, soul, and body in perfect alignment with God's vision.", icon: "spa", color: "primary" },
    { title: "Equipping", description: "Practical strategies and coaching to navigate your specific journey.", icon: "construction", color: "secondary" },
    { title: "Community", description: "A safe digital sanctuary to connect, study, and grow together.", icon: "groups", color: "tertiary" },
  ];

  const pillars = (pillarsNav?.pillars && pillarsNav.pillars.length > 0) ? pillarsNav.pillars : defaultPillars;

  return (
    <div className="flex flex-col min-h-screen pt-4 md:pt-24">

      {/* Origin Section */}
      <section className="py-14 md:py-24 bg-surface-container-low">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="space-y-6 md:space-y-10 text-base md:text-xl text-on-surface-variant font-body leading-relaxed">
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-on-surface font-headline leading-tight tracking-tighter">
                {origin?.title || "Drop the World's Narrative."}{" "}
                <span className="text-primary italic serif block md:inline">{origin?.italicTitle || "Pursue the Mind of Christ."}</span>
              </h1>
              <div className="space-y-4 md:space-y-6">
                {origin?.description ? (
                  origin.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))
                ) : (
                  <>
                    <p>
                      He Said She Said Ministries was born out of a desire to see men and women live in the fullness of their identity. For too long, we've allowed our environment, our failures, and even our successes to define who we are.
                    </p>
                    <p>
                      We believe that true transformation happens when we align our thoughts with His Word. When we do, we don't just change our behavior; we change our nature.
                    </p>
                    <p className="hidden md:block">
                      Our mission is to provide a sanctuary for this alignment through teaching, community, and coaching.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-square rounded-[1.75rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src={origin?.image ? urlFor(origin.image).url() : "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop"}
                  alt="Gathering"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-36 h-36 md:w-48 md:h-48 bg-primary opacity-20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-14 md:py-32 bg-surface">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="text-center mb-10 md:mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-8 tracking-tight font-headline">
              {pillarsNav?.title || "The Three Pillars"}{" "}
              <span className="italic text-secondary serif">{pillarsNav?.italicTitle || "of our Work."}</span>
            </h2>
          </div>
          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 md:gap-12 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 scroll-fade-right md:overflow-visible">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start p-7 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] bg-surface-container-lowest border border-outline-variant/5 shadow-sm group card-interactive"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-surface-container flex items-center justify-center mb-5 md:mb-8 text-${pillar.color || "primary"} transition-transform duration-500 group-hover:rotate-6`}>
                  <span className="material-symbols-outlined text-2xl md:text-3xl">{pillar.icon || "spa"}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-headline mb-3 md:mb-4">{pillar.title || "Pillar"}</h3>
                <p className="text-sm md:text-base text-on-surface-variant font-body leading-relaxed">
                  {pillar.description || "Learn how this pillar supports alignment, growth, and transformation."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-14 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px] text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline leading-tight tracking-tight">
              {cta?.title || "Ready to"}{" "}
              <span className="italic text-primary serif">{cta?.italicTitle || "Start Your Alignment?"}</span>
            </h2>
            <p className="text-base md:text-xl text-on-surface-variant font-body leading-relaxed">
              {cta?.description || "Don't wait for \"someday\" to find clarity. Join us this Tuesday at 5:45 AM for a sacred time of prayer and intercession. No signup needed — just bring your heart."}
            </p>
            <div className="pt-2 md:pt-4">
              <a href={cta?.buttonLink || "/livestream"}>
                <button className="touch-press no-select signature-gradient text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-2xl active:scale-95 transition-all duration-300">
                  {cta?.buttonLabel || "Join the Next Prayer Call"}
                </button>
              </a>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary opacity-10 blur-[80px] md:blur-[100px] -z-10 animate-pulse"></div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-14 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative order-1 lg:order-1">
              <div className="aspect-[4/3] md:aspect-[4/5] rounded-[1.75rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white/50 group">
                <Image
                  src={founder?.image ? urlFor(founder.image).url() : "/profile_image.png"}
                  alt="Andrea - HSSS Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-40 h-40 md:w-64 md:h-64 bg-primary opacity-10 blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-40 h-40 md:w-64 md:h-64 bg-secondary opacity-10 blur-3xl -z-10 animate-pulse delay-700"></div>
            </div>

            <div className="space-y-7 md:space-y-10 order-2 lg:order-2">
              <div className="space-y-3 md:space-y-4">
                <span className="text-primary font-label tracking-[0.3em] uppercase text-xs block font-bold">
                  {founder?.badge || "Healer | Speaker | Founder"}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-headline leading-tight">
                  {founder?.title || "Healing Hands:"}{" "}
                  <span className="italic text-primary serif">{founder?.italicTitle || "The Founder's Journey."}</span>
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6 text-base md:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
                {founder?.description ? (
                  founder.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))
                ) : (
                  <>
                    <p>
                      In 2012, God gave Andrea a dream — she was curled in a fetal position, her hands covered in cuts. A man in the dream said, "You can't talk to people with your hands cut, you'll bleed all over them."
                    </p>
                    <p>
                      Those cuts represented her own wounds — sexual molestation, fear, low self-esteem, depression, and unforgiveness. Through prayer, fasting, and Christian counseling, she discovered that healing from those wounds was essential to truly helping others.
                    </p>
                    <p className="hidden md:block">
                      Out of that journey, HE SAID she said was born — a movement dedicated to helping women and men heal, find freedom, and walk fully in their God-given purpose.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-2">
                <a href={founder?.ctaLink || "/coaching"}>
                  <button className="touch-press no-select signature-gradient text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-primary/20 active:scale-95 transition-all duration-300">
                    {founder?.ctaLabel || "Explore Coaching with Andrea"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
