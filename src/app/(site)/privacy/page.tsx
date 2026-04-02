import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for He Said She Said Ministries, including how contact details, meeting requests, and website interactions are handled.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you reach out through our website, email us, or request ministry support, we may collect your name, email address, phone number, and any message details you choose to share.",
      "We may also collect limited technical data such as browser type, approximate device information, and standard analytics signals used to understand site usage and improve the experience.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use submitted information to respond to inquiries, share ministry details, coordinate livestream or coaching-related follow-up, and improve the clarity and accessibility of our website.",
      "We do not sell personal information. We only use the information provided in ways reasonably connected to ministry communication, support, and operations.",
    ],
  },
  {
    title: "Sharing and Service Providers",
    body: [
      "We may rely on trusted third-party tools to operate the website, host livestream information, manage email communication, or store content. Those providers may process data only as needed to deliver those services.",
      "We may also disclose information when required by law or when necessary to protect the safety, rights, or integrity of our ministry, community members, or website.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "Our website may use standard cookies or similar technologies to support performance, understand page usage, and improve usability. These tools help us understand what content is most helpful to visitors.",
      "You can manage cookies through your browser settings, though some site features may behave differently if cookies are disabled.",
    ],
  },
  {
    title: "Data Retention and Security",
    body: [
      "We retain personal information only for as long as it is reasonably needed for communication, recordkeeping, legal compliance, or ministry support purposes.",
      "We use reasonable administrative and technical safeguards to protect submitted information, but no internet transmission or storage system can be guaranteed completely secure.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact us to request updates, corrections, or deletion of personal information you have submitted, subject to any legal or operational obligations that require us to keep certain records.",
      "If you no longer wish to receive communication from us, you can reply directly to the message you received or contact us using the information below.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface pb-24 pt-32 md:pt-36">
      <section className="relative overflow-hidden">
        <div className="absolute left-[-6rem] top-10 h-72 w-72 rounded-full bg-primary-fixed/30 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-56 w-56 rounded-full bg-secondary-fixed/30 blur-3xl" />
        <div className="container relative z-10 mx-auto max-w-5xl px-8 md:px-12">
          <span className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Legal
          </span>
          <h1 className="text-5xl leading-[0.95] tracking-tight md:text-7xl font-headline">
            Privacy <span className="serif italic text-secondary">Policy.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl font-body">
            This policy explains how He Said She Said Ministries collects, uses, and
            protects information shared through our website and ministry communication
            channels.
          </p>
        </div>
      </section>

      <section className="pt-16">
        <div className="container mx-auto max-w-5xl px-8 md:px-12">
          <div className="rounded-[2.5rem] border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-[0_36px_80px_-24px_rgba(140,112,119,0.18)] md:p-14">
            <div className="mb-12 rounded-[2rem] bg-surface-container-low p-6 text-sm leading-relaxed text-on-surface-variant font-body">
              Effective date: April 2, 2026. If we materially update this page, the
              effective date will be revised here.
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
                  Contact Us
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-on-surface-variant md:text-lg font-body">
                  <p>
                    For privacy-related questions, contact He Said She Said Ministries at{" "}
                    <a className="text-primary underline underline-offset-4" href="mailto:hsssat@outlook.com">
                      hsssat@outlook.com
                    </a>
                    .
                  </p>
                  <p>
                    You may also call{" "}
                    <a className="text-primary underline underline-offset-4" href="tel:8554743724">
                      (855) 474-3724
                    </a>
                    .
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
