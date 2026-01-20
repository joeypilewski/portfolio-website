import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md p-8 rounded-2xl bg-white/5 border border-white/10">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">404</h1>
        <h2 className="text-xl font-semibold text-white mb-2">Page Not Found</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
