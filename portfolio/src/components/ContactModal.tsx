"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants/contact";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            // Calculate scrollbar width to prevent layout shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-modal flex items-center justify-center"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative z-10 w-full max-w-md mx-4 p-8 rounded-2xl bg-card border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 id="contact-modal-title" className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-text-muted">Email</p>
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="text-lg text-white hover:text-accent transition-colors"
                            >
                                {CONTACT_INFO.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-text-muted">Phone</p>
                            <a
                                href={`tel:${CONTACT_INFO.phone.tel}`}
                                className="text-lg text-white hover:text-accent transition-colors"
                            >
                                {CONTACT_INFO.phone.display}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-text-muted">Location</p>
                            <p className="text-lg text-white">{CONTACT_INFO.location}</p>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 font-medium hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 font-medium hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

