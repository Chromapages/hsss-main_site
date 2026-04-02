import Image from "next/image";
import type { Metadata } from "next";
import FooterCTA from "@/components/FooterCTA";
import type { Image as SanityImage } from "sanity";
import { client } from "@/sanity/lib/client";
import { aboutSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

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
    { title: "Community", description: "A safe digital sanctuary to connect, study, and grow together.", icon: "groups", color: "tertiary" }
  ];

  const pillars = (pillarsNav?.pillars && pillarsNav.pillars.length > 0) ? pillarsNav.pillars : defaultPillars;

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Origin Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 text-xl text-on-surface-variant font-body leading-relaxed">
              <h1 className="text-5xl md:text-7xl text-on-surface font-headline leading-tight tracking-tighter">
                {origin?.title || "Drop the World's Narrative."} <br/>
                <span className="text-primary italic serif">{origin?.italicTitle || "Pursue the Mind of Christ."}</span>
              </h1>
              <div className="space-y-6">
                {origin?.description ? (
                  origin.description.split('\n\n').map((para, i) => (
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
                    <p>
                      Our mission is to provide a sanctuary for this alignment through teaching, community, and coaching.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <Image 
                  src={origin?.image ? urlFor(origin.image).url() : "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop"}
                  alt="Gathering"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary opacity-20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl mb-8 tracking-tight font-headline">
              {pillarsNav?.title || "The Three Pillars"} <br/>
              <span className="italic text-secondary serif">{pillarsNav?.italicTitle || "of our Work."}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, i) => (
              <div key={i} className="p-12 rounded-[2.5rem] bg-surface-container-lowest border border-outline-variant/5 shadow-sm group hover:shadow-xl transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-8 text-${pillar.color || 'primary'} transition-transform duration-500 group-hover:rotate-6`}>
                  <span className="material-symbols-outlined text-3xl">{pillar.icon || 'spa'}</span>
                </div>
                <h3 className="text-2xl font-headline mb-4">{pillar.title || 'Pillar'}</h3>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  {pillar.description || "Learn how this pillar supports alignment, growth, and transformation."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-12 max-w-[1600px] text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-5xl font-headline leading-tight tracking-tight">
              {cta?.title || "Ready to"} <span className="italic text-primary serif">{cta?.italicTitle || "Start Your Alignment?"}</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-body leading-relaxed">
              {cta?.description || "Don't wait for \"someday\" to find clarity. Join us this Tuesday at 5:45 AM for a sacred time of prayer and intercession. No signup needed—just bring your heart."}
            </p>
            <div className="pt-4">
              <a href={cta?.buttonLink || "/livestream"}>
                <button className="signature-gradient text-on-primary px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300">
                  {cta?.buttonLabel || "Join the Next Prayer Call"}
                </button>
              </a>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 blur-[100px] -z-10 animate-pulse"></div>
        </div>
      </section>
      {/* About the Founder Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white/50 group">
                <Image 
                  src={founder?.image ? urlFor(founder.image).url() : "/profile_image.png"}
                  alt="Andrea - HSSS Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary opacity-10 blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary opacity-10 blur-3xl -z-10 animate-pulse delay-700"></div>
            </div>
            
            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-primary font-label tracking-[0.3em] uppercase text-xs block font-bold">
                  {founder?.badge || "Healer | Speaker | Founder"}
                </span>
                <h2 className="text-5xl md:text-7xl font-headline leading-tight">
                  {founder?.title || "Healing Hands:"} <br/>
                  <span className="italic text-primary serif">{founder?.italicTitle || "The Founder's Journey."}</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
                {founder?.description ? (
                  founder.description.split('\n\n').map((para, i) => (
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
                    <p>
                      Out of that journey, HE SAID she said was born — a movement dedicated to helping women and men heal, find freedom, and walk fully in their God-given purpose.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-4">
                <a href={founder?.ctaLink || "/coaching"}>
                  <button className="signature-gradient text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-[1.03] transition-all duration-300">
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
