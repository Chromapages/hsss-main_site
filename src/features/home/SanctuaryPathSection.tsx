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
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-12 max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-6 block font-bold">The Sanctuary Path</span>
            <h2 className="text-5xl md:text-7xl leading-tight tracking-tighter font-headline">
              {homeSettings?.sanctuaryPath?.title
                ? homeSettings.sanctuaryPath.title
                : <>Your Next <span className="italic text-secondary serif">Step.</span></>}
            </h2>
          </div>
          <p className="text-xl text-on-surface-variant max-w-md font-body leading-relaxed">
            {homeSettings?.sanctuaryPath?.description || "Discover the path tailored for your current season of growth and spiritual exploration."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayNextStepCards.map((card) => {
            const theme = (NEXT_STEP_THEME_MAP as any)[card.colorTheme] || NEXT_STEP_THEME_MAP.primary;

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
                <div className="mt-last border-t border-outline-variant/10 pt-8 mt-auto">
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
  );
}
