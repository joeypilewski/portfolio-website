import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center max-w-md p-8 rounded-2xl bg-white/5 border border-white/10">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-text-muted mb-6">Page not found.</p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
        >
          Go Home →
        </Link>
      </div>
    </div>
  );
}
