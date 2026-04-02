import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms governing use of the He Said She Said Ministries website, livestream content, and ministry resources.",
};

const sections = [
  {
    title: "Use of the Website",
    body: [
      "By using this website, you agree to use it only for lawful purposes and in a way that does not interfere with the website, ministry communications, or the experience of other visitors.",
      "You may access this site for personal, informational, and ministry engagement purposes. You may not misuse the site to transmit harmful code, attempt unauthorized access, or interfere with hosted services.",
    ],
  },
  {
    title: "Content and Ministry Resources",
    body: [
      "Website content, livestream materials, branding, and written resources are provided for informational and ministry purposes. Unless otherwise stated, all content belongs to He Said She Said Ministries or is used with permission.",
      "You may not reproduce, republish, or commercially distribute site content without prior written permission.",
    ],
  },
  {
    title: "Livestreams, Events, and Scheduling",
    body: [
      "Session times, Zoom links, event details, and ministry offerings may change. We work to keep the site current, but we do not guarantee that all schedules, links, or archived materials will always be uninterrupted or error-free.",
      "Calendar downloads and schedule references are offered as a convenience. Please confirm event details directly on the site or through ministry communication if timing is important.",
    ],
  },
  {
    title: "No Professional Advice",
    body: [
      "The site may include spiritual encouragement, coaching information, or ministry guidance. This content is not a substitute for medical, mental health, legal, or financial advice from licensed professionals.",
      "If you are experiencing a crisis or emergency, seek immediate assistance from qualified local services or emergency responders.",
    ],
  },
  {
    title: "Third-Party Links and Tools",
    body: [
      "Our website may link to third-party platforms such as Zoom, email services, or social tools. We are not responsible for the content, security, or privacy practices of those external services.",
      "Your use of third-party services is governed by their own terms and policies.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, He Said She Said Ministries is not liable for indirect, incidental, or consequential damages arising from use of the website, inability to access the site, or reliance on site content.",
      "All website materials are provided on an 'as is' and 'as available' basis without warranties of any kind, except where warranties cannot be excluded by law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface-container-low pb-24 pt-32 md:pt-36">
      <section className="relative overflow-hidden">
        <div className="absolute right-[-5rem] top-12 h-80 w-80 rounded-full bg-primary-fixed/20 blur-3xl" />
        <div className="absolute left-[-3rem] top-28 h-56 w-56 rounded-full bg-tertiary-fixed/25 blur-3xl" />
        <div className="container relative z-10 mx-auto max-w-5xl px-8 md:px-12">
          <span className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Legal
          </span>
          <h1 className="text-5xl leading-[0.95] tracking-tight md:text-7xl font-headline">
            Terms of <span className="serif italic text-secondary">Service.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl font-body">
            These terms govern use of the He Said She Said Ministries website,
            livestream pages, and related digital ministry resources.
          </p>
        </div>
      </section>

      <section className="pt-16">
        <div className="container mx-auto max-w-5xl px-8 md:px-12">
          <div className="rounded-[2.5rem] border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-[0_36px_80px_-24px_rgba(140,112,119,0.18)] md:p-14">
            <div className="mb-12 rounded-[2rem] bg-surface-container-low p-6 text-sm leading-relaxed text-on-surface-variant font-body">
              Effective date: April 2, 2026. Continued use of the site after updates means
              you accept the revised terms.
            </div>

            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-5 text-3xl tracking-tight md:text-4xl font-headline">
                    {section.title}
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-on-surface-variant md:text-lg font-body">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="mb-5 text-3xl tracking-tight md:text-4xl font-headline">
                  Contact
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-on-surface-variant md:text-lg font-body">
                  <p>
                    Questions about these terms can be sent to{" "}
                    <a className="text-primary underline underline-offset-4" href="mailto:hsssat@outlook.com">
                      hsssat@outlook.com
                    </a>
                    .
                  </p>
                  <p>
                    Mail and phone inquiries may also be directed through the ministry’s
                    published contact channels on the website.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
