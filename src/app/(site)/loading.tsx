import { HeroSkeleton, SanctuaryPathSkeleton } from "@/components/skeletons/SectionSkeletons";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-surface pt-24 space-y-32">
      <HeroSkeleton />
      <div className="container mx-auto px-12 max-w-[1600px] mb-32">
        <SanctuaryPathSkeleton />
      </div>
    </div>
  );
}
