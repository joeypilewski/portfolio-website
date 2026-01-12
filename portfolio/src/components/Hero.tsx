"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "./ContactModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="pt-20 pb-12">
        <div className="flex flex-col items-start max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Building intelligent
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-500">
                web systems.
              </span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg leading-relaxed">
              I turn messy workflows into reliable, automated systems. Bridging operations, finance, and engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="#experience" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              View Work
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>

          <div className="pt-8 flex items-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Long Island, NY
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Ops & Systems Analyst
            </span>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
