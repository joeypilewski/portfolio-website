"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "./ContactModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="pt-8 md:pt-20 pb-12">
        <div className="flex flex-col items-start max-w-2xl space-y-6 md:space-y-8">
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
                business systems.
              </span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg leading-relaxed">
              Bridging the gap between complex operations and technical systems. Leveraging AI-augmented development and enterprise strategy to drive scalability and reliability.
            </p>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4 pt-4 w-full">
            <button
              onClick={scrollToExperience}
              className="flex-1 px-1 sm:px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-sm sm:text-lg whitespace-nowrap text-center"
            >
              View Work
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 px-1 sm:px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors text-sm sm:text-lg whitespace-nowrap text-center"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-1 sm:px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-lg whitespace-nowrap"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Resume
            </a>
          </div>

          <div className="pt-4 md:pt-8 flex flex-wrap items-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Technical Solutions Architect
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
              Bentley University
            </span>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
