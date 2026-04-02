import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="py-16 md:py-24 signature-gradient relative overflow-hidden text-center text-on-primary shadow-[0_64px_128px_-24px_rgba(179,10,98,0.35)] group">
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-fixed rounded-full blur-[80px] md:blur-[120px] opacity-20 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

      <div className="container mx-auto px-5 md:px-12 max-w-[1600px] relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-7xl leading-[1.05] mb-5 md:mb-8 tracking-tighter font-headline">
          <span className="serif text-white">Take The Next</span>{" "}
          <span className="italic serif text-primary-fixed">Step.</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-xl mx-auto font-body leading-relaxed opacity-90 text-white/90">
          Weekly gatherings that refresh the soul and sharpen the mind. You don't have to walk this path alone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <Link href="/livestream">
            <button className="touch-press no-select bg-white text-primary w-full sm:w-auto px-10 py-4 rounded-full text-base md:text-lg font-bold active:scale-95 transition-all duration-300 shadow-xl">
              Join Gathering
            </button>
          </Link>
          <Link href="/contact">
            <button className="touch-press no-select bg-primary-container/20 text-white w-full sm:w-auto px-10 py-4 rounded-full text-base md:text-lg font-bold hover:bg-primary-container/40 transition-colors border border-white/30 backdrop-blur-sm active:scale-95">
              Get Reminders
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
