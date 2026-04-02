import type { HeroSlide } from "@/components/HeroSlider";
import { SanityImageSource } from "@sanity/asset-utils";

export type Testimonial = {
  _id?: string;
  author: string;
  role: string;
  quote: string;
  color: "primary" | "secondary" | "tertiary";
  image?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: {
        lqip: string;
      };
    };
  };
};

export type EventItem = {
  _id: string;
  title: string;
  slug?: string;
  date: string;
  location?: string;
  description: string;
  image?: any;
  staticImage?: string;
  category?: string;
  icon?: string;
  color?: "primary" | "secondary" | "tertiary";
  isFeaturedTheme?: boolean;
  subtitle?: string;
  italicTitle?: string;
  scripture?: string;
  themeYear?: string;
  buttonText?: string;
};

export type NextStepCard = {
  _id?: string;
  title: string;
  icon: string;
  badgeText?: string;
  badgeIcon?: string;
  description: string;
  meetingId?: string;
  ctaText: string;
  ctaLink: string;
  colorTheme: "primary" | "secondary" | "tertiary";
  order?: number;
};

export type HomeAboutData = {
  _id?: string;
  title: string;
  italicTitle?: string;
  content: string;
  image: any;
  stats?: Array<{ value: string; label: string }>;
};

export const FALLBACK_HERO_SLIDES: HeroSlide[] = [
  {
    _id: "hero-1",
    title: "His Word. Your Purpose.",
    italicSubtitle: "No Compromise.",
    description:
      "Feeling clouded by the world's expectations? You're not alone. We build our lives around what others tell us we are. But what if He has already said something different?\n\nHSSS helps you identify the noise, pursue the mind of Christ, and walk boldly in who He says you are.",
    staticImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZKjS9LcbUC_JIcQNQOsm1tN8GmpaosSfynZduGd7TNyeKHaOv189ZgVKSgFQJ_lVcBn4RtkfxPRSlurXmY-HUmsc0FxW0b_xvWaSU_e49uSB_8T761_WK4EnFDFVwUn6NJSnCHF2VxqyLVQfDis0DdN8RiT19_sCIEkMEy0mWSvMrchNI_RvRQHxY2Y8ylqQfNn8GKdBwpjDfCVqGGXRWpKdxI1RxFfnh6aNFLmepYN_8RIIyeTexC9bFDvzaKDzwe9qk0WVqIA",
    primaryButtonText: "Join Morning Prayer",
    primaryButtonLink: "/livestream",
    secondaryButtonText: "Our Story",
    secondaryButtonLink: "/about",
    imageAlt: "Serene morning prayer",
    order: 0,
  },
  {
    _id: "hero-2",
    title: "Drop the World's Narrative.",
    italicSubtitle: "Pursue Christ's Mind.",
    description:
      "Every gathering is designed to help you hear clearly, heal honestly, and move with courage. We create space for truth, clarity, and practical next steps rooted in God's voice.",
    staticImage: "/about_hsss.png",
    primaryButtonText: "Explore the Ministry",
    primaryButtonLink: "/about",
    secondaryButtonText: "See Livestreams",
    secondaryButtonLink: "/livestream",
    imageAlt: "Ministry portrait",
    order: 1,
  },
  {
    _id: "hero-3",
    title: "Find the Courage to Shift.",
    italicSubtitle: "Move Boldly Forward.",
    description:
      "From weekly prayer to evening Bible sessions, HSSS gives you consistent places to return to God's truth, strengthen your faith, and take the next faithful step.",
    staticImage: "/bible_study_1.png",
    primaryButtonText: "View This Season",
    primaryButtonLink: "/livestream",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
    imageAlt: "Bible study gathering",
    order: 2,
  },
];

