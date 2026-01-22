
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { userId: providedUserId } = await req.json();

        // Generate a new user ID if one wasn't provided
        const userId = providedUserId || crypto.randomUUID();

        const apiKey = process.env.OPENAI_API_KEY;
        const workflowId = process.env.CHATKIT_WORKFLOW_ID;

        if (!apiKey || !workflowId) {
            return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 });
        }

        const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
                "OpenAI-Beta": "chatkit_beta=v1"
            },
            body: JSON.stringify({
                workflow: { id: workflowId },
                user: userId,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("ChatKit API Error:", response.status, errorText);
            return NextResponse.json({ error: `OpenAI API Error: ${response.statusText}` }, { status: response.status });
        }

        const data = await response.json();

        return NextResponse.json({
            client_secret: data.client_secret,
            user_id: userId
        });
    } catch (error) {
        console.error('ChatKit session error:', error);
        return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
    }
}
