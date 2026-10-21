"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Loader2,
  GraduationCap,
  Building,
  BookOpen,
  Briefcase,
  Star,
  ArrowRight,
  RotateCcw,
  MessageCircle,
} from "lucide-react";

const QUESTIONS = [
  {
    question: "Which school subjects do you enjoy the most?",
    options: [
      "Mathematics & Further Maths",
      "Sciences (Physics, Chemistry, Biology)",
      "Arts & Literature",
      "Commercial subjects (Economics, Accounting)",
      "Social Sciences (Government, History)",
    ],
  },
  {
    question: "What activities excite you outside school?",
    options: [
      "Building or fixing things",
      "Reading and writing",
      "Helping people with problems",
      "Trading, business ideas, or making money",
      "Coding, gadgets, or technology",
    ],
  },
  {
    question: "In a group project, you usually...",
    options: [
      "Lead and organize everyone",
      "Do the research and analysis",
      "Handle the creative/design parts",
      "Present and speak for the group",
      "Solve the technical challenges",
    ],
  },
  {
    question: "Which environment would you thrive in?",
    options: [
      "Hospital or healthcare facility",
      "Office or corporate environment",
      "Laboratory or research center",
      "Courtroom or government",
      "Tech company or startup",
    ],
  },
  {
    question: "What matters most to you in a career?",
    options: [
      "High salary and financial security",
      "Helping and serving others",
      "Innovation and creating new things",
      "Power, influence, and leadership",
      "Knowledge and continuous learning",
    ],
  },
  {
    question: "Your best O-Level grades are likely in...",
    options: [
      "Maths, Physics, Chemistry",
      "English, Literature, Government",
      "Biology, Chemistry, Physics",
      "Economics, Accounting, Commerce",
      "Maths, Economics, Geography",
    ],
  },
  {
    question: "If money wasn't an issue, you'd spend your time...",
    options: [
      "Inventing and building things",
      "Running a business empire",
      "Treating and caring for people",
      "Fighting for justice and rights",
      "Creating art, music, or content",
    ],
  },
  {
    question: "How do you handle challenges?",
    options: [
      "Analyze data and find logical solutions",
      "Talk it out and negotiate",
      "Research and experiment until I figure it out",
      "Take charge and make quick decisions",
      "Think creatively for alternative approaches",
    ],
  },
  {
    question: "Which Nigerian role model inspires you?",
    options: [
      "Dangote (Business & Industry)",
      "Prof. Wole Soyinka (Literature & Arts)",
      "Dr. Adadevoh (Medicine & Health)",
      "Ngozi Okonjo-Iweala (Economics & Policy)",
      "Mark Essien / Bosun Tijani (Tech & Innovation)",
    ],
  },
  {
    question: "Your dream contribution to Nigeria would be...",
    options: [
      "Building world-class infrastructure",
      "Improving the education system",
      "Advancing healthcare and saving lives",
      "Growing the economy and creating jobs",
      "Putting Nigeria on the global tech map",
    ],
  },
];

interface Career {
  title: string;
  match: number;
  description: string;
  jambSubjects: string[];
  jambCutoff: number;
  topUniversities: string[];
  oLevelRequirements: string;
  salary: string;
}

interface Result {
  careers: Career[];
  studyAdvice: string;
  strengths: string[];
}

export default function CareerProphetPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<{ question: string; answer: string }[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function selectAnswer(answer: string) {
    const newAnswers = [
      ...answers,
      { question: QUESTIONS[currentQ].question, answer },
    ];
    setAnswers(newAnswers);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      submitAnswers(newAnswers);
    }
  }

  async function submitAnswers(finalAnswers: { question: string; answer: string }[]) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/career-prophet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to predict careers");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
    setError("");
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-purple-500 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-bold text-deep-blue mb-2">
            The AI Career Prophet is analyzing...
          </h2>
          <p className="text-gray-500">Mapping your ideal career paths</p>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
              Your Career Prophecy
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {result.strengths.map((s) => (
                <span
                  key={s}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 mb-8">
            {result.careers.map((career, i) => (
              <div
                key={career.title}
                className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-purple-500">
                      #{i + 1} MATCH
                    </span>
                    <h3 className="text-xl font-bold text-deep-blue">
                      {career.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-forest-green">
                      {career.match}%
                    </div>
                    <div className="text-xs text-gray-500">match</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {career.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-light-bg rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-deep-blue" />
                      <span className="text-xs font-semibold text-deep-blue">
                        JAMB Subjects
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {career.jambSubjects.map((s) => (
                        <span
                          key={s}
                          className="bg-deep-blue/10 text-deep-blue px-2 py-0.5 rounded text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Cutoff: {career.jambCutoff}+
                    </p>
                  </div>

                  <div className="bg-light-bg rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-4 w-4 text-deep-blue" />
                      <span className="text-xs font-semibold text-deep-blue">
                        Top Universities
                      </span>
                    </div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {career.topUniversities.map((u) => (
                        <li key={u}>• {u}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-light-bg rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-deep-blue" />
                      <span className="text-xs font-semibold text-deep-blue">
                        O-Level Needs
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      {career.oLevelRequirements}
                    </p>
                  </div>

                  <div className="bg-light-bg rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-deep-blue" />
                      <span className="text-xs font-semibold text-deep-blue">
                        Salary Range
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{career.salary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white text-center mb-6">
            <Star className="h-8 w-8 mx-auto mb-3 opacity-90" />
            <h3 className="font-bold text-lg mb-2">Study Advice</h3>
            <p className="text-white/90 text-sm">{result.studyAdvice}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-deep-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </button>
            <a
              href={`https://wa.me/2348109015332?text=${encodeURIComponent(
                `Hello SmartEdge! The AI Career Prophet recommended ${result.careers[0]?.title} for me. I need guidance on preparing for JAMB and choosing the right subjects.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Get Career Guidance
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

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
            AI Career Prophet
          </h1>
          <p className="text-gray-600">
            Answer 10 questions and let AI predict your ideal career path with
            JAMB subject recommendations.
          </p>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all"
            style={{
              width: `${((currentQ + 1) / QUESTIONS.length) * 100}%`,
            }}
          />
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">
          <span className="text-sm text-gray-400">
            Question {currentQ + 1} of {QUESTIONS.length}
          </span>
          <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-6">
            {QUESTIONS[currentQ].question}
          </h3>

          <div className="space-y-3">
            {QUESTIONS[currentQ].options.map((opt) => (
              <button
                key={opt}
                onClick={() => selectAnswer(opt)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all text-sm"
              >
                {opt}
              </button>
            ))}
          </div>

          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
