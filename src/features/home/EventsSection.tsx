import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { eventsQuery, homeSettingsQuery } from "@/sanity/lib/queries";
import { FALLBACK_EVENTS, type EventItem } from "@/lib/constants";

export default async function EventsSection() {
  const [events, homeSettings] = await Promise.all([
    client.fetch<EventItem[]>(eventsQuery),
    client.fetch<any>(homeSettingsQuery),
  ]);

  const displayEventsRaw = events?.length > 0 ? events : FALLBACK_EVENTS;
  const standardEvents = displayEventsRaw.filter((e: any) => !e.isFeaturedTheme);
  const featuredTheme = displayEventsRaw.find((e: any) => e.isFeaturedTheme) || {
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

  const getEventImageSrc = (event: EventItem) =>
    event.image?.asset?.url ? event.image.asset.url : event.staticImage || "/giveaway-hsss.avif";

  return (
    <section className="py-16 md:py-32 bg-surface-container-low relative">
      <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-24 gap-5 md:gap-10">
          <div className="max-w-3xl">
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-4 md:mb-8 block font-bold">Community Gatherings</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tighter font-headline">
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
          <p className="text-base md:text-xl text-on-surface-variant max-w-md font-body leading-relaxed">
            {homeSettings?.eventsSection?.description || "Mark the moments shaping this season of outreach, vision, and bold forward movement for the ministry community."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {standardEvents.map((event: EventItem) => {
            const lqip = event.image?.asset?.metadata?.lqip;
            return (
              <div key={event._id} className="bg-surface-container-lowest rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden card-interactive flex flex-col">
                <div className="relative h-44 md:h-56 overflow-hidden rounded-t-[1.5rem] md:rounded-t-[2.5rem]">
                  <Image
                    src={getEventImageSrc(event)}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder={lqip ? "blur" : "empty"}
                    blurDataURL={lqip}
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex items-center rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-label font-bold uppercase tracking-[0.25em] shadow-sm ${event.color === 'tertiary' ? 'text-tertiary' : 'text-primary'}`}>
                        {event.category || 'Event'}
                      </span>
                      <span className={`flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-[1.25rem] md:rounded-[1.5rem] bg-white/70 shadow-lg ${event.color === 'tertiary' ? 'text-tertiary shadow-tertiary/10' : 'text-primary shadow-primary/10'}`}>
                        <span className="material-symbols-outlined text-xl md:text-[2rem]">{event.icon || 'calendar_today'}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-grow relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -z-10 ${event.color === 'tertiary' ? 'bg-tertiary-fixed/20' : 'bg-secondary-fixed/20'}`}></div>
                  <div className={`flex items-center gap-2 md:gap-3 font-bold mb-3 md:mb-6 ${event.color === 'tertiary' ? 'text-tertiary' : 'text-secondary'}`}>
                    <span className="material-symbols-outlined text-lg md:text-xl">{event.icon || 'event'}</span>
                    <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.25em]">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-5 leading-tight tracking-tight font-headline">{event.title}</h3>
                  {event.subtitle && <p className="text-xs md:text-sm font-label uppercase tracking-[0.22em] text-secondary mb-3 md:mb-5">{event.subtitle}</p>}
                  <p className="text-sm md:text-base text-on-surface-variant mb-6 md:mb-10 flex-grow leading-relaxed font-body">
                    {event.description}
                  </p>
                  <a href={event.slug ? `/events/${event.slug}` : "/contact"} className="block w-full touch-press">
                    <button className="bg-surface-container text-on-surface px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-surface-container-high transition-colors w-full active:scale-[0.98]">
                      View Event Details
                    </button>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Featured Theme — full width */}
          <div className="md:col-span-2 relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden card-interactive min-h-[320px] md:min-h-[420px] flex items-end">
            {(featuredTheme as any).image?.asset?.url ? (
              <>
                <Image
                  src={(featuredTheme as any).image.asset.url}
                  alt={featuredTheme.title}
                  fill
                  sizes="100vw"
                  placeholder={(featuredTheme as any).image?.asset?.metadata?.lqip ? "blur" : "empty"}
                  blurDataURL={(featuredTheme as any).image?.asset?.metadata?.lqip}
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,31,15,0.92),rgba(20,54,25,0.8)_45%,rgba(34,139,34,0.65)_100%)]"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,31,15,0.94),rgba(20,54,25,0.85)_45%,rgba(34,139,34,0.82)_100%)]"></div>
            )}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_15%_20%,rgba(255,217,227,0.18),transparent_22%)]"></div>
            <div className="absolute right-6 top-6 hidden md:flex h-32 md:h-40 w-32 md:w-40 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-[11px] font-label uppercase tracking-[0.28em] text-[#ecd28b]">Theme</div>
                <div className="mt-2 md:mt-3 text-2xl md:text-3xl font-headline tracking-tight text-white">{featuredTheme.themeYear || "2026"}</div>
              </div>
            </div>
            <div className="relative z-10 p-7 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 w-full text-white">
              <div>
                <div className="flex items-center gap-2 md:gap-3 text-[#ecd28b] font-bold mb-4 md:mb-6">
                  <span className="material-symbols-outlined text-lg md:text-xl">near_me</span>
                  <span className="text-[10px] md:text-xs font-label uppercase tracking-[0.25em]">{featuredTheme.subtitle || "Organization Theme"}</span>
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-[#ecd28b] text-black text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest">Featured</span>
                </div>
                <h3 className="text-3xl md:text-5xl lg:text-7xl mb-3 md:mb-5 leading-[0.95] tracking-tighter font-headline">
                  {featuredTheme.italicTitle ? (
                    <>
                      {featuredTheme.title.replace(featuredTheme.italicTitle, '')}
                      <span className="italic text-[#ecd28b]">{featuredTheme.italicTitle}</span>
                    </>
                  ) : (
                    featuredTheme.title
                  )}
                </h3>
                <p className="text-sm md:text-lg text-white/80 max-w-2xl leading-relaxed font-body line-clamp-3 md:line-clamp-none whitespace-pre-line">
                  {featuredTheme.description}
                </p>
                <p className="mt-3 md:mt-5 text-[10px] md:text-xs font-label uppercase tracking-[0.28em] text-white/65">{featuredTheme.scripture}</p>
              </div>
              <div className="shrink-0">
                <button className="touch-press bg-[#ecd28b] text-black px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg active:scale-[0.97] transition-all duration-300 shadow-2xl shadow-yellow-900/20 whitespace-nowrap">
                  {featuredTheme.buttonText || "Embrace The Theme"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
