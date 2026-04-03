import type { Metadata } from "next";
import FooterCTA from "@/components/FooterCTA";
import { client } from "@/sanity/lib/client";
import { videosQuery, livestreamSettingsQuery } from "@/sanity/lib/queries";
import VideoGallery, {
  AddToCalendarButton,
  NextSessionCounter,
  type Video,
} from "./LivestreamClient";

export const metadata: Metadata = {
  title: "Livestream & Archives | He Said She Said Ministries",
  description: "Join our weekly Zoom prayer at 5:45 AM and Bible session at 7:15 PM every Tuesday. Watch archived sessions from He Said She Said Ministries.",
  openGraph: {
    title: "Livestream | HSSS Ministries",
    description: "Weekly Tuesday prayer and Bible sessions on Zoom. No sign-up required.",
    url: "https://hsss-ministries.org/livestream",
  },
};

type LivestreamSettings = {
  _id?: string;
  heroSection?: {
    title?: string;
    italicTitle?: string;
    description?: string;
  };
  zoomDetails?: {
    meetingId?: string;
    zoomLink?: string;
  };
  gallerySection?: {
    badge?: string;
    title?: string;
    italicTitle?: string;
    subtitle?: string;
  };
};

export default async function Livestream() {
  const [videos, settings] = await Promise.all([
    client.fetch<Video[]>(videosQuery),
    client.fetch<LivestreamSettings>(livestreamSettingsQuery),
  ]);

  const hero = settings?.heroSection;
  const zoom = settings?.zoomDetails;
  const gallery = settings?.gallerySection;

  // Fallback data for videos
  const displayVideos = (videos && videos.length > 0) ? videos : [
    {
      _id: "1",
      title: "Morning Intercession & Alignment",
      date: "Tuesday, March 24, 2026",
      thumbnail: null as any,
      category: "Morning Prayer",
      type: "archive",
    },
    {
      _id: "2",
      title: "Deep Dive: The Book of Romans",
      date: "Tuesday, March 17, 2026",
      thumbnail: null as any,
      category: "Bible Session",
      type: "archive",
    },
    {
      _id: "3",
      title: "Finding Peace in Turbulent Times",
      date: "Tuesday, March 10, 2026",
      thumbnail: null as any,
      category: "Bible Session",
      type: "archive",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-4 md:pt-24">
      <section className="py-10 md:py-24 bg-surface-container-low">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="bg-surface-container-lowest rounded-[1.75rem] md:rounded-[3rem] p-6 md:p-12 lg:p-24 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-8 font-headline leading-tight">
                  {hero?.title || "Weekly Prayer"} <br/>
                  <span className="text-primary italic serif">{hero?.italicTitle || "& Bible Study."}</span>
                </h2>
                <div className="space-y-8 text-lg md:text-xl text-on-surface-variant leading-relaxed font-body">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <h3 className="text-on-surface font-bold mb-2">Morning Prayer</h3>
                      <p>Every Tuesday at 5:45 AM EST. A sacred time to start your day with intercession and alignment.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">auto_stories</span>
                    </div>
                    <div>
                      <h3 className="text-on-surface font-bold mb-2">Bible Session</h3>
                      <p>Every Tuesday at 7:15 PM EST (Except 1st Tuesdays). Diving deep into the Word for practical transformation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 p-8 bg-surface-container-low rounded-[2rem] border border-outline-variant/10">
                  <div className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant/70 mb-2">Zoom Meeting ID</div>
                  <div className="font-mono text-3xl font-bold text-on-surface mb-8">{zoom?.meetingId || "815 758 1664"}</div>
                  <div className="flex flex-col gap-4">
                    <a
                      href={zoom?.zoomLink || "https://us06web.zoom.us/j/8157581664?omn=82461919629"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-press no-select signature-gradient text-on-primary px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg inline-flex items-center gap-3 active:scale-95 transition-all duration-300 w-full justify-center"
                    >
                      <span>Launch Zoom Now</span>
                      <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                    <AddToCalendarButton
                      meetingId={zoom?.meetingId || "815 758 1664"}
                      zoomLink={zoom?.zoomLink || "https://us06web.zoom.us/j/8157581664?omn=82461919629"}
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-surface-container-low rounded-[3rem] p-10 border border-outline-variant/10 shadow-xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-1000"></div>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined animate-pulse">live_tv</span>
                    </div>
                    <span className="text-xs font-label uppercase tracking-[0.25em] font-bold text-primary">Next Live Session</span>
                  </div>

                  <NextSessionCounter />

                  <div className="pt-8 border-t border-outline-variant/10">
                    <AddToCalendarButton
                      meetingId={zoom?.meetingId || "815 758 1664"}
                      zoomLink={zoom?.zoomLink || "https://us06web.zoom.us/j/8157581664?omn=82461919629"}
                    />
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-32 bg-surface">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-label tracking-[0.3em] uppercase text-xs mb-4 block font-bold">
                {gallery?.badge || "The Archives"}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-headline leading-tight">
                {gallery?.title || "Past Sessions"} <br/>
                & <span className="italic text-secondary serif">{gallery?.italicTitle || "Teachings."}</span>
              </h2>
            </div>
            <p className="text-on-surface-variant text-lg max-w-sm font-body leading-relaxed mb-4">
              {gallery?.subtitle || "Missed a session? Catch up on our latest spiritual explorations and group prayers in our high-definition archive."}
            </p>
          </div>

          <VideoGallery videos={displayVideos as Video[]} />
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
