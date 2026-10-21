"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  GraduationCap,
  Monitor,
  ShoppingBag,
  Brain,
  Target,
  TrendingUp,
  Camera,
  CalendarDays,
  Users,
  Sparkles,
  Star,
  BookOpen,
  Zap,
  ChevronRight,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const aiTools = [
  {
    icon: Target,
    title: "AI Exam Practice",
    desc: "Realistic AI-generated WAEC, JAMB & NECO practice exams with instant scoring.",
    href: "/ai/exam-practice",
    gradient: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/25",
  },
  {
    icon: TrendingUp,
    title: "Career Prophet",
    desc: "Discover your ideal career path with JAMB subject combos and university recs.",
    href: "/ai/career-prophet",
    gradient: "from-purple-500 to-pink-600",
    glow: "group-hover:shadow-purple-500/25",
  },
  {
    icon: Brain,
    title: "Topic Predictor",
    desc: "AI predicts the most likely exam topics based on 20 years of past paper patterns.",
    href: "/ai/topic-predictor",
    gradient: "from-orange-500 to-red-500",
    glow: "group-hover:shadow-orange-500/25",
  },
  {
    icon: Camera,
    title: "Snap & Solve",
    desc: "Upload a photo of any question — AI solves it step-by-step and teaches you.",
    href: "/ai/snap-solve",
    gradient: "from-teal-500 to-cyan-600",
    glow: "group-hover:shadow-teal-500/25",
  },
  {
    icon: CalendarDays,
    title: "My Study Plan",
    desc: "Personalized week-by-week study plans mapped to your exam syllabus.",
    href: "/ai/study-plan",
    gradient: "from-green-500 to-emerald-600",
    glow: "group-hover:shadow-green-500/25",
  },
  {
    icon: Users,
    title: "Study Squad",
    desc: "Challenge friends to live AI quiz battles! 3 rounds of increasing difficulty.",
    href: "/ai/study-squad",
    gradient: "from-rose-500 to-red-600",
    glow: "group-hover:shadow-rose-500/25",
  },
];

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-[#0c1f3d] to-[#0a1628]" />
        <div className="absolute inset-0 noise-bg" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-accent-purple/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-accent-cyan/15 rounded-full blur-[120px] animate-blob delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bright-yellow/5 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm text-bright-yellow/90 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-slide-up">
                <Sparkles className="h-4 w-4" />
                <span>Now with AI-Powered Study Tools</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-5 sm:mb-6 animate-slide-up">
                Building Minds,
                <span className="block gradient-text mt-1 sm:mt-2">
                  Shaping Futures
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/50 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up">
                Excel in WAEC, NECO, GCE & JAMB with expert tutors, flexible
                classes, and Nigeria&apos;s first AI-powered exam prep suite.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up">
                <a
                  href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20register%20for%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 animate-pulse-glow"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start on WhatsApp
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/ai"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-purple/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all"
                >
                  <Brain className="h-5 w-5 text-accent-purple" />
                  Explore AI Tools
                </Link>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 via-accent-cyan/20 to-bright-yellow/20 rounded-3xl blur-2xl animate-gradient" />

                <div className="relative glass-card rounded-3xl p-2 overflow-hidden">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/brand-1.jpg"
                      alt="SmartEdge Academy students"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Float card 1 */}
                <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">500+</div>
                      <div className="text-[11px] text-white/50">
                        Students Passed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Float card 2 */}
                <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        AI-Powered
                      </div>
                      <div className="text-[11px] text-white/50">
                        Study Tools
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-12 sm:mt-20 glass-card rounded-2xl p-5 sm:p-8 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              <AnimatedCounter target={500} suffix="+" label="Students Passed" />
              <AnimatedCounter target={15} suffix="+" label="Expert Tutors" />
              <AnimatedCounter target={98} suffix="%" label="Success Rate" />
              <AnimatedCounter target={6} suffix="" label="AI Study Tools" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE OFFER — Quick links ===== */}
      <section className="py-14 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-forest-green font-bold text-sm tracking-widest uppercase mb-3">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-deep-blue">
              Everything You Need to{" "}
              <span className="gradient-text-blue">Succeed</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {[
              {
                icon: GraduationCap,
                title: "Academy",
                desc: "Expert-led WAEC, NECO, GCE & JAMB prep classes with flexible schedules.",
                href: "/academy",
                color: "from-deep-blue to-deep-blue-light",
                iconBg: "bg-bright-yellow",
                iconColor: "text-deep-blue",
              },
              {
                icon: Monitor,
                title: "E-Services",
                desc: "Scratch cards, verification PINs, JAMB portal services — delivered fast.",
                href: "/e-services",
                color: "from-forest-green to-forest-green-dark",
                iconBg: "bg-white",
                iconColor: "text-forest-green",
              },
              {
                icon: ShoppingBag,
                title: "Bookstore",
                desc: "Premium Platinum Series 12-in-One SSCE study books, retail & wholesale.",
                href: "/bookstore",
                color: "from-accent-purple to-purple-700",
                iconBg: "bg-bright-yellow",
                iconColor: "text-accent-purple",
              },
              {
                icon: Brain,
                title: "AI Suite",
                desc: "6 mind-blowing AI tools: practice exams, career prediction, topic forecasting & more.",
                href: "/ai",
                color: "from-accent-pink to-rose-600",
                iconBg: "bg-white",
                iconColor: "text-accent-pink",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group card-3d reveal"
                >
                  <div
                    className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 h-full text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div
                      className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-5`}
                    >
                      <Icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/90 group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AI SUITE SHOWCASE ===== */}
      <section className="py-14 sm:py-24 relative overflow-hidden bg-deep-blue">
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="h-4 w-4" />
              Powered by AI
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              The <span className="gradient-text">SmartEdge AI Suite</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-lg">
              Six mind-blowing AI tools that turn your phone into a private
              tutor. No other exam center in Nigeria offers this.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {aiTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className={`group card-3d reveal glass-card rounded-2xl p-6 hover:shadow-2xl ${tool.glow} transition-all`}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {tool.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-bright-yellow group-hover:gap-2 transition-all">
                    Try Now
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              href="/ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple to-accent-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-accent-purple/25 hover:scale-105 transition-all"
            >
              <Brain className="h-5 w-5" />
              Explore Full AI Suite
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ACADEMY PREVIEW ===== */}
      <section className="py-14 sm:py-24 bg-light-bg relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="inline-block text-forest-green font-bold text-sm tracking-widest uppercase mb-3">
                Our Academy
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-deep-blue mb-4 sm:mb-6">
                Physical Exam Prep{" "}
                <span className="gradient-text-blue">Classes</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Join hundreds of students who crushed their exams through our
                structured, expert-led classes. Morning and afternoon sessions,
                flexible payment, and a conducive learning environment.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["SSCE", "WAEC", "NECO", "GCE", "JAMB/UTME"].map((exam) => (
                  <span
                    key={exam}
                    className="bg-deep-blue text-white px-4 py-2 rounded-full text-sm font-bold"
                  >
                    {exam}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-400 mb-1">Morning</div>
                  <div className="font-bold text-deep-blue">8AM – 1PM</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-xs text-gray-400 mb-1">Afternoon</div>
                  <div className="font-bold text-deep-blue">4PM – 6PM</div>
                </div>
              </div>

              <Link
                href="/academy"
                className="inline-flex items-center gap-2 bg-forest-green text-white px-7 py-3.5 rounded-full font-bold hover:bg-forest-green-dark transition-colors hover:shadow-lg hover:shadow-forest-green/20"
              >
                View Full Academy Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative reveal">
              <div className="absolute -inset-4 bg-gradient-to-r from-forest-green/10 to-accent-cyan/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/brand-2.jpg"
                  alt="SmartEdge Academy classroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card-light rounded-xl p-4 flex items-center gap-3">
                    <Star className="h-8 w-8 text-bright-yellow fill-bright-yellow" />
                    <div>
                      <div className="font-bold text-deep-blue">
                        98% Success Rate
                      </div>
                      <div className="text-xs text-gray-500">
                        Across all exam types
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== E-SERVICES + BOOKSTORE PREVIEW ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* E-Services Card */}
            <Link href="/e-services" className="group card-3d reveal">
              <div className="bg-gradient-to-br from-deep-blue to-[#1a3a5c] rounded-3xl p-8 sm:p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-bright-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <Monitor className="h-10 w-10 text-bright-yellow mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Digital E-Services
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed">
                  WAEC/NECO scratch cards, verification PINs, JAMB portal
                  services, certificate retrieval — all genuine, delivered fast.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "WAEC Cards",
                    "NECO Cards",
                    "JAMB Portal",
                    "Verification PINs",
                  ].map((s) => (
                    <span
                      key={s}
                      className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-bright-yellow font-semibold group-hover:gap-2 transition-all">
                  Browse Services <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Bookstore Card */}
            <Link href="/bookstore" className="group card-3d reveal">
              <div className="bg-gradient-to-br from-accent-purple to-purple-800 rounded-3xl p-8 sm:p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <BookOpen className="h-10 w-10 text-bright-yellow mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Bookstore
                </h3>
                <p className="text-white/50 mb-6 leading-relaxed">
                  Platinum Series: 12-in-One SSCE Extra — the ultimate study
                  companion for SS1–SS3. Retail and wholesale available.
                </p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-bright-yellow fill-bright-yellow"
                    />
                  ))}
                  <span className="text-white/50 text-sm ml-2">Bestseller</span>
                </div>
                <span className="inline-flex items-center gap-1 text-bright-yellow font-semibold group-hover:gap-2 transition-all">
                  Visit Bookstore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-14 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green via-emerald-600 to-green-500 animate-gradient" />
        <div className="absolute inset-0 noise-bg" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <MessageCircle className="h-10 sm:h-14 w-10 sm:w-14 text-white/80 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/70 text-sm sm:text-lg mb-6 sm:mb-10 max-w-xl mx-auto">
              Join the hundreds of students who&apos;ve transformed their academic
              future with SmartEdge. One message is all it takes.
            </p>
            <a
              href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20register%20for%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-forest-green hover:bg-bright-yellow hover:text-deep-blue px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-base sm:text-xl font-black transition-all hover:scale-105 hover:shadow-2xl"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
