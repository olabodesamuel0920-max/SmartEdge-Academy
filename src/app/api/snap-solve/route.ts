import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { image, mimeType, textQuestion } = await request.json();

    if (!image && !textQuestion) {
      return NextResponse.json(
        { error: "An image or text question is required" },
        { status: 400 }
      );
    }

    const content: Anthropic.Messages.ContentBlockParam[] = [];

    if (image) {
      content.push({
        type: "image",
        source: {
          type: "base64",
          media_type: mimeType || "image/jpeg",
          data: image,
        },
      });
      content.push({
        type: "text",
        text: "Read the question(s) in this image and solve them step by step. If there are multiple questions, solve each one.",
      });
    } else {
      content.push({
        type: "text",
        text: textQuestion,
      });
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: `You are a brilliant tutor helping Nigerian students solve exam questions. Solve every question step-by-step with clear explanations. Use simple English. After solving, identify which WAEC/JAMB syllabus topic the question falls under and suggest related topics to study. Format your response with clear headings and numbered steps.`,
      messages: [
        {
          role: "user",
          content,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ solution: text });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to solve question";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
