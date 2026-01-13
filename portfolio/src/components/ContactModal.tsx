"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
            className="fixed inset-0 z-[9999] flex items-center justify-center"
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
                                href="mailto:joeypilewski@gmail.com"
                                className="text-lg text-white hover:text-accent transition-colors"
                            >
                                joeypilewski@gmail.com
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
                            <p className="text-lg text-white">Long Island, NY</p>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <a
                            href="https://linkedin.com/in/josephpilewski12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 rounded-full border border-white/10 bg-white/5 text-center text-white hover:bg-white/10 transition-colors"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            href="https://github.com/joeypilewski"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 rounded-full border border-white/10 bg-white/5 text-center text-white hover:bg-white/10 transition-colors"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

