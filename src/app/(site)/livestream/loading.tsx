export default function LivestreamLoading() {
  return (
    <div className="flex flex-col min-h-screen pt-4 md:pt-24 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="py-10 md:py-24 bg-surface-container-low">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="bg-surface-container-lowest rounded-[1.75rem] md:rounded-[3rem] p-6 md:p-12 lg:p-24 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <div className="h-10 md:h-14 bg-on-surface/5 rounded-2xl w-3/4 mb-4" />
                <div className="h-10 md:h-14 bg-on-surface/5 rounded-2xl w-1/2 mb-8" />
                
                <div className="space-y-8">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-on-surface/5 rounded-xl shrink-0" />
                      <div className="flex-grow">
                        <div className="h-6 bg-on-surface/5 rounded-lg w-1/3 mb-2" />
                        <div className="h-4 bg-on-surface/5 rounded-lg w-full" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 p-8 bg-surface-container-low rounded-[2rem] border border-outline-variant/10">
                  <div className="h-4 bg-on-surface/5 rounded w-1/4 mb-4" />
                  <div className="h-12 bg-on-surface/5 rounded-xl w-1/2 mb-8" />
                  <div className="h-14 bg-on-surface/5 rounded-2xl w-full" />
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-surface-container-low rounded-[3rem] p-10 border border-outline-variant/10 h-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section Skeleton */}
      <section className="py-14 md:py-32 bg-surface">
        <div className="container mx-auto px-5 md:px-12 max-w-[1600px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl w-full">
              <div className="h-4 bg-on-surface/5 rounded w-24 mb-4" />
              <div className="h-12 bg-on-surface/5 rounded-2xl w-3/4 mb-4" />
              <div className="h-12 bg-on-surface/5 rounded-2xl w-1/2" />
            </div>
            <div className="max-w-sm w-full">
              <div className="h-4 bg-on-surface/5 rounded w-full mb-2" />
              <div className="h-4 bg-on-surface/5 rounded w-full mb-2" />
              <div className="h-4 bg-on-surface/5 rounded w-2/3" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-sm">
                <div className="aspect-video bg-on-surface/5" />
                <div className="p-6">
                  <div className="h-6 bg-on-surface/5 rounded-lg w-3/4 mb-3" />
                  <div className="h-4 bg-on-surface/5 rounded-lg w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
