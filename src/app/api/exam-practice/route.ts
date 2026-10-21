import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { exam, subject, difficulty, questionCount } = await request.json();

    if (!exam || !subject) {
      return NextResponse.json(
        { error: "Exam and subject are required" },
        { status: 400 }
      );
    }

    const count = questionCount || 10;
    const level = difficulty || "medium";

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: `You are an expert Nigerian exam question generator. Generate realistic exam-style questions that match the actual format, difficulty, and syllabus of Nigerian examinations (WAEC, NECO, JAMB, GCE). Use Nigerian educational context.`,
      messages: [
        {
          role: "user",
          content: `Generate exactly ${count} ${level}-difficulty multiple choice questions for the ${exam} exam, subject: ${subject}.

Return ONLY a valid JSON object (no markdown, no code blocks) in this exact format:
{
  "questions": [
    {
      "id": 1,
      "question": "The question text",
      "options": ["A) option", "B) option", "C) option", "D) option"],
      "correctAnswer": 0,
      "explanation": "Brief explanation of why this is correct",
      "topic": "The syllabus topic this covers"
    }
  ]
}

Make questions realistic and similar to actual ${exam} past questions. correctAnswer is the 0-based index of the correct option.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "{}";

    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to generate questions";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
