import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { answers } = await request.json();

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: "Answers array is required" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: `You are an expert Nigerian career counselor and education advisor. You understand the Nigerian university system (JAMB, Post-UTME), career paths, and the relationship between O-Level subjects and career choices. Provide advice tailored to the Nigerian context.`,
      messages: [
        {
          role: "user",
          content: `Based on these student responses, predict their ideal career paths and provide actionable guidance:

${answers.map((a: { question: string; answer: string }, i: number) => `Q${i + 1}: ${a.question}\nA: ${a.answer}`).join("\n\n")}

Return ONLY a valid JSON object (no markdown, no code blocks) in this format:
{
  "careers": [
    {
      "title": "Career name",
      "match": 95,
      "description": "Why this career fits",
      "jambSubjects": ["Subject1", "Subject2", "Subject3", "Subject4"],
      "jambCutoff": 250,
      "topUniversities": ["University1", "University2", "University3"],
      "oLevelRequirements": "Required O-Level grades",
      "salary": "Expected salary range in Nigeria"
    }
  ],
  "studyAdvice": "Personalized study advice for the student",
  "strengths": ["Strength 1", "Strength 2", "Strength 3"]
}

Provide exactly 3 career recommendations sorted by match percentage.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "{}";

    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to predict careers";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
