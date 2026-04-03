import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for He Said She Said Ministries. Our commitment to you and your use of our digital sanctuary.",
};

export default function TermsPage() {
  const lastUpdated = "April 3, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the He Said She Said Ministries (HSSS) website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use this site.",
    },
    {
      title: "2. Use of Content",
      content: "All content on this website, including but not limited to text, images, videos, and logos, is the property of HSSS and is protected by copyright laws. You may use the content for personal, non-commercial purposes only.",
    },
    {
      title: "3. User Conduct",
      content: "We encourage a respectful and supportive community. You agree not to use this website for any unlawful, offensive, or harmful purpose. We reserve the right to remove any user-generated content that violates these principles.",
    },
    {
      title: "4. Disclaimer of Liability",
      content: "HSSS provides the content on this website for informational and ministry purposes only. We make no warranties, express or implied, about the information provided and shall not be liable for any loss or damage arising from your use of this site.",
    },
    {
      title: "5. Modifications to Terms",
      content: "We reserve the right to change these Terms of Service at any time. Your continued use of the website following any changes constitutes your acceptance of the updated terms.",
    },
    {
      title: "6. Contact Information",
      content: "If you have any questions or concerns about these Terms of Service, please contact us at hsssat@outlook.com or 855-474-3724.",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 origin-top-right transition-transform duration-500 hover:skew-y-0" />
        <div className="container relative mx-auto px-5 md:px-12 max-w-[900px]">
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4">Terms of Service</h1>
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
                  <h3 className="font-display text-xl text-on-surface mb-3">{section.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed font-body text-base md:text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t border-outline-variant/10 italic text-on-surface/40 text-sm">
              Note: This is a standard terms of service template for informational purposes. For specific legal guidance, please consult with a professional.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
