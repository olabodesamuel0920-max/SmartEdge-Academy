"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  Upload,
  Loader2,
  RotateCcw,
  MessageCircle,
  Keyboard,
  Image as ImageIcon,
} from "lucide-react";

export default function SnapSolvePage() {
  const [mode, setMode] = useState<"choose" | "text" | "image">("choose");
  const [textQuestion, setTextQuestion] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState("image/jpeg");
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setMimeType(file.type || "image/jpeg");
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImagePreview(result);
      setImageData(result.split(",")[1]);
    };
    reader.readAsDataURL(file);
  }

  async function solve() {
    setLoading(true);
    setError("");
    setSolution("");
    try {
      const body: Record<string, string> = {};
      if (mode === "image" && imageData) {
        body.image = imageData;
        body.mimeType = mimeType;
      } else {
        body.textQuestion = `Solve this step by step:\n${textQuestion}`;
      }

      const res = await fetch("/api/snap-solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSolution(data.solution);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to solve question");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setMode("choose");
    setTextQuestion("");
    setImagePreview(null);
    setImageData(null);
    setSolution("");
    setError("");
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-light-bg">
      <div className="max-w-2xl mx-auto px-4">
        <Link
          href="/#ai-suite"
          className="inline-flex items-center gap-1 text-deep-blue hover:text-forest-green text-sm font-medium mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to AI Suite
        </Link>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Camera className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
            Snap & Solve
          </h1>
          <p className="text-gray-600">
            Upload a photo of any question or type it in — the AI solves it
            step-by-step and teaches you the concept.
          </p>
        </div>

        {solution ? (
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 mb-6">
              <h3 className="font-bold text-deep-blue text-lg mb-4">
                Solution
              </h3>
              <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                {solution}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 bg-deep-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Solve Another
              </button>
              <a
                href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20used%20Snap%20%26%20Solve%20and%20need%20more%20help%20with%20my%20studies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Get a Tutor
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">
            {mode === "choose" ? (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 text-center mb-6">
                  How do you want to input your question?
                </h3>
                <button
                  onClick={() => setMode("image")}
                  className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">
                      Upload Photo
                    </div>
                    <div className="text-sm text-gray-500">
                      Take a photo or upload an image of the question
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setMode("text")}
                  className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Keyboard className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">
                      Type Question
                    </div>
                    <div className="text-sm text-gray-500">
                      Type or paste the question manually
                    </div>
                  </div>
                </button>
              </div>
            ) : mode === "image" ? (
              <div className="space-y-4">
                <button
                  onClick={() => setMode("choose")}
                  className="text-sm text-gray-500 hover:text-deep-blue"
                >
                  &larr; Change input method
                </button>

                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Uploaded question"
                      className="w-full rounded-xl border"
                    />
                    <button
                      onClick={() => {
                        setImagePreview(null);
                        setImageData(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full text-xs"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-teal-500 hover:bg-teal-50 transition-all"
                  >
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <p className="font-medium text-gray-700">
                      Click to upload image
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      JPG, PNG or any image format
                    </p>
                  </button>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => setMode("choose")}
                  className="text-sm text-gray-500 hover:text-deep-blue"
                >
                  &larr; Change input method
                </button>
                <textarea
                  value={textQuestion}
                  onChange={(e) => setTextQuestion(e.target.value)}
                  placeholder="Type or paste your question here... e.g., 'Solve the quadratic equation 2x² + 5x - 3 = 0'"
                  className="w-full h-40 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
            )}

            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                {error}
              </div>
            )}

            {mode !== "choose" && (
              <button
                onClick={solve}
                disabled={
                  loading ||
                  (mode === "text" && !textQuestion.trim()) ||
                  (mode === "image" && !imageData)
                }
                className="w-full mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Solving...
                  </>
                ) : (
                  <>
                    <Camera className="h-5 w-5" />
                    Solve Question
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
