export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full border-4 border-primary-fixed border-t-primary animate-spin" />
        <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest font-bold">Loading…</p>
      </div>
    </div>
  );
}
