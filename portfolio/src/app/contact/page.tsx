import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="space-y-12 max-w-2xl">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
                <p className="text-text-muted">
                    I'd love to hear from you. Feel free to reach out about opportunities,
                    collaborations, or just to say hello.
                </p>
            </div>

            <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h2 className="text-lg font-semibold text-white mb-4">Get in Touch</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-text-muted">Email</p>
                                <a
                                    href="mailto:joeypilewski@gmail.com"
                                    className="text-white hover:text-accent transition-colors"
                                >
                                    joeypilewski@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-text-muted">Location</p>
                                <p className="text-white">Long Island, NY</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://linkedin.com/in/josephpilewski12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        href="https://github.com/joeypilewski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                    >
                        GitHub ↗
                    </a>
                </div>
            </div>

            <div className="pt-8">
                <Link
                    href="/"
                    className="text-text-muted hover:text-white transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
