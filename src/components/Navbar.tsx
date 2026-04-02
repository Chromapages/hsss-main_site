"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Livestream", href: "/livestream" },
    { name: "Coaching", href: "/coaching" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-variant/10 shadow-sm">
        <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1600px] mx-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/hsss-logo.svg"
              alt="He Said She Said Ministries"
              width={36}
              height={36}
              className="h-9 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-label font-bold tracking-tight transition-all duration-300 border-b-2 hover:text-primary ${
                  pathname === link.href
                    ? "text-primary border-primary"
                    : "text-on-surface/70 border-transparent hover:border-primary/20"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button className="signature-gradient text-on-primary px-8 py-3 rounded-full font-label font-bold tracking-tight hover:scale-95 duration-300 transition-all shadow-lg shadow-primary/20">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary flex items-center justify-center w-10 h-10 rounded-xl hover:bg-surface-container transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile drawer backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-surface shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/10">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <Image src="/hsss-logo.svg" alt="HSSS" width={28} height={28} className="h-7 w-auto" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-on-surface/50 hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-label font-bold transition-all duration-200 ${
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface/70 hover:bg-surface-container hover:text-on-surface"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-outline-variant/10">
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="signature-gradient text-on-primary w-full py-4 rounded-2xl font-label font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
              Contact
            </button>
          </Link>
          <p className="text-center text-xs text-on-surface/30 font-label mt-6 tracking-widest uppercase">
            He Said She Said Ministries
          </p>
        </div>
      </div>
    </>
  );
}
