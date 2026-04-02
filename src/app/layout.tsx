import type { Metadata } from "next";
import { Newsreader, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const siteUrl = "https://hsss-ministries.org";
const siteName = "He Said She Said Ministries";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "He Said She Said Ministries | Radiant Soul",
    template: "%s | He Said She Said Ministries",
  },
  description:
    "HSSS guides men and women to drop the world's narrative, pursue the mind of Christ, and walk boldly in who He says they are.",
  applicationName: siteName,
  keywords: [
    "He Said She Said Ministries",
    "HSSS Ministries",
    "Christian ministry",
    "Tuesday prayer",
    "Bible study",
    "faith-based coaching",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "He Said She Said Ministries | Radiant Soul",
    description:
      "HSSS guides men and women to drop the world's narrative, pursue the mind of Christ, and walk boldly in who He says they are.",
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about_hsss.png",
        width: 1200,
        height: 630,
        alt: "He Said She Said Ministries social share image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "He Said She Said Ministries | Radiant Soul",
    description:
      "HSSS guides men and women to drop the world's narrative, pursue the mind of Christ, and walk boldly in who He says they are.",
    creator: "@hsssministries",
    images: ["/about_hsss.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${manrope.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b30a62" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HSSS" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-surface text-on-surface antialiased min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-primary focus:text-on-primary focus:rounded-full focus:font-bold focus:shadow-xl">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              alternateName: "HSSS Ministries",
              url: siteUrl,
              logo: `${siteUrl}/hsss-logo.svg`,
              contactPoint: {
                "@type": "ContactPoint",
                email: "hsssat@outlook.com",
                contactType: "customer support",
              },
              email: "hsssat@outlook.com",
              telephone: "+1-855-474-3724",
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