export const FALLBACK_NEXT_STEPS: NextStepCard[] = [
  {
    _id: "step-1",
    title: "5:45 AM Tuesday Prayer",
    icon: "videocam",
    badgeText: "Every Tuesday",
    badgeIcon: "schedule",
    description:
      "We are now on Zoom — No signup needed. Come as you are. Join our collective prayer calls designed to align your heart with divine intentions.",
    meetingId: "815 758 1664",
    ctaText: "Join Morning Prayer",
    ctaLink: "https://us06web.zoom.us/j/8157581664?omn=82461919629",
    colorTheme: "primary",
    order: 0,
  },
  {
    _id: "step-2",
    title: "Join the Men of HSSS",
    icon: "shield",
    badgeText: "4th Tuesdays",
    badgeIcon: "calendar_month",
    description:
      "A special space for men to gather, grow, and lead with purpose. Led by Leonard Jones — All are welcome!",
    ctaText: "All Are Welcome!",
    ctaLink: "/about",
    colorTheme: "secondary",
    order: 1,
  },
  {
    _id: "step-3",
    title: "7:15 PM Bible Session",
    icon: "groups",
    badgeText: "Except 1st Tuesdays",
    badgeIcon: "event_busy",
    description:
      "Interactive evening sessions focusing on the mind of Christ and your purpose. Join us on Zoom (No passcode needed).",
    meetingId: "815 758 1664",
    ctaText: "Join Evening Session",
    ctaLink: "https://us06web.zoom.us/j/8157581664?omn=82461919629",
    colorTheme: "tertiary",
    order: 2,
  },
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    author: "Y.S.",
    role: "Community Member",
    quote:
      "Realizing my blind spot was Trust. I had to step out on Faith… I started practicing 'Open Handed Living' and taking baby steps in believing that God had my best interest at heart. Still growing and learning. God Bless you for HSSS — IT HAS BEEN A BLESSING!",
    color: "primary",
  },
  {
    author: "C.S.",
    role: "Weekly Attendee",
    quote:
      "He Said/She Said is a constant reminder of what God says and feels about me. It serves as a weekly reminder of God's care, consideration and His loving kindness towards me. He Said/She Said is simply a must have in my life!!!",
    color: "secondary",
  },
  {
    author: "Anonymous",
    role: "HSSS Member",
    quote:
      "What God has taught me through HSSS mainly is patience… He's taking me the long way around to make sure I'm equipped for the job. Patience is not easy but will pay off if you trust God.",
    color: "tertiary",
  },
];

export const FALLBACK_EVENTS: EventItem[] = [
  {
    _id: "giveaway",
    title: "HSSS Food Giveaway",
    date: "2025-12-06",
    description:
      "An annual community outreach event dedicated to serving, sharing, and providing for those in need with compassion and dignity.",
    staticImage: "/giveaway-hsss.avif",
    category: "Annual Outreach",
    icon: "volunteer_activism",
    color: "primary",
  },
  {
    _id: "pivot",
    title: "PIVOT Conference",
    date: "2023-03-09",
    description:
      'A bold conference call to reposition, refocus, and embrace "the COURAGE TO SHIFT NOW!" with faith-led intention.',
    staticImage: "/pivot-hsss.avif",
    category: "Past Conference",
    icon: "sync_alt",
    color: "tertiary",
    subtitle: "Pursuing Intentional Vision Over Thought",
  },
];

export const NEXT_STEP_THEME_MAP = {
  primary: {
    iconBg: "bg-primary-fixed/50",
    iconText: "text-primary",
    badge: "bg-primary/10 text-primary",
    cta: "text-primary",
  },
  secondary: {
    iconBg: "bg-secondary-fixed/50",
    iconText: "text-secondary",
    badge: "bg-secondary/10 text-secondary",
    cta: "text-secondary",
  },
  tertiary: {
    iconBg: "bg-tertiary-fixed/50",
    iconText: "text-tertiary",
    badge: "bg-tertiary/10 text-tertiary",
    cta: "text-tertiary",
  },
} as const;
