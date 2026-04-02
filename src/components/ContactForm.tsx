"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setErrorMsg("Please complete each field so your message is ready to send.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/hsssat@outlook.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending your message. Please email us directly at hsssat@outlook.com or call 855-474-3724."
      );
    }
  };

  return (
    <div className="fade-up in-view" id="contact-form">
      {/* Hidden FormSubmit config fields */}
      <form className="hidden" action="https://formsubmit.co/hsssat@outlook.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/thank-you" />
      </form>

      <div className="soft-panel rounded-[2.5rem] border border-white/50 p-8 md:p-12 lg:p-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 block text-xs font-label font-bold uppercase tracking-[0.3em] text-primary">Send Your Note</span>
            <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">Share what&apos;s on your <span className="serif italic text-primary">heart.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">All requested fields are included: Name, Address, Email, Phone, Subject, and Message.</p>
        </div>

        <form className="mt-10" id="ministry-contact-form" noValidate onSubmit={handleSubmit}>
          {/* FormSubmit config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New message from HSSS website" />

          <div className="grid gap-6 md:grid-cols-2">
            <label className="field-shell block">
              <span className="mb-3 block text-xs font-label font-bold uppercase tracking-[0.25em] text-on-surface/45">Name</span>
              <input
                className="contact-input w-full px-0 pb-4 pt-2 text-base outline-none"
                name="name"
                placeholder="Your full name"
                required
                type="text"
              />
            </label>
            <label className="field-shell block">
              <span className="mb-3 block text-xs font-label font-bold uppercase tracking-[0.25em] text-on-surface/45">Address</span>
              <input
                className="contact-input w-full px-0 pb-4 pt-2 text-base outline-none"
                name="address"
                placeholder="Street, city, state"
                required
                type="text"
              />
            </label>
            <label className="field-shell block">
              <span className="mb-3 block text-xs font-label font-bold uppercase tracking-[0.25em] text-on-surface/45">Email</span>
              <input
                className="contact-input w-full px-0 pb-4 pt-2 text-base outline-none"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <label className="field-shell block">
              <span className="mb-3 block text-xs font-label font-bold uppercase tracking-[0.25em] text-on-surface/45">Phone</span>
              <input
                className="contact-input w-full px-0 pb-4 pt-2 text-base outline-none"
                name="phone"
                placeholder="(555) 555-5555"
                required
                type="tel"
              />
            </label>
          </div>
          <label className="field-shell mt-8 block">
            <span className="mb-3 block text-xs font-label font-bold uppercase tracking-[0.25em] text-on-surface/45">Subject</span>
            <input
              className="contact-input w-full px-0 pb-4 pt-2 text-base outline-none"
              name="subject"
              placeholder="How can we support you?"
              required
              type="text"
            />
          </label>
          <label className="field-shell mt-8 block">
            <span className="mb-3 block text-xs font-label font-bold uppercase tracking-[0.25em] text-on-surface/45">Message</span>
            <textarea
              className="contact-input min-h-[160px] w-full resize-y px-0 pb-4 pt-2 text-base outline-none"
              name="message"
              placeholder="Share your prayer request, question, or next step."
              required
            />
          </label>

          <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-on-surface-variant">
              Your message goes directly to the ministry team. We respond with care, personally.
            </p>
            <button
              className="signature-gradient inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 text-lg font-bold text-on-primary shadow-2xl shadow-primary/20 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          {status === "error" && errorMsg && (
            <p className="mt-5 rounded-2xl bg-error-container px-5 py-4 text-sm text-on-error-container" role="alert">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
