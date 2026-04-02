"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-8 text-center">
      <div className="w-20 h-20 bg-error-container rounded-full flex items-center justify-center text-on-error-container mx-auto mb-10">
        <span className="material-symbols-outlined text-4xl">error</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-headline mb-6 text-on-surface">Something went <span className="italic text-primary">wrong.</span></h1>
      <p className="text-lg text-on-surface-variant font-body max-w-md mb-12 leading-relaxed">
        We ran into an issue loading this page. Please try again — if the problem persists, reach out to us directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="signature-gradient text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Try Again
        </button>
        <Link href="/" className="px-10 py-4 rounded-full border border-outline-variant font-bold hover:bg-surface-container transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
