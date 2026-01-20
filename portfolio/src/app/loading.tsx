export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
          <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
        </div>
        <p className="text-text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}
