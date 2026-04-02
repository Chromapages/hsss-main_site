import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { aboutSectionQuery } from "@/sanity/lib/queries";
import type { HomeAboutData } from "@/lib/constants";

export default async function AboutSection() {
  const aboutData = await client.fetch<HomeAboutData>(aboutSectionQuery);
  const lqip = aboutData?.image?.asset?.metadata?.lqip;

  return (
    <section className="py-16 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-4/5 bg-surface-container-low -z-10 rounded-l-[60px] md:rounded-l-[100px]"></div>
      <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center">

          {/* Image */}
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/3] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl relative z-10 group">
              <Image
                src={aboutData?.image?.asset?.url ? aboutData.image.asset.url : "https://lh3.googleusercontent.com/aida-public/AB6AXuAs0ig0bDF0pIEaZwEb5-S1VaQvqIOjQgr3o4GIrHHMOZffcrUFUbWEsvz_9tPS0pgNfDQxu8SoYa1y5A7cnjOnOv3wtNL_IZNXFrE18nuhqPLRaGdnhWh3bHSqUyBkw_AXYdqjyBF1LUbC_x7GPRnwnq3iJMH2nQawkGnWaYiBGE28XD4YlluduCvG1FKNqdzKsbKrrnJI5UJiu_McpDzo65lebrBwP5y0uz2fTTjuAEdm81WcGdABWILo0yZ1HDMFjTBoeR5Y8g"}
                alt={aboutData?.title || "Sacred Study"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder={lqip ? "blur" : "empty"}
                blurDataURL={lqip}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-40 h-40 md:w-64 md:h-64 bg-secondary-fixed opacity-30 blur-3xl -z-10 animate-pulse"></div>
          </div>

          {/* Content card */}
          <div className="md:col-span-6 md:-ml-32 z-20">
            <div className="bg-surface-container-lowest p-7 md:p-12 lg:p-16 rounded-[1.75rem] md:rounded-[2.5rem] shadow-[0_48px_80px_-16px_rgba(140,112,119,0.08)]">
              <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-10 leading-[1.1] tracking-tight font-headline">
                {aboutData?.title || "Built for His Purpose."} <br />
                <span className="italic text-secondary serif">{aboutData?.italicTitle || "Designed for You."}</span>
              </h2>
              <div className="space-y-5 md:space-y-8 text-base md:text-lg lg:text-xl text-on-surface-variant leading-relaxed font-body whitespace-pre-line">
                {aboutData?.content ? (
                  aboutData.content
                ) : (
                  <>
                    <p>
                      HE SAID she said, is a faith-based navigation system designed to guide him and her into wholeness — spirit, soul, and body. We help men and women move beyond the ideologies and distorted perspectives shaped by their environment.
                    </p>
                    <p>
                      Through that alignment, each person is equipped — not just inspired — to build practical strategies that transform themselves and the world around them.
                    </p>
                    <p className="hidden md:block">
                      We meet you where you are. Through virtual coaching sessions, community gatherings, and mental health referral services, HE SAID she said walks alongside you every step of the journey.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-8 md:mt-16 pt-6 md:pt-12 border-t border-outline-variant/10 grid grid-cols-2 gap-6 md:gap-12">
                {(aboutData?.stats && aboutData.stats.length > 0) ? (
                  aboutData.stats.map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="text-3xl md:text-5xl font-headline text-primary mb-1 md:mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">{stat.value}</div>
                      <div className="text-[10px] md:text-xs font-label uppercase tracking-[0.2em] text-outline font-bold">{stat.label}</div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="group">
                      <div className="text-3xl md:text-5xl font-headline text-primary mb-1 md:mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">500+</div>
                      <div className="text-[10px] md:text-xs font-label uppercase tracking-[0.2em] text-outline font-bold">Soul Journers</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl md:text-5xl font-headline text-primary mb-1 md:mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">Daily</div>
                      <div className="text-[10px] md:text-xs font-label uppercase tracking-[0.2em] text-outline font-bold">Divine Connection</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
