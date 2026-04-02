import { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-surface-container-high/50 ${className}`}
      {...props}
    />
  );
}

export function TextSkeleton({ className }: { className?: string }) {
  return <Skeleton className={`h-4 w-full ${className}`} />;
}

export function TitleSkeleton({ className }: { className?: string }) {
  return <Skeleton className={`h-8 w-3/4 mb-4 ${className}`} />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-[2rem] bg-surface-container-lowest p-12 space-y-6 border border-outline-variant/10">
      <Skeleton className="h-20 w-20 rounded-2xl" />
      <div className="space-y-3">
        <TitleSkeleton />
        <TextSkeleton />
        <TextSkeleton className="w-5/6" />
      </div>
      <div className="pt-6 border-t border-outline-variant/10">
        <Skeleton className="h-6 w-32" />
      </div>
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="space-y-12 py-32">
      <div className="container mx-auto px-12 max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <Skeleton className="aspect-[4/5] rounded-[2rem]" />
        <div className="space-y-8 p-12">
          <TitleSkeleton className="h-16" />
          <div className="space-y-4">
            <TextSkeleton />
            <TextSkeleton />
            <TextSkeleton className="w-3/4" />
          </div>
          <div className="pt-12 grid grid-cols-2 gap-12">
            <div className="space-y-2">
              <Skeleton className="h-12 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-12 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
