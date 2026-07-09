

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
                <div className="card">
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
            </div>

        </div>
    );
}
