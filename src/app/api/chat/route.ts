import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are SmartEdge AI Tutor, an intelligent study assistant for SmartEdge Academy & Consult, located in Abule Egba, Lagos, Nigeria.

Your role:
- Help students with questions about WAEC, NECO, GCE, JAMB/UTME subjects
- Explain concepts clearly in simple English
- Provide exam tips and study strategies
- Answer questions about SmartEdge Academy services

SmartEdge Academy Info:
- Address: F/F 05, Afriland Complex, Beside UBA Bank, Abule Taylor, Abule Egba, Lagos State
- Phone/WhatsApp: 08109015332
- Sessions: Morning (8AM-1PM) and Afternoon (4PM-6PM), Monday-Friday
- Exams: SSCE, WAEC, NECO, GCE, JAMB/UTME
- Services: Exam prep classes, scratch cards, JAMB portal services, WAEC certificate retrieval
- Bookstore: Platinum Series 12-in-One SSCE Extra book

Be encouraging, patient, and thorough. Use Nigerian educational context. When students need services beyond what you can provide, direct them to WhatsApp: 08109015332.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ response: text });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "AI service unavailable";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
