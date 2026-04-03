"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { SanityImageField } from "@/lib/constants";

export type Video = {
  _id: string;
  title: string;
  date: string;
  category: string;
  thumbnail: SanityImageField;
  videoUrl?: string;
  embedCode?: string;
  type: string;
};

type CalendarConfig = {
  title: string;
  description: string;
  location: string;
  url?: string;
};

function formatICSDate(date: Date) {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function getNextTuesdayMorningSession() {
  const now = new Date();
  const target = new Date(now);
  const daysUntilTuesday = (2 - now.getDay() + 7) % 7;
  target.setDate(now.getDate() + (daysUntilTuesday === 0 ? 7 : daysUntilTuesday));
  target.setHours(5, 45, 0, 0);

  return target;
}

export function generateICS(config: CalendarConfig) {
  const start = getNextTuesdayMorningSession();
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const timestamp = formatICSDate(new Date());
  const uid = `hsss-morning-prayer-${start.getTime()}@hsss-ministries.org`;
  const description = `${config.description}${config.url ? `\\n\\nJoin link: ${config.url}` : ""}`
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
  const location = config.location.replace(/,/g, "\\,").replace(/;/g, "\\;");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//He Said She Said Ministries//Weekly Session//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${timestamp}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `RRULE:FREQ=WEEKLY;BYDAY=TU`,
    `SUMMARY:${config.title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function AddToCalendarButton({
  meetingId,
  zoomLink,
}: {
  meetingId: string;
  zoomLink: string;
}) {
  const handleDownload = () => {
    const icsContent = generateICS({
      title: "HSSS Morning Prayer",
      description:
        "Weekly Tuesday morning prayer with He Said She Said Ministries.",
      location: `Zoom Meeting ID: ${meetingId}`,
      url: zoomLink,
    });

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "hsss-morning-prayer.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="w-full rounded-2xl border border-outline-variant/20 bg-surface-container-lowest py-4 font-bold transition-all duration-300 hover:border-primary hover:bg-primary hover:text-on-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <span className="flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-xl">calendar_add_on</span>
        Add to Calendar
      </span>
    </button>
  );
}

export function VideoModal({ session, onClose }: { session: Video | null; onClose: () => void }) {
  useEffect(() => {
    if (session) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [session]);

  if (!session) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-3xl animate-in fade-in duration-500" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-6xl aspect-video bg-surface-container-lowest rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 delay-150">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {session.type === "wix" && (session.videoUrl || session.embedCode) ? (
          <div className="w-full h-full">
            {session.embedCode ? (
              // embedCode from Sanity is controlled by trusted ministry editors only.
              // Restrict Sanity editor access to prevent XSS from untrusted sources.
              <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: session.embedCode }} />
            ) : (
              <iframe
                src={session.videoUrl}
                className="w-full h-full border-none"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={session.title}
                sandbox="allow-scripts allow-same-origin allow-presentation"
              />
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-surface-container-low">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 animate-pulse">
              <span className="material-symbols-outlined text-5xl">cloud_sync</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline mb-4">Archive Preview</h2>
            <p className="text-on-surface-variant font-body text-lg max-w-xl mb-12">
              The full session for <span className="text-primary font-bold">{session.title}</span> is being processed for the archive. 
              Please check back soon for the high-definition recording.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={onClose}
                className="px-8 py-4 border border-outline rounded-2xl font-bold hover:bg-surface-variant/20 transition-all"
              >
                Go Back
              </button>
              <div className="px-8 py-4 bg-primary/10 text-primary rounded-2xl font-bold">
                Coming Soon
              </div>
            </div>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-8 pt-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
          <div className="max-w-2xl">
            <div className="flex gap-4 mb-4">
               <span className="px-4 py-1.5 bg-primary text-on-primary text-[10px] font-label uppercase tracking-widest rounded-full">
                {session.category}
              </span>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-label uppercase tracking-widest rounded-full border border-white/10">
                {session.date}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-headline text-white">{session.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ session, onClick }: { session: Video; onClick: () => void }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        <Image 
          src={session.thumbnail?.asset?.url || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop"} 
          alt={session.title}
          width={session.thumbnail?.asset?.metadata?.dimensions?.width || 800}
          height={session.thumbnail?.asset?.metadata?.dimensions?.height || 450}
          placeholder={session.thumbnail?.asset?.metadata?.lqip ? "blur" : "empty"}
          blurDataURL={session.thumbnail?.asset?.metadata?.lqip}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <span className="material-symbols-outlined text-white text-3xl fill-1">play_arrow</span>
          </div>
        </div>
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-label uppercase tracking-widest rounded-full border border-white/10">
            {session.category}
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-headline mb-2 group-hover:text-primary transition-colors">{session.title}</h3>
      <p className="text-on-surface-variant font-body">{session.date}</p>
    </div>
  );
}

export function NextSessionCounter() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [sessionName, setSessionName] = useState("Morning Prayer");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextTuesday = new Date();
      nextTuesday.setDate(now.getDate() + (7 - now.getDay() + 2) % 7);
      
      const morningStart = new Date(nextTuesday);
      morningStart.setHours(5, 45, 0, 0);
      
      const eveningStart = new Date(nextTuesday);
      eveningStart.setHours(19, 15, 0, 0);

      // Simple logic for "Next" session
      let target: Date;
      let name: string;

      if (now.getDay() === 2) {
        if (now < morningStart) {
          target = morningStart;
          name = "Morning Prayer";
        } else if (now < new Date(morningStart.getTime() + 3600000)) {
          setIsLive(true);
          setSessionName("Morning Prayer");
          return;
        } else if (now < eveningStart) {
          target = eveningStart;
          name = "Bible Session";
        } else if (now < new Date(eveningStart.getTime() + 3600000)) {
          setIsLive(true);
          setSessionName("Bible Session");
          return;
        } else {
          // Next Tuesday
          nextTuesday.setDate(now.getDate() + 7);
          morningStart.setDate(nextTuesday.getDate());
          target = morningStart;
          name = "Morning Prayer";
        }
      } else {
        target = morningStart;
        name = "Morning Prayer";
      }

      setIsLive(false);
      setSessionName(name);

      const diff = target.getTime() - now.getTime();
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (isLive) {
    return (
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-headline mb-4 leading-tight">
          Current Session: <br /><span className="text-primary italic serif">{sessionName}</span>
        </h3>
        <div className="flex items-center gap-3 text-red-500 font-bold animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-label uppercase tracking-widest">Live Now</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-3xl font-headline mb-6 leading-tight">
        {sessionName} <br /><span className="text-primary italic serif">Starting in:</span>
      </h3>
      <div className="flex gap-4">
        {[
          { label: "Days", value: timeLeft?.days ?? 0 },
          { label: "Hrs", value: timeLeft?.hours ?? 0 },
          { label: "Mins", value: timeLeft?.minutes ?? 0 },
          { label: "Secs", value: timeLeft?.seconds ?? 0 },
        ].map((item) => (
          <div key={item.label} className="flex-1 bg-surface py-4 px-2 rounded-2xl border border-outline-variant/10 text-center">
            <div className="text-2xl md:text-3xl font-headline text-on-surface mb-1">{item.value}</div>
            <div className="text-[10px] font-label uppercase text-on-surface-variant font-bold tracking-widest">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VideoGallery({ videos }: { videos: Video[] }) {
  const [selectedSession, setSelectedSession] = useState<Video | null>(null);

  return (
    <>
      <VideoModal session={selectedSession} onClose={() => setSelectedSession(null)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {videos.map((video) => (
          <VideoCard key={video._id} session={video} onClick={() => setSelectedSession(video)} />
        ))}
      </div>
    </>
  );
}
