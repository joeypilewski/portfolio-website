import Link from "next/link";

export default function EducationPage() {
    return (
        <div className="space-y-12 max-w-2xl">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Education</h1>
                <p className="text-text-muted">
                    My academic background and qualifications.
                </p>
            </div>

            <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Bentley University</h2>
                            <p className="text-accent text-lg mt-1">Bachelor of Science in Finance</p>
                        </div>
                        <span className="text-sm font-mono text-text-muted">May 2022</span>
                    </div>

                    <div className="space-y-3 text-text-muted">
                        <div className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <p className="text-base">Minors: Computer Information Systems; Operations and Supply Chain Management</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h2 className="text-lg font-semibold text-white mb-4">Contact Information</h2>
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-text-muted">Phone</p>
                                <a
                                    href="tel:+16315136992"
                                    className="text-white hover:text-accent transition-colors"
                                >
                                    (631) 513-6992
                                </a>
                            </div>
                        </div>
                    </div>
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
