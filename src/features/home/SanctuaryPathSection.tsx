import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { nextStepCardsQuery, homeSettingsQuery } from "@/sanity/lib/queries";
import { FALLBACK_NEXT_STEPS, NEXT_STEP_THEME_MAP, type NextStepCard } from "@/lib/constants";
import type { ReactNode } from "react";

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

export default async function SanctuaryPathSection() {
  const [nextStepCards, homeSettings] = await Promise.all([
    client.fetch<NextStepCard[]>(nextStepCardsQuery),
    client.fetch<any>(homeSettingsQuery),
  ]);

  const displayNextStepCards = nextStepCards?.length > 0 ? nextStepCards : FALLBACK_NEXT_STEPS;

  return (
    <section className="py-16 md:py-32 bg-surface-container-low">
      <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-5 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-3 md:mb-6 block font-bold">The Sanctuary Path</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tighter font-headline">
              {homeSettings?.sanctuaryPath?.title
                ? homeSettings.sanctuaryPath.title
                : <>Your Next <span className="italic text-secondary serif">Step.</span></>}
            </h2>
          </div>
          <p className="text-base md:text-xl text-on-surface-variant max-w-md font-body leading-relaxed">
            {homeSettings?.sanctuaryPath?.description || "Discover the path tailored for your current season of growth and spiritual exploration."}
          </p>
        </div>

        {/* Cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 md:gap-10 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 scroll-fade-right md:overflow-visible">
          {displayNextStepCards.map((card) => {
            const theme = (NEXT_STEP_THEME_MAP as any)[card.colorTheme] || NEXT_STEP_THEME_MAP.primary;

            return (
              <div
                key={card._id || card.title}
                className="group flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start flex h-full flex-col rounded-[1.5rem] md:rounded-[2rem] bg-surface-container-lowest p-7 md:p-12 card-interactive"
              >
                <div className={`mb-6 md:mb-10 flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:rotate-6 ${theme.iconBg}`}>
                  <span className={`material-symbols-outlined text-2xl md:text-4xl ${theme.iconText}`}>
                    {card.icon}
                  </span>
                </div>
                <h3 className="mb-3 md:mb-4 text-2xl md:text-3xl tracking-tight font-headline">{card.title}</h3>
                {card.badgeText ? (
                  <div className={`mb-4 md:mb-6 inline-flex self-start rounded-full px-3 py-1 ${theme.badge}`}>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">
                        {card.badgeIcon || "schedule"}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest font-label">
                        {card.badgeText}
                      </span>
                    </span>
                  </div>
                ) : null}
                <p className="mb-4 text-sm md:text-lg leading-relaxed text-on-surface-variant font-body">
                  {card.description}
                </p>
                {card.meetingId ? (
                  <div className="mb-6 md:mb-10 rounded-xl border border-outline-variant/10 bg-surface-container-low p-3 md:p-4">
                    <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 font-label">
                      Meeting ID
                    </div>
                    <div className="font-mono text-base md:text-lg font-bold text-on-surface">
                      {card.meetingId}
                    </div>
                  </div>
                ) : null}
                <div className="mt-last border-t border-outline-variant/10 pt-6 md:pt-8 mt-auto">
                  <NextStepLink
                    href={card.ctaLink}
                    className={`group/link flex items-center gap-2 md:gap-3 text-base md:text-lg font-bold ${theme.cta}`}
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
  );
}
