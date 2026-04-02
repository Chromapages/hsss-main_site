import Marquee from "@/components/Marquee";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery, homeSettingsQuery } from "@/sanity/lib/queries";
import { FALLBACK_TESTIMONIALS, type Testimonial } from "@/lib/constants";

export default async function TestimonialsSection() {
  const [testimonials, homeSettings] = await Promise.all([
    client.fetch<Testimonial[]>(testimonialsQuery),
    client.fetch<any>(homeSettingsQuery),
  ]);

  const displayTestimonials = testimonials?.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;

  return (
    <section className="py-16 md:py-32 bg-surface overflow-hidden relative">
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-fixed rounded-full blur-[80px] md:blur-[120px] opacity-30 -z-10 pointer-events-none"></div>
      <div className="container mx-auto px-5 md:px-12 max-w-[1600px] mb-10 md:mb-20 text-right">
        <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-4 md:mb-8 block font-bold">Voices From the Sanctuary</span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tighter font-headline">
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
  );
}
