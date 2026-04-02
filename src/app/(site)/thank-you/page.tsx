import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

export default function ThankYou() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="flex-grow flex items-center justify-center py-32 bg-surface">
        <div className="container mx-auto px-12 max-w-4xl text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-12 animate-in fade-in zoom-in duration-700">
            <span className="material-symbols-outlined text-5xl">favorite</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline mb-8 leading-tight tracking-tight">
            Thank You for <br/><span className="text-primary italic serif">Connecting.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed mb-16 max-w-2xl mx-auto">
            Your message has been received with peace. We are grateful for your interest in HE SAID she said and will be in touch shortly.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Link href="/livestream">
              <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary/30 transition-all group text-left h-full">
                <span className="material-symbols-outlined text-primary mb-4 block">videocam</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Join Morning Prayer</h3>
                <p className="text-on-surface-variant text-sm font-body">Our Zoom calls happen every Tuesday at 5:45 AM EST. No signup needed.</p>
              </div>
            </Link>
            
            <Link href="/about">
              <div className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 hover:border-secondary/30 transition-all group text-left h-full">
                <span className="material-symbols-outlined text-secondary mb-4 block">auto_stories</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Explore Our Story</h3>
                <p className="text-on-surface-variant text-sm font-body">Learn more about the vision and the hearts behind this ministry.</p>
              </div>
            </Link>
          </div>
          
          <div className="mt-20">
            <Link href="/" className="text-on-surface/40 hover:text-primary font-label uppercase tracking-widest text-xs font-bold transition-colors">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
      
      <FooterCTA />
    </div>
  );
}
