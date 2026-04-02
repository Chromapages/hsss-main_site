import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { homeSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function ScriptureSection() {
  const homeSettings = await client.fetch<any>(homeSettingsQuery);
  const scripture = homeSettings?.scriptureSection;
  const bgImage = scripture?.backgroundImage?.asset?.url || "/assets/scripture_bg.png";
  const lqip = scripture?.backgroundImage?.asset?.metadata?.lqip;

  return (
    <section className="py-24 relative overflow-hidden bg-surface min-h-[600px] flex items-center">
      <Image
        src={bgImage}
        alt="Scripture Background"
        fill
        className="object-cover"
        placeholder={lqip ? "blur" : "empty"}
        blurDataURL={lqip}
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-[#1c1b1b]/50 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-12 max-w-5xl relative z-10">
        <div className="text-center">
          <span className="material-symbols-outlined text-primary-fixed text-7xl opacity-50 block mb-10">format_quote</span>
          <blockquote className="text-[2.5rem] md:text-[4.5rem] leading-[1.1] text-white serif tracking-tight mb-12 relative drop-shadow-xl font-headline">
            {scripture?.quote ? (
              scripture.highlight ? (
                <>
                  {scripture.quote.split(scripture.highlight)[0]}
                  <span className="relative">
                    {scripture.highlight}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-fixed/30 -z-10"></div>
                  </span>
                  {scripture.quote.split(scripture.highlight)[1]}
                </>
              ) : (
                scripture.quote
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
            {scripture?.source || "— Joshua 3:4"}
          </cite>
        </div>
      </div>
    </section>
  );
}
