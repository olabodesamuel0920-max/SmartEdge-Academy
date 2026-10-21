import { MessageCircle, ArrowRight, Star, Users, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-deep-blue to-forest-green" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-bright-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-green rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-bright-yellow/20 text-bright-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Lagos&apos; Premier Exam Prep Center
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Minds,
              <span className="text-bright-yellow block mt-2">
                Shaping Futures
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Excel in your WAEC, NECO, GCE & JAMB exams with expert tutors,
              flexible classes, and cutting-edge AI study tools. Your success
              journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20register%20for%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 animate-pulse-glow"
              >
                <MessageCircle className="h-5 w-5" />
                Start on WhatsApp
              </a>
              <a
                href="#ai-suite"
                className="inline-flex items-center justify-center gap-2 border-2 border-bright-yellow text-bright-yellow hover:bg-bright-yellow hover:text-deep-blue px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                Try AI Tools
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-bright-yellow">
                  500+
                </div>
                <div className="text-xs text-white/60">Students Passed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bright-yellow">15+</div>
                <div className="text-xs text-white/60">Expert Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bright-yellow">
                  98%
                </div>
                <div className="text-xs text-white/60">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-bright-yellow/20 rounded-3xl rotate-6" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 overflow-hidden">
                <Image
                  src="/images/brand-1.jpg"
                  alt="SmartEdge Academy students"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-forest-green" />
                  <div>
                    <div className="text-sm font-bold text-deep-blue">
                      Join 500+
                    </div>
                    <div className="text-xs text-gray-500">
                      Successful Students
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-bright-yellow rounded-2xl p-4 shadow-xl animate-float delay-1000">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-deep-blue" />
                  <div>
                    <div className="text-sm font-bold text-deep-blue">
                      AI-Powered
                    </div>
                    <div className="text-xs text-deep-blue/70">
                      Study Tools
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
