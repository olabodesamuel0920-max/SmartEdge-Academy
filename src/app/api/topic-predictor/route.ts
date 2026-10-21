import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { exam, subject, year } = await request.json();

    if (!exam || !subject) {
      return NextResponse.json(
        { error: "Exam and subject are required" },
        { status: 400 }
      );
    }

    const targetYear = year || new Date().getFullYear();

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: `You are an expert analyst of Nigerian examination patterns. You have deep knowledge of WAEC, NECO, JAMB, and GCE exam patterns, topic frequencies, and syllabus coverage over the past 20 years. Provide data-driven predictions about likely exam topics.`,
      messages: [
        {
          role: "user",
          content: `Analyze the topic patterns for ${exam} ${subject} and predict the most likely topics for ${targetYear}.

Return ONLY a valid JSON object (no markdown, no code blocks) in this format:
{
  "predictions": [
    {
      "rank": 1,
      "topic": "Topic name",
      "confidence": 92,
      "reasoning": "Why this topic is likely to appear",
      "lastAppeared": "2023",
      "frequency": "Appeared 8 out of last 10 years",
      "studyTips": "How to prepare for this topic"
    }
  ],
  "generalAdvice": "Overall advice for preparing for this subject",
  "focusAreas": ["Area 1", "Area 2", "Area 3"],
  "disclaimer": "These predictions are based on historical pattern analysis and should be used as a study guide, not a guarantee."
}

Provide exactly 10 topic predictions sorted by confidence percentage. Be realistic about confidence levels.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "{}";

    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to predict topics";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
