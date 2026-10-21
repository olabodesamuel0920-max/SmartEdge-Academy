"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Loader2,
  TrendingUp,
  AlertTriangle,
  BookOpen,
  RotateCcw,
  MessageCircle,
} from "lucide-react";

const EXAMS = ["WAEC", "NECO", "JAMB", "GCE"];
const SUBJECTS = [
  "Mathematics",
  "English Language",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Government",
  "Literature in English",
  "Further Mathematics",
  "Agricultural Science",
  "Commerce",
  "Accounting",
  "Civic Education",
  "Geography",
];

interface Prediction {
  rank: number;
  topic: string;
  confidence: number;
  reasoning: string;
  lastAppeared: string;
  frequency: string;
  studyTips: string;
}

interface Result {
  predictions: Prediction[];
  generalAdvice: string;
  focusAreas: string[];
  disclaimer: string;
}

export default function TopicPredictorPage() {
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function predict() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/topic-predictor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exam,
          subject,
          year: new Date().getFullYear(),
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to predict topics");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setResult(null);
    setExam("");
    setSubject("");
  }

  function confidenceColor(c: number) {
    if (c >= 80) return "text-green-600 bg-green-50";
    if (c >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-orange-600 bg-orange-50";
  }

  function confidenceBar(c: number) {
    if (c >= 80) return "bg-green-500";
    if (c >= 60) return "bg-yellow-500";
    return "bg-orange-500";
  }

  if (result) {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
              {exam} {subject} — Topic Predictions{" "}
              {new Date().getFullYear()}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {result.focusAreas.map((area) => (
                <span
                  key={area}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {result.predictions.map((p) => (
              <div
                key={p.rank}
                className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${confidenceColor(p.confidence)}`}
                  >
                    #{p.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-deep-blue">{p.topic}</h3>
                      <span
                        className={`text-sm font-bold px-2 py-0.5 rounded ${confidenceColor(p.confidence)}`}
                      >
                        {p.confidence}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
                      <div
                        className={`h-1.5 rounded-full ${confidenceBar(p.confidence)}`}
                        style={{ width: `${p.confidence}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{p.reasoning}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span>Last appeared: {p.lastAppeared}</span>
                      <span>•</span>
                      <span>{p.frequency}</span>
                    </div>
                    <div className="mt-3 bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center gap-1 mb-1">
                        <BookOpen className="h-3 w-3 text-blue-500" />
                        <span className="text-xs font-semibold text-blue-700">
                          Study Tip
                        </span>
                      </div>
                      <p className="text-xs text-blue-600">{p.studyTips}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center mb-4">
            <h3 className="font-bold text-lg mb-2">Expert Advice</h3>
            <p className="text-white/90 text-sm">{result.generalAdvice}</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-700">{result.disclaimer}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-deep-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Predict Another Subject
            </button>
            <a
              href={`https://wa.me/2348109015332?text=${encodeURIComponent(
                `Hello SmartEdge! I used the AI Topic Predictor for ${exam} ${subject}. I want to prepare for these topics with your tutors.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Prepare with SmartEdge
            </a>
          </div>
        </div>
      </div>
    );
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
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
            Exam Topic Predictor
          </h1>
          <p className="text-gray-600">
            AI analyzes past exam patterns to predict the most likely topics for
            your upcoming exam.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Exam
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {EXAMS.map((e) => (
                  <button
                    key={e}
                    onClick={() => setExam(e)}
                    className={`py-2.5 rounded-xl font-medium text-sm transition-all ${
                      exam === e
                        ? "bg-deep-blue text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Subject
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SUBJECTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`py-2.5 px-3 rounded-xl font-medium text-sm transition-all text-left ${
                      subject === s
                        ? "bg-forest-green text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={predict}
              disabled={!exam || !subject || loading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyzing Patterns...
                </>
              ) : (
                <>
                  <TrendingUp className="h-5 w-5" />
                  Predict Topics
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
