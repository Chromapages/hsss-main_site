import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeUpObserver from "@/components/FadeUpObserver";

export const metadata: Metadata = {
  title: "Contact | He Said She Said Ministries",
  description: "Reach out to He Said She Said Ministries for prayer support, coaching inquiries, or to take your next step in faith. We respond personally and with care.",
  openGraph: {
    title: "Contact HSSS Ministries",
    description: "Send a message, request prayer, or inquire about coaching. We're here for your next step.",
    url: "https://hsss-ministries.org/contact",
  },
};

export default function Contact() {

  return (
    <main className="pt-16 bg-surface">
      <FadeUpObserver />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[72%] bg-[radial-gradient(circle_at_top_left,_rgba(255,217,227,0.95),_rgba(252,249,248,0)_48%),radial-gradient(circle_at_80%_18%,_rgba(254,162,206,0.38),_rgba(252,249,248,0)_34%),linear-gradient(180deg,_#fcf9f8_0%,_#f6f3f2_100%)]"></div>
          <div className="absolute top-24 right-[8%] h-48 w-48 rounded-full bg-white/40 blur-3xl drift"></div>
          <div className="absolute left-[4%] top-48 h-72 w-72 rounded-full bg-primary-fixed/40 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-[1600px] px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="fade-up">
              <span className="mb-8 block text-xs font-label font-bold uppercase tracking-[0.32em] text-primary">Contact The Sanctuary</span>
              <h1 className="max-w-4xl text-5xl leading-[0.95] tracking-tight text-on-surface md:text-7xl lg:text-[6.5rem] font-headline">
                Let&apos;s Begin the
                <br/>
                <span className="serif italic text-primary">Conversation.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-2xl font-body">
                Reach out for prayer, questions, coaching inquiries, or your next step with He Said She Said Ministries. We made this page feel like an open door, not a cold intake form.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-on-surface-variant font-body">
                Looking specifically for B.A.E. or C.O.R.E. support? Visit the <a href="/coaching" className="font-bold text-primary hover:underline transition-all">Coaching Hub</a> for a focused overview, then contact the ministry directly.
              </p>
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a href="#contact-form" className="signature-gradient inline-flex items-center justify-center rounded-full px-10 py-5 text-lg font-bold text-on-primary shadow-2xl shadow-primary/20 transition-all duration-300 hover:scale-[1.02]">
                  Send a Message
                </a>
                <a href="tel:8554743724" className="group inline-flex items-center gap-3 text-lg font-bold text-on-surface">
                  <span className="border-b-2 border-primary-fixed pb-1 transition-all duration-300 group-hover:border-primary">Call 855-474-3724</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">call</span>
                </a>
              </div>
            </div>

            <div className="fade-up lg:pl-10">
              <div className="soft-panel rounded-[2rem] border border-white/40 p-8 md:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <a href="mailto:hsssat@outlook.com" className="group rounded-[1.75rem] bg-white/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white shadow-sm border border-white/20">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed/70 text-primary">
                      <span className="material-symbols-outlined text-3xl">mail</span>
                    </div>
                    <div className="text-xs font-label font-bold uppercase tracking-[0.28em] text-on-surface/45">Email</div>
                    <div className="mt-3 text-lg font-bold text-on-surface">hsssat@outlook.com</div>
                    <div className="mt-2 text-sm leading-relaxed text-on-surface-variant font-body">For prayer requests, ministry questions, and follow-up conversations.</div>
                  </a>
                  <a href="tel:8554743724" className="group rounded-[1.75rem] bg-white/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white shadow-sm border border-white/20">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-fixed/70 text-secondary">
                      <span className="material-symbols-outlined text-3xl">call</span>
                    </div>
                    <div className="text-xs font-label font-bold uppercase tracking-[0.28em] text-on-surface/45">Phone</div>
                    <div className="mt-3 text-lg font-bold text-on-surface">855-474-3724</div>
                    <div className="mt-2 text-sm leading-relaxed text-on-surface-variant font-body">A direct line for those who prefer a real conversation over email.</div>
                  </a>
                </div>
                <div className="mt-6 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(179,10,98,0.08),rgba(144,69,108,0.14))] p-6 border border-primary/5">
                  <div className="text-xs font-label font-bold uppercase tracking-[0.28em] text-primary">Why Reach Out</div>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-on-surface-variant font-body">
                    Whether you&apos;re seeking guidance, partnership, prayer, or clarity about the ministry, we want the next step to feel personal, peaceful, and easy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectation Section */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="container mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-start">
            <div className="fade-up">
              <div className="h-full rounded-[2.5rem] bg-surface p-8 md:p-12 shadow-[0_32px_64px_-24px_rgba(140,112,119,0.14)] border border-outline-variant/10">
                <span className="mb-6 block text-xs font-label font-bold uppercase tracking-[0.3em] text-primary">What To Expect</span>
                <h2 className="text-4xl leading-tight tracking-tight md:text-5xl font-headline mb-10">
                  A response with
                  <br/>
                  <span className="serif italic text-secondary">warmth and clarity.</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-fixed/60 text-primary">
                      <span className="material-symbols-outlined">volunteer_activism</span>
                    </div>
                    <div>
                      <h3 className="text-2xl tracking-tight font-headline">Prayer Requests Welcome</h3>
                      <p className="mt-2 text-base leading-relaxed text-on-surface-variant font-body">Use the message field freely if you need support, encouragement, or someone to stand in faith with you.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-fixed/60 text-secondary">
                      <span className="material-symbols-outlined">forum</span>
                    </div>
                    <div>
                      <h3 className="text-2xl tracking-tight font-headline">Simple, Human Follow-Up</h3>
                      <p className="mt-2 text-base leading-relaxed text-on-surface-variant font-body">This page is designed to feel conversational, so your details and message come through in one complete introduction.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tertiary-fixed/70 text-tertiary">
                      <span className="material-symbols-outlined">spa</span>
                    </div>
                    <div>
                      <h3 className="text-2xl tracking-tight font-headline">A Sanctuary Tone</h3>
                      <p className="mt-2 text-base leading-relaxed text-on-surface-variant font-body">Every detail here follows the ministry&apos;s radiant editorial aesthetic, so the contact moment still feels sacred and intentional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary-fixed/40 blur-[120px]"></div>
        <div className="container mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="signature-gradient relative overflow-hidden rounded-[3rem] p-10 text-on-primary shadow-[0_56px_120px_-28px_rgba(179,10,98,0.3)] md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_36%)]"></div>
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="mb-5 block text-xs font-label font-bold uppercase tracking-[0.3em] text-primary-fixed">Stay Connected</span>
                <h2 className="text-4xl leading-tight tracking-tight md:text-6xl font-headline">When you&apos;re ready, <br/><span className="serif italic">reach out.</span></h2>
                <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl font-body">
                  The ministry&apos;s next conversation could start with one email, one call, or one message sent in faith.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="mailto:hsssat@outlook.com" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-primary transition-transform duration-300 hover:scale-[1.02]">Email The Ministry</a>
                <a href="/" className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-base font-bold text-white transition-colors duration-300 hover:bg-white/10">Return Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
