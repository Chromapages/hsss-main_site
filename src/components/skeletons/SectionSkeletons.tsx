import { Skeleton, TitleSkeleton, TextSkeleton } from "@/components/ui/Skeleton";

export function HeroSkeleton() {
  return (
    <div className="relative min-h-[90vh] bg-surface flex items-center overflow-hidden">
      <div className="container mx-auto px-12 max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <Skeleton className="h-6 w-48 rounded-full" />
            <TitleSkeleton className="h-20" />
            <TitleSkeleton className="h-20 w-1/2" />
          </div>
          <div className="space-y-4">
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton className="w-2/3" />
          </div>
          <div className="flex gap-6 pt-6">
            <Skeleton className="h-16 w-48 rounded-full" />
            <Skeleton className="h-16 w-32 rounded-full" />
          </div>
        </div>
        <div className="relative">
          <Skeleton className="aspect-square rounded-[3rem] shadow-2xl" />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 blur-3xl opacity-50" />
        </div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-4/5 bg-surface-container-low -z-10 rounded-l-[100px]"></div>
      <div className="container mx-auto px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-6 relative">
            <Skeleton className="aspect-[4/5] rounded-[2rem] shadow-2xl" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed opacity-30 blur-3xl -z-10 animate-pulse"></div>
          </div>
          <div className="md:col-span-6 md:-ml-32 z-20">
            <div className="bg-surface-container-lowest p-12 md:p-16 rounded-[2.5rem] shadow-[0_48px_80px_-16px_rgba(140,112,119,0.08)] space-y-10">
              <div className="space-y-4">
                <Skeleton className="h-14 w-3/4" />
                <Skeleton className="h-14 w-1/2" />
              </div>
              <div className="space-y-6">
                <TextSkeleton />
                <TextSkeleton />
                <TextSkeleton className="w-2/3" />
              </div>
              <div className="mt-16 pt-12 border-t border-outline-variant/10 grid grid-cols-2 gap-12">
                <div className="space-y-3">
                  <Skeleton className="h-14 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-14 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SanctuaryPathSkeleton() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-12 max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-16 w-3/4" />
          </div>
          <div className="space-y-4 w-full max-w-md">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-[2rem] bg-surface-container-lowest p-12 space-y-8 animate-pulse border border-outline-variant/10">
              <Skeleton className="h-20 w-20 rounded-2xl" />
              <div className="space-y-4">
                 <Skeleton className="h-10 w-3/4" />
                 <Skeleton className="h-24 w-full" />
              </div>
              <div className="pt-8 border-t border-outline-variant/10">
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="bg-surface-container-lowest rounded-[2.5rem] overflow-hidden border border-outline-variant/10 flex flex-col">
      <Skeleton className="h-64 w-full" />
      <div className="p-10 space-y-6">
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-10 w-3/4" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-14 w-full rounded-2xl" />
      </div>
    </div>
  );
}

export function EventsSkeleton() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-12 max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-16 w-3/4" />
          </div>
          <Skeleton className="h-14 w-48 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <EventCardSkeleton />
          <EventCardSkeleton />
        </div>

        <div className="mt-10">
          <div className="bg-primary/5 rounded-[2.5rem] overflow-hidden border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              <div className="lg:col-span-7 p-12 md:p-20 flex flex-col justify-center space-y-8">
                <Skeleton className="h-8 w-48 rounded-full" />
                <div className="space-y-4">
                  <Skeleton className="h-16 w-3/4" />
                  <Skeleton className="h-16 w-1/2" />
                </div>
                <div className="space-y-4">
                  <TextSkeleton />
                  <TextSkeleton className="w-2/3" />
                </div>
                <Skeleton className="h-16 w-56 rounded-2xl" />
              </div>
              <div className="lg:col-span-5 relative min-h-[400px]">
                 <Skeleton className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-12 max-w-[1600px] mb-20">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Skeleton className="h-5 w-48 mx-auto" />
          <Skeleton className="h-16 w-3/4 mx-auto" />
        </div>
      </div>
      <div className="flex gap-8 px-12 animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="min-w-[400px] bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/10 space-y-6">
            <div className="flex gap-4">
              <Skeleton className="h-14 w-14 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ScriptureSkeleton() {
  return (
    <section className="relative py-40 overflow-hidden bg-surface">
      <Skeleton className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-12 max-w-[1600px] relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Skeleton className="h-12 w-20 mx-auto opacity-50" />
          <div className="space-y-6">
            <Skeleton className="h-12 w-full mx-auto" />
            <Skeleton className="h-12 w-full mx-auto" />
            <Skeleton className="h-12 w-2/3 mx-auto" />
          </div>
          <div className="pt-8 space-y-4">
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-4 w-32 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

