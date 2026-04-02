import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | He Said She Said Ministries",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-8 text-center pt-24">
      <p className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-6 font-bold">404 — Page Not Found</p>
      <h1 className="text-5xl md:text-8xl font-headline mb-8 leading-tight tracking-tight text-on-surface">
        You&apos;ve wandered <br /><span className="italic text-secondary">off the path.</span>
      </h1>
      <p className="text-xl text-on-surface-variant font-body max-w-lg mb-14 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back to solid ground.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <button className="signature-gradient text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20">
            Return Home
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-10 py-5 rounded-full border border-outline-variant font-bold text-lg hover:bg-surface-container transition-colors">
            Contact Us
          </button>
        </Link>
      </div>
      <p className="mt-16 text-xs text-on-surface/25 font-label uppercase tracking-widest">
        &ldquo;For you have not passed this way before.&rdquo; — Joshua 3:4
      </p>
    </div>
  );
}
