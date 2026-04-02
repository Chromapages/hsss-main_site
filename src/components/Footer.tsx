import Link from "next/link";
import Image from "next/image";

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
    { icon: "mail", href: "mailto:hsssat@outlook.com", label: "Email the ministry" },
    { icon: "call", href: "tel:8554743724", label: "Call the ministry" },
  ];

  return (
    <footer className="bg-surface-container-low py-16 mt-auto">
      <div className="container mx-auto px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="mb-8">
              <Link href="/" className="flex flex-col gap-4">
                <div className="font-logo font-bold text-2xl text-primary">
                  He Said She Said Ministries
                </div>
              </Link>
            </div>
            <p className="text-lg text-on-surface-variant max-w-sm font-body leading-relaxed">
              Building a digital sanctuary for modern believers to connect, study, and grow together in grace.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface/40 font-bold mb-8">Explore</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-on-surface/70 hover:text-primary transition-colors hover:underline underline-offset-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface/40 font-bold mb-8">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-on-surface/70 hover:text-primary transition-colors hover:underline underline-offset-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface/40 font-bold mb-8">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm"
                >
                  <span className="material-symbols-outlined text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-label tracking-[0.25em] uppercase font-bold text-on-surface/30">
          <div>© {currentYear} He Said She Said Ministries</div>
          <div className="italic text-primary/60 normal-case tracking-normal text-sm">
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
