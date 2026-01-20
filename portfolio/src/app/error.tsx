"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console for debugging
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md p-8 rounded-2xl bg-white/5 border border-white/10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Something Went Wrong</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 font-medium hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
