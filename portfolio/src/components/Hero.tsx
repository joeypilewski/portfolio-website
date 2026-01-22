"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "./ContactModal";
import { ChatPillComposer } from "./chat";

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
          <div className="badge-status">
            <span className="badge-status-dot">
              <span className="badge-status-dot-ping"></span>
              <span className="badge-status-dot-inner"></span>
            </span>
            Available for New Opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Building solutions
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-500">
                worth selling.
              </span>
            </h1>
            <p className="text-xl text-text-muted max-w-lg leading-relaxed">
              Turning operational problems into technical solutions. Three years of ERP consulting meets AI-augmented development to ship tools that scale.
            </p>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={scrollToExperience}
              className="group relative flex-1 sm:flex-initial sm:min-w-[140px] px-3 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-accent/20 to-indigo-500/20 backdrop-blur-md text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-200 ease-out before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-accent before:to-indigo-500 before:-z-10 before:transition-all before:duration-200 before:ease-out hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-[1.02] flex items-center justify-center"
            >
              <span className="relative z-10 whitespace-nowrap">View Work</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex-1 sm:flex-initial sm:min-w-[140px] px-3 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white/90 text-sm sm:text-base font-medium hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:scale-[1.02] transition-all duration-200 ease-out flex items-center justify-center"
            >
              <span className="relative z-10 whitespace-nowrap">Contact</span>
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Joey_Pilewski_Resume.pdf"
              className="group relative flex-1 sm:flex-initial sm:min-w-[140px] px-3 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white/90 text-sm sm:text-base font-medium hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:scale-[1.02] transition-all duration-200 ease-out flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10 whitespace-nowrap">Resume</span>
            </a>
          </div>

          <ChatPillComposer />

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
