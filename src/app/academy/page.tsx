"use client";

import Image from "next/image";
import {
  Clock,
  Users,
  CreditCard,
  BookOpen,
  Sparkles,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  GraduationCap,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const exams = [
  { name: "SSCE", color: "from-blue-500 to-blue-600", students: "200+" },
  { name: "WAEC", color: "from-green-500 to-green-600", students: "180+" },
  { name: "NECO", color: "from-purple-500 to-purple-600", students: "150+" },
  { name: "GCE", color: "from-orange-500 to-orange-600", students: "80+" },
  { name: "JAMB/UTME", color: "from-red-500 to-red-600", students: "200+" },
];

const features = [
  {
    icon: Clock,
    title: "Flexible Schedules",
    desc: "Morning session (8AM–1PM) and Afternoon/Evening session (4PM–6PM), Monday to Friday. Choose what works for you.",
  },
  {
    icon: Users,
    title: "Qualified Expert Tutors",
    desc: "Experienced educators who are passionate about your success. Small class sizes for personalized attention.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Plans",
    desc: "Affordable fees with convenient payment plans. No student gets turned away — we work with your budget.",
  },
  {
    icon: BookOpen,
    title: "Conducive Learning Environment",
    desc: "Well-equipped, air-conditioned classrooms designed for focused, distraction-free learning.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Study Tools",
    desc: "Complement your classes with our AI suite — practice exams, topic predictions, study plans, and more.",
  },
  {
    icon: Target,
    title: "Exam-Focused Curriculum",
    desc: "Our syllabus is mapped directly to WAEC/NECO/JAMB requirements. Every minute of class time counts.",
  },
];

const subjects = [
  "Mathematics",
  "English Language",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Government",
  "Literature",
  "Further Maths",
  "Accounting",
  "Commerce",
  "Geography",
  "Civic Education",
  "Agricultural Sci.",
];

export default function AcademyPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-[#0c1f3d] to-forest-green-dark" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-green/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-bright-yellow px-4 py-2 rounded-full text-sm font-medium mb-5 sm:mb-6">
                <GraduationCap className="h-4 w-4" />
                Physical Exam Prep
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                Expert-Led Classes for{" "}
                <span className="gradient-text">Exam Excellence</span>
              </h1>
              <p className="text-base sm:text-lg text-white/50 mb-6 sm:mb-8 leading-relaxed">
                Structured preparation programs for all major Nigerian exams.
                Our students don&apos;t just pass — they excel.
              </p>
              <a
                href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20register%20for%20exam%20prep%20classes.%20Please%20share%20the%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all hover:shadow-xl hover:shadow-green-500/25 animate-pulse-glow"
              >
                <MessageCircle className="h-5 w-5" />
                Register via WhatsApp
              </a>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/brand-4.jpg"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-deep-blue border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <AnimatedCounter target={500} suffix="+" label="Students Passed" />
          <AnimatedCounter target={15} suffix="+" label="Expert Tutors" />
          <AnimatedCounter target={98} suffix="%" label="Success Rate" />
          <AnimatedCounter target={5} suffix="" label="Exam Types" />
        </div>
      </section>

      {/* Exam Programs */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-deep-blue mb-4">
              Exam Programs
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Comprehensive preparation for every major Nigerian examination.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger-children">
            {exams.map((exam) => (
              <div
                key={exam.name}
                className={`reveal card-3d bg-gradient-to-br ${exam.color} rounded-2xl p-6 text-white text-center`}
              >
                <Award className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <h3 className="font-bold text-xl mb-1">{exam.name}</h3>
                <p className="text-white/70 text-sm">{exam.students} students</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-14 sm:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-deep-blue mb-4">
              Subjects We Cover
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 reveal">
            {subjects.map((s) => (
              <span
                key={s}
                className="bg-white border border-gray-200 text-deep-blue px-5 py-2.5 rounded-full font-medium text-sm shadow-sm hover:shadow-md hover:border-forest-green hover:text-forest-green transition-all cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Schedules */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-deep-blue mb-4">
              Class Schedules
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="reveal card-3d bg-gradient-to-br from-deep-blue to-deep-blue-light rounded-3xl p-8 text-white text-center">
              <Clock className="h-10 w-10 text-bright-yellow mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Morning Session</h3>
              <div className="text-2xl sm:text-4xl font-black text-bright-yellow mb-2">
                8:00 AM – 1:00 PM
              </div>
              <p className="text-white/50">Monday – Friday</p>
            </div>
            <div className="reveal card-3d bg-gradient-to-br from-forest-green to-forest-green-dark rounded-3xl p-8 text-white text-center">
              <Clock className="h-10 w-10 text-bright-yellow mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Afternoon Session</h3>
              <div className="text-2xl sm:text-4xl font-black text-bright-yellow mb-2">
                4:00 PM – 6:00 PM
              </div>
              <p className="text-white/50">Monday – Friday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-deep-blue mb-4">
              Why Choose SmartEdge?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="reveal card-3d bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-forest-green/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-forest-green" />
                  </div>
                  <h3 className="font-bold text-deep-blue text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-forest-green to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
            Registration is Open!
          </h2>
          <p className="text-white/70 text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Secure your spot in our next session. Reach out on WhatsApp and
            start your journey to exam excellence.
          </p>
          <a
            href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20register%20for%20exam%20prep%20classes.%20Please%20share%20available%20slots%20and%20fees."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-forest-green hover:bg-bright-yellow hover:text-deep-blue px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-base sm:text-xl font-black transition-all hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="h-6 w-6" />
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}
