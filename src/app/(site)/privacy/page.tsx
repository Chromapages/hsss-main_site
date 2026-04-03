import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for He Said She Said Ministries. Learn how we handle your data with care and respect.",
};

export default function PrivacyPage() {
  const lastUpdated = "April 3, 2026";

  const sections = [
    {
      title: "Our Commitment",
      content: "At He Said She Said Ministries (HSSS), we are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.",
    },
    {
      title: "Information We Collect",
      content: "We may collect personal information such as your name, email address, and phone number when you voluntarily provide it to us through contact forms, prayer requests, or newsletter signups. We also collect non-personal information such as browser type and IP address for analytical purposes to improve our services.",
    },
    {
      title: "How We Use Your Information",
      content: "Your information is used solely for the purpose for which it was provided—to respond to your inquiries, offer ministry support, send updates, or process requests. We do not sell, rent, or lease our user lists to third parties.",
    },
    {
      title: "Data Security",
      content: "HSSS implements a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      title: "Contact Us",
      content: "If you have any questions regarding this Privacy Policy, you may contact us at hsssat@outlook.com or call 855-474-3724.",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-top-left" />
        <div className="container relative mx-auto px-5 md:px-12 max-w-[900px]">
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4">Privacy Policy</h1>
          <p className="text-on-surface/60 font-label tracking-widest uppercase text-xs">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-5 md:px-12 max-w-[900px]">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/10">
            <div className="prose prose-rose max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h2 className="font-display text-2xl text-on-surface mb-4">{section.title}</h2>
                  <p className="text-on-surface-variant leading-relaxed font-body text-base md:text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t border-outline-variant/10 italic text-on-surface/40 text-sm">
              Note: This is a standard privacy policy generated for ministry use. For specific legal advice, please consult with a legal professional.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
