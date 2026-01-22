import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests
const RATE_WINDOW = 60 * 1000; // 1 minute

function getRateLimitKey(request: NextRequest): string {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";
    return ip;
}

function isRateLimited(key: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(key);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(key, { count: 1, resetTime: now + RATE_WINDOW });
        return false;
    }

    if (record.count >= RATE_LIMIT) {
        return true;
    }

    record.count++;
    return false;
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const rateLimitKey = getRateLimitKey(request);
        if (isRateLimited(rateLimitKey)) {
            return NextResponse.json(
                { error: "Too many requests" },
                { status: 429 }
            );
        }

        // Get or create user ID from request body
        const body = await request.json().catch(() => ({}));
        const userId = body.userId || `anon_${crypto.randomUUID()}`;

        // Validate workflow ID is configured
        const workflowId = process.env.CHATKIT_WORKFLOW_ID;
        if (!workflowId) {
            console.error("CHATKIT_WORKFLOW_ID not configured");
            // Return development mode response
            return NextResponse.json({
                client_secret: `dev_${crypto.randomUUID()}`,
                user_id: userId,
                mode: "development",
            });
        }

        // TODO: Once ChatKit API is fully available, implement proper session creation:
        // const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
        //   method: "POST",
        //   headers: {
        //     "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     workflow_id: workflowId,
        //     user_id: userId,
        //   }),
        // });
        // const session = await response.json();
        // return NextResponse.json({
        //   client_secret: session.client_secret,
        //   user_id: userId,
        // });

        // For now, return development mode response
        return NextResponse.json({
            client_secret: `dev_${crypto.randomUUID()}`,
            user_id: userId,
            workflow_id: workflowId,
            mode: "development",
        });
    } catch (error) {
        console.error("ChatKit session error:", error);
        return NextResponse.json(
            { error: "Failed to create chat session" },
            { status: 500 }
        );
    }
}

