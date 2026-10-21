import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { exam, subject, difficulty, roundNumber } = await request.json();

    if (!exam || !subject) {
      return NextResponse.json(
        { error: "Exam and subject are required" },
        { status: 400 }
      );
    }

    const round = roundNumber || 1;
    const level = difficulty || "medium";

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2048,
      system: `You are a quiz game master for Nigerian students. Generate fun, competitive quiz questions for group study sessions. Questions should be challenging but fair, based on the Nigerian exam syllabus.`,
      messages: [
        {
          role: "user",
          content: `Generate 5 ${level}-difficulty quiz questions for a Study Squad challenge.
Exam: ${exam}, Subject: ${subject}, Round: ${round}

Return ONLY a valid JSON object (no markdown, no code blocks) in this format:
{
  "round": ${round},
  "questions": [
    {
      "id": 1,
      "question": "Question text",
      "options": ["A) option", "B) option", "C) option", "D) option"],
      "correctAnswer": 0,
      "points": 10,
      "timeLimit": 30,
      "funFact": "An interesting fact related to this question"
    }
  ],
  "roundTheme": "A fun name for this round"
}

Make questions engaging and competitive. correctAnswer is 0-based index. timeLimit is in seconds.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "{}";

    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to generate quiz";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
