"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/", icon: "home" },
  { name: "About", href: "/about", icon: "favorite" },
  { name: "Live", href: "/livestream", icon: "live_tv" },
  { name: "Coaching", href: "/coaching", icon: "self_improvement" },
  { name: "Contact", href: "/contact", icon: "mail" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-xl border-b border-surface-variant/10 shadow-sm"
            : "bg-surface/80 backdrop-blur-xl border-b border-surface-variant/10 shadow-sm"
        }`}
      >
        <nav className="flex justify-between items-center px-5 md:px-12 py-3.5 md:py-4 max-w-[1600px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group touch-press no-select">
            <Image
              src="/hsss-logo.svg"
              alt="He Said She Said Ministries"
              width={34}
              height={34}
              className="h-8 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-sm font-logo font-bold text-primary hidden sm:block md:hidden lg:block">
              HSSS Ministries
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.filter(link => link.name !== "Contact").map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-label font-bold tracking-tight transition-all duration-300 border-b-2 hover:text-primary ${
                  pathname === link.href
                    ? "text-primary border-primary"
                    : "text-on-surface/70 border-transparent hover:border-primary/20"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button className="signature-gradient text-on-primary px-7 py-3 rounded-full font-label font-bold tracking-tight hover:scale-95 duration-300 transition-all shadow-lg shadow-primary/20 touch-press no-select">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile: hamburger hidden — using bottom nav instead */}
          {/* But keep a subtle icon for extra quick-access on mobile */}
        </nav>
      </header>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bottom-nav bg-surface/95 backdrop-blur-xl border-t border-outline-variant/15 shadow-[0_-8px_32px_-8px_rgba(140,112,119,0.18)] no-select"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-stretch justify-around px-1">
          {navLinks.map((link) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-0.5 py-2.5 px-2 flex-1 min-w-0 touch-press transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-on-surface/45"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`material-symbols-outlined text-[22px] leading-none transition-all duration-200 ${
                    isActive
                      ? "text-primary [font-variation-settings:'FILL'_1,'wght'_500,'GRAD'_0,'opsz'_24]"
                      : "[font-variation-settings:'FILL'_0,'wght'_300,'GRAD'_0,'opsz'_24]"
                  }`}
                >
                  {link.icon}
                </span>
                {/* Active indicator pill */}
                {isActive && (
                  <span className="block w-8 h-0.5 rounded-full bg-primary mt-0.5" />
                )}
                {!isActive && (
                  <span className="block w-0 h-0.5 mt-0.5" />
                )}
                <span className={`text-[10px] font-label font-bold tracking-wide leading-none ${
                  isActive ? "text-primary" : "text-on-surface/40"
                }`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
