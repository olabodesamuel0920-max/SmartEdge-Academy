"use client";

import Link from "next/link";
import {
  Brain,
  Target,
  TrendingUp,
  Camera,
  CalendarDays,
  Users,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Rocket,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const aiTools = [
  {
    icon: Target,
    title: "AI Exam Practice Engine",
    desc: "Take realistic AI-generated practice exams for WAEC, JAMB, NECO & GCE. Choose your subject and difficulty. Get instant scoring, detailed explanations for every question, and a readiness assessment.",
    href: "/ai/exam-practice",
    gradient: "from-blue-500 to-indigo-600",
    glow: "hover:shadow-blue-500/20",
    badge: "Most Popular",
    features: ["10 AI-generated questions", "Instant scoring", "Topic-by-topic breakdown", "Detailed explanations"],
  },
  {
    icon: TrendingUp,
    title: "AI Career Prophet",
    desc: "Answer 10 personality and interest questions. Our AI predicts your top 3 career paths with exact JAMB subject combinations, university recommendations, cutoff marks, and salary expectations.",
    href: "/ai/career-prophet",
    gradient: "from-purple-500 to-pink-600",
    glow: "hover:shadow-purple-500/20",
    badge: "Mind-Blowing",
    features: ["10-question personality quiz", "3 career predictions", "JAMB subject combos", "University recommendations"],
  },
  {
    icon: Brain,
    title: "Exam Topic Predictor",
    desc: "AI analyzes 20 years of past WAEC/JAMB question patterns — topic frequencies, cycles, and trends — to predict the top 10 most likely topics for your upcoming exam.",
    href: "/ai/topic-predictor",
    gradient: "from-orange-500 to-red-500",
    glow: "hover:shadow-orange-500/20",
    badge: "Viral",
    features: ["20 years of data analysis", "Confidence percentages", "Study tips per topic", "Trend insights"],
  },
  {
    icon: Camera,
    title: "Snap & Solve",
    desc: "Upload a photo of any question from a textbook or past paper — or type it in. The AI reads the question, solves it step-by-step, and identifies which exam topic it falls under.",
    href: "/ai/snap-solve",
    gradient: "from-teal-500 to-cyan-600",
    glow: "hover:shadow-teal-500/20",
    badge: null,
    features: ["Photo or text input", "Step-by-step solutions", "Syllabus topic mapping", "Related questions"],
  },
  {
    icon: CalendarDays,
    title: "My Study Plan Generator",
    desc: "Tell the AI your exam date, subjects, available hours, and weak areas. Get a personalized week-by-week study plan with daily tasks, milestones, and progress checkpoints.",
    href: "/ai/study-plan",
    gradient: "from-green-500 to-emerald-600",
    glow: "hover:shadow-green-500/20",
    badge: null,
    features: ["Personalized weekly plan", "Daily micro-goals", "Milestone tracking", "Aligned to syllabus"],
  },
  {
    icon: Users,
    title: "Study Squad Challenge",
    desc: "Start a live AI quiz challenge! Compete against AI opponents across 3 rounds of increasing difficulty. Earn points, build streaks, and claim the leaderboard crown.",
    href: "/ai/study-squad",
    gradient: "from-rose-500 to-red-600",
    glow: "hover:shadow-rose-500/20",
    badge: "Fun",
    features: ["3 rounds of competition", "Live leaderboard", "Streak bonuses", "Increasing difficulty"],
  },
];

export default function AiSuitePage() {
  useScrollReveal();

  return (
    <>
      {/* Hero — dark, dramatic */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#07080f]" />
        <div className="absolute inset-0 noise-bg" />

        {/* Animated orbs */}
        <div className="absolute top-20 left-[15%] w-80 h-80 bg-accent-purple/15 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] animate-blob delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple px-5 py-2.5 rounded-full text-sm font-bold mb-8 animate-slide-up">
            <Sparkles className="h-4 w-4" />
            Nigeria&apos;s First AI-Powered Exam Prep Suite
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-5 sm:mb-6 animate-slide-up">
            The{" "}
            <span className="gradient-text">SmartEdge AI Suite</span>
          </h1>

          <p className="text-base sm:text-xl text-white/40 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-slide-up">
            Six mind-blowing AI tools that turn your phone into a private tutor,
            career counselor, and exam analyst. No other exam center in Nigeria
            offers anything like this.
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
            <div className="flex items-center gap-2 text-white/30">
              <Zap className="h-5 w-5 text-bright-yellow" />
              <span className="text-sm font-medium">Powered by AI</span>
            </div>
            <div className="flex items-center gap-2 text-white/30">
              <Rocket className="h-5 w-5 text-accent-cyan" />
              <span className="text-sm font-medium">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 text-white/30">
              <Star className="h-5 w-5 text-accent-pink" />
              <span className="text-sm font-medium">Free to Use</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 sm:py-24 bg-[#07080f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              const isReversed = index % 2 !== 0;

              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className={`reveal group block glass-card rounded-3xl p-1 hover:shadow-2xl ${tool.glow} transition-all`}
                >
                  <div
                    className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-stretch`}
                  >
                    {/* Gradient side */}
                    <div
                      className={`bg-gradient-to-br ${tool.gradient} md:w-2/5 p-6 sm:p-8 md:p-10 rounded-t-[1.25rem] md:rounded-t-none ${isReversed ? "md:rounded-r-[1.25rem]" : "md:rounded-l-[1.25rem]"} flex flex-col justify-center items-center text-center`}
                    >
                      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                        <Icon className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                      </div>
                      <h3 className="font-black text-white text-xl sm:text-2xl mb-2">
                        {tool.title}
                      </h3>
                      {tool.badge && (
                        <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    {/* Content side */}
                    <div className="md:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        {tool.desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        {tool.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-xs sm:text-sm text-white/40"
                          >
                            <div className="w-1.5 h-1.5 bg-bright-yellow rounded-full shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-bright-yellow font-bold group-hover:gap-3 transition-all">
                        Launch Tool
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Chat Tutor callout */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-accent-purple to-accent-pink relative overflow-hidden">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
          <MessageSquare className="h-10 sm:h-14 w-10 sm:w-14 text-white/80 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 sm:mb-4">
            Plus: AI Chat Tutor
          </h2>
          <p className="text-white/70 text-lg mb-4 max-w-xl mx-auto">
            There&apos;s also a floating AI tutor available on every page. Click
            the chat icon in the bottom-left corner to ask any question about
            WAEC, NECO, or JAMB subjects and get instant help.
          </p>
          <p className="text-white/50 text-sm">
            Look for the chat bubble on the bottom-left of your screen.
          </p>
        </div>
      </section>
    </>
  );
}
