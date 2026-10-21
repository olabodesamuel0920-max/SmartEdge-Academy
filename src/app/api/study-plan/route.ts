import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { exam, subjects, examDate, hoursPerDay, weakAreas } =
      await request.json();

    if (!exam || !subjects || !examDate) {
      return NextResponse.json(
        { error: "Exam, subjects, and exam date are required" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: `You are an expert study planner for Nigerian students. Create detailed, actionable study plans based on the official WAEC/NECO/JAMB syllabus. Plans should be realistic and account for rest days. Use Nigerian educational context.`,
      messages: [
        {
          role: "user",
          content: `Create a personalized study plan:
- Exam: ${exam}
- Subjects: ${subjects.join(", ")}
- Exam Date: ${examDate}
- Available Hours/Day: ${hoursPerDay || 4}
- Weak Areas: ${weakAreas || "None specified"}

Return ONLY a valid JSON object (no markdown, no code blocks) in this format:
{
  "overview": {
    "totalWeeks": 8,
    "examDate": "${examDate}",
    "dailyHours": ${hoursPerDay || 4},
    "subjects": ["Subject1", "Subject2"]
  },
  "weeks": [
    {
      "week": 1,
      "theme": "Foundation & Basics",
      "days": [
        {
          "day": "Monday",
          "tasks": [
            {
              "subject": "Mathematics",
              "topic": "Algebra - Linear Equations",
              "duration": "2 hours",
              "activity": "Study notes + practice 20 questions"
            }
          ]
        }
      ]
    }
  ],
  "tips": ["Tip 1", "Tip 2", "Tip 3"],
  "milestones": [
    {
      "week": 2,
      "goal": "Complete all Algebra topics",
      "checkpoint": "Take a 30-question practice test"
    }
  ]
}

Create a realistic plan for the first 4 weeks. Include 5 study days per week (Mon-Fri) with specific daily tasks.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "{}";

    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to create study plan";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
