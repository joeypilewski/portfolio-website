import Link from "next/link";
import { Card } from "@/components";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <Card className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-text-muted mb-6">Page not found.</p>
        <Link href="/" className="btn btn-primary">
          Go Home →
        </Link>
      </Card>
    </div>
  );
}
