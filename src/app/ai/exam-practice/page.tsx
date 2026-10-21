"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  CheckCircle,
  XCircle,
  Loader2,
  Trophy,
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
const DIFFICULTIES = ["easy", "medium", "hard"];

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

export default function ExamPracticePage() {
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [finished, setFinished] = useState(false);

  async function startExam() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/exam-practice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exam, subject, difficulty, questionCount: 10 }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setQuestions(data.questions);
      setAnswers(new Array(data.questions.length).fill(null));
      setCurrentQ(0);
      setSelected(null);
      setShowResult(false);
      setFinished(false);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load questions");
    } finally {
      setLoading(false);
    }
  }

  function submitAnswer() {
    const newAnswers = [...answers];
    newAnswers[currentQ] = selected;
    setAnswers(newAnswers);
    setShowResult(true);
  }

  function nextQuestion() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  }

  function reset() {
    setQuestions([]);
    setAnswers([]);
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
  }

  const score = answers.filter(
    (a, i) => a === questions[i]?.correctAnswer
  ).length;
  const percentage = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0;

  if (finished) {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 text-center">
            <Trophy className="h-16 w-16 text-bright-yellow mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
              Exam Complete!
            </h2>
            <div className="text-4xl sm:text-6xl font-bold text-forest-green my-6">
              {percentage}%
            </div>
            <p className="text-gray-600 mb-2">
              You scored <strong>{score}</strong> out of{" "}
              <strong>{questions.length}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              {exam} {subject} — {difficulty} difficulty
            </p>

            <div className="space-y-3 mb-8 text-left">
              {questions.map((q, i) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
                    answers[i] === q.correctAnswer
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {answers[i] === q.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {q.question}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {q.explanation}
                      </p>
                      <span className="inline-block mt-1 text-xs bg-gray-100 px-2 py-0.5 rounded">
                        {q.topic}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 bg-deep-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Try Again
              </button>
              <a
                href={`https://wa.me/2348109015332?text=${encodeURIComponent(
                  `Hello SmartEdge! I just scored ${percentage}% on the AI ${exam} ${subject} practice exam. I want to improve — please tell me about your classes.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Get Help on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length > 0) {
    const q = questions[currentQ];
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={reset}
              className="text-deep-blue hover:text-forest-green text-sm font-medium flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" /> Exit
            </button>
            <span className="text-sm font-medium text-gray-500">
              {currentQ + 1} / {questions.length}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-forest-green h-2 rounded-full transition-all"
              style={{
                width: `${((currentQ + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">
            <span className="inline-block bg-deep-blue/10 text-deep-blue px-3 py-1 rounded-full text-xs font-semibold mb-4">
              {q.topic}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              {q.question}
            </h3>

            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                let style =
                  "border-gray-200 hover:border-forest-green hover:bg-forest-green/5";
                if (showResult) {
                  if (i === q.correctAnswer) style = "border-green-500 bg-green-50";
                  else if (i === selected) style = "border-red-500 bg-red-50";
                } else if (i === selected) {
                  style = "border-forest-green bg-forest-green/10";
                }
                return (
                  <button
                    key={i}
                    onClick={() => !showResult && setSelected(i)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${style}`}
                  >
                    <span className="text-sm">{opt}</span>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div
                className={`p-4 rounded-xl mb-6 ${
                  selected === q.correctAnswer
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <p className="text-sm font-medium mb-1">
                  {selected === q.correctAnswer
                    ? "Correct!"
                    : "Incorrect"}
                </p>
                <p className="text-sm text-gray-600">{q.explanation}</p>
              </div>
            )}

            {!showResult ? (
              <button
                onClick={submitAnswer}
                disabled={selected === null}
                className="w-full bg-forest-green text-white py-3 rounded-full font-semibold hover:bg-forest-green/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="w-full bg-deep-blue text-white py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
              >
                {currentQ < questions.length - 1
                  ? "Next Question"
                  : "See Results"}
              </button>
            )}
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
            AI Exam Practice Engine
          </h1>
          <p className="text-gray-600">
            Take realistic AI-generated practice exams. Get instant scoring and
            detailed explanations.
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

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Difficulty
              </label>
              <div className="grid grid-cols-3 gap-2">
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`py-2.5 rounded-xl font-medium text-sm capitalize transition-all ${
                      difficulty === d
                        ? "bg-bright-yellow text-deep-blue"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {d}
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
              onClick={startExam}
              disabled={!exam || !subject || loading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Questions...
                </>
              ) : (
                <>
                  <Target className="h-5 w-5" />
                  Start Practice Exam
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
