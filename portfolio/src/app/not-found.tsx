

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md p-8 rounded-2xl bg-white/5 border border-white/10">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">404</h1>
        <h2 className="text-xl font-semibold text-white mb-2">Page Not Found</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

      </div>
    </div>
  );
}
