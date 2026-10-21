"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Loader2,
  CheckCircle,
  Clock,
  BookOpen,
  RotateCcw,
  MessageCircle,
  Target,
} from "lucide-react";

const EXAMS = ["WAEC", "NECO", "JAMB", "GCE"];
const ALL_SUBJECTS = [
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

interface Task {
  subject: string;
  topic: string;
  duration: string;
  activity: string;
}

interface Day {
  day: string;
  tasks: Task[];
}

interface Week {
  week: number;
  theme: string;
  days: Day[];
}

interface Milestone {
  week: number;
  goal: string;
  checkpoint: string;
}

interface StudyPlan {
  overview: {
    totalWeeks: number;
    examDate: string;
    dailyHours: number;
    subjects: string[];
  };
  weeks: Week[];
  tips: string[];
  milestones: Milestone[];
}

export default function StudyPlanPage() {
  const [exam, setExam] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [examDate, setExamDate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState(4);
  const [weakAreas, setWeakAreas] = useState("");
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedWeek, setExpandedWeek] = useState<number | null>(0);

  function toggleSubject(s: string) {
    setSubjects((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function generate() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/study-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exam, subjects, examDate, hoursPerDay, weakAreas }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPlan(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to generate plan");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setPlan(null);
    setExpandedWeek(0);
  }

  if (plan) {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
              Your Personalized Study Plan
            </h1>
            <p className="text-gray-500 text-sm">
              {plan.overview.totalWeeks} weeks • {plan.overview.dailyHours}{" "}
              hours/day • Exam: {plan.overview.examDate}
            </p>
          </div>

          {plan.milestones && plan.milestones.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
              <h3 className="font-bold text-deep-blue flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-forest-green" />
                Milestones
              </h3>
              <div className="space-y-3">
                {plan.milestones.map((m) => (
                  <div
                    key={m.week}
                    className="flex items-start gap-3 bg-green-50 rounded-xl p-3"
                  >
                    <span className="shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      W{m.week}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {m.goal}
                      </p>
                      <p className="text-xs text-gray-500">{m.checkpoint}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4 mb-8">
            {plan.weeks.map((week) => (
              <div
                key={week.week}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedWeek(
                      expandedWeek === week.week - 1 ? null : week.week - 1
                    )
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="text-xs font-bold text-forest-green">
                      WEEK {week.week}
                    </span>
                    <h3 className="font-semibold text-deep-blue">
                      {week.theme}
                    </h3>
                  </div>
                  <span className="text-gray-400">
                    {expandedWeek === week.week - 1 ? "−" : "+"}
                  </span>
                </button>

                {expandedWeek === week.week - 1 && (
                  <div className="px-5 pb-5 space-y-4">
                    {week.days.map((day) => (
                      <div key={day.day}>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-forest-green" />
                          {day.day}
                        </h4>
                        <div className="space-y-2 ml-6">
                          {day.tasks.map((task, i) => (
                            <div
                              key={i}
                              className="bg-light-bg rounded-xl p-3 flex items-start gap-3"
                            >
                              <div className="shrink-0 mt-0.5">
                                <CheckCircle className="h-4 w-4 text-gray-300" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-bold text-deep-blue bg-deep-blue/10 px-2 py-0.5 rounded">
                                    {task.subject}
                                  </span>
                                  <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {task.duration}
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-gray-700">
                                  {task.topic}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {task.activity}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {plan.tips && plan.tips.length > 0 && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Study Tips
              </h3>
              <ul className="space-y-2">
                {plan.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                    <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-deep-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Generate New Plan
            </button>
            <a
              href={`https://wa.me/2348109015332?text=${encodeURIComponent(
                `Hello SmartEdge! I generated an AI study plan for ${exam} (${subjects.join(", ")}). I want to join your classes to complement my preparation.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Join SmartEdge Classes
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
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CalendarDays className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
            My Study Plan
          </h1>
          <p className="text-gray-600">
            Tell the AI your exam details and get a personalized week-by-week
            study plan.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Exam
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
                Subjects (select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {ALL_SUBJECTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSubject(s)}
                    className={`py-2.5 px-3 rounded-xl font-medium text-sm transition-all text-left ${
                      subjects.includes(s)
                        ? "bg-forest-green text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {subjects.includes(s) ? "✓ " : ""}
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Exam Date
              </label>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hours available per day: {hoursPerDay}
              </label>
              <input
                type="range"
                min={1}
                max={10}
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full accent-forest-green"
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>1 hour</span>
                <span>10 hours</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Weak areas (optional)
              </label>
              <textarea
                value={weakAreas}
                onChange={(e) => setWeakAreas(e.target.value)}
                placeholder="e.g., Trigonometry, Organic Chemistry, Essay writing..."
                className="w-full h-20 p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={generate}
              disabled={!exam || subjects.length === 0 || !examDate || loading}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Study Plan...
                </>
              ) : (
                <>
                  <CalendarDays className="h-5 w-5" />
                  Generate My Plan
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
