"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Livestream", href: "/livestream" },
    { name: "Coaching", href: "/coaching" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const socialLinks = [
    { 
      name: "Facebook",
      href: "https://www.facebook.com/hsssministries", 
      label: "Follow us on Facebook",
      svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> 
    },
    { 
      name: "Instagram",
      href: "https://www.instagram.com/hsssministries", 
      label: "Follow us on Instagram",
      svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    { 
      name: "YouTube",
      href: "https://www.youtube.com/@hsssministries", 
      label: "Follow us on YouTube",
      svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> 
    },
    { 
      icon: "mail", 
      href: "mailto:hsssat@outlook.com", 
      label: "Email us" 
    },
    { 
      icon: "call", 
      href: "tel:8554743724", 
      label: "Call us" 
    },
  ];

  return (
    <footer className="bg-surface-container-low py-12 md:py-16 mt-auto has-bottom-nav">
      <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-5">
            <div className="mb-4 md:mb-8">
              <Link href="/" className="inline-block">
                <div className="font-logo font-bold text-xl md:text-2xl text-primary">
                  He Said She Said Ministries
                </div>
              </Link>
            </div>
            <p className="text-sm md:text-base text-on-surface-variant max-w-sm font-body leading-relaxed">
              Building a digital sanctuary for modern believers to connect, study, and grow together in grace.
            </p>

            {/* Newsletter Signup */}
            <div className="mt-8 md:mt-10 max-w-xs">
              <h4 className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface/40 font-bold mb-4">Join the Journey</h4>
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all placeholder:text-on-surface/30"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-on-primary rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                  aria-label="Subscribe"
                >
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </form>
              <p className="text-[10px] text-on-surface/30 mt-3 font-label italic">Weekly doses of grace, delivered to your inbox.</p>
            </div>

            {/* Social icons pinned to brand on mobile */}
            <div className="flex flex-wrap gap-2 mt-6 md:hidden">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-press w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm border border-outline-variant/10"
                >
                  {link.svg ? link.svg : <span className="material-symbols-outlined text-xl">{link.icon}</span>}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] md:text-xs font-label uppercase tracking-[0.2em] text-on-surface/40 font-bold mb-4 md:mb-8">Explore</h4>
            <ul className="space-y-3 md:space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm md:text-base text-on-surface/70 hover:text-primary transition-colors hover:underline underline-offset-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] md:text-xs font-label uppercase tracking-[0.2em] text-on-surface/40 font-bold mb-4 md:mb-8">Legal</h4>
            <ul className="space-y-3 md:space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm md:text-base text-on-surface/70 hover:text-primary transition-colors hover:underline underline-offset-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social — desktop only (mobile version is pinned to brand above) */}
          <div className="hidden md:block md:col-span-3">
            <h4 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface/40 font-bold mb-8">Follow</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-press w-11 h-11 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm border border-outline-variant/10"
                >
                  {link.svg ? link.svg : <span className="material-symbols-outlined text-xl">{link.icon}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 md:pt-10 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-[10px] font-label tracking-[0.25em] uppercase font-bold text-on-surface/30">
          <div>© {currentYear} He Said She Said Ministries</div>
          <div className="italic text-primary/60 normal-case tracking-normal text-xs md:text-sm text-center">
            "For you have not passed this way before." — Joshua 3:4
          </div>
          <div className="hover:text-primary transition-colors">
            <a href="https://servestrategy.com" className="underline underline-offset-4">
              Design by ServeStrategy.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
