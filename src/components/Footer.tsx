"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  Brain,
} from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#07080f] text-white relative overflow-hidden">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <GraduationCap className="h-9 w-9 text-bright-yellow" />
              <div>
                <span className="font-bold text-lg block leading-tight">
                  SmartEdge
                </span>
                <span className="text-bright-yellow/60 text-[10px] font-medium tracking-widest uppercase block leading-tight">
                  Academy & Consult
                </span>
              </div>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed">
              Building Minds, Shaping Futures. Lagos&apos; premier exam prep
              center with AI-powered study tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/50 mb-5">
              Navigate
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Academy", href: "/academy" },
                { label: "E-Services", href: "/e-services" },
                { label: "Bookstore", href: "/bookstore" },
                { label: "AI Suite", href: "/ai" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-bright-yellow transition-colors inline-flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/50 mb-5">
              AI Tools
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Exam Practice", href: "/ai/exam-practice" },
                { label: "Career Prophet", href: "/ai/career-prophet" },
                { label: "Topic Predictor", href: "/ai/topic-predictor" },
                { label: "Snap & Solve", href: "/ai/snap-solve" },
                { label: "Study Plan", href: "/ai/study-plan" },
                { label: "Study Squad", href: "/ai/study-squad" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-accent-purple transition-colors inline-flex items-center gap-1"
                  >
                    <Brain className="h-3 w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/50 mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-bright-yellow shrink-0 mt-0.5" />
                <span>
                  F/F 05, Afriland Complex, Beside UBA Bank, Abule Taylor,
                  Abule Egba, Lagos
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-bright-yellow shrink-0" />
                <a
                  href="tel:08109015332"
                  className="hover:text-bright-yellow transition-colors"
                >
                  08109015332
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-500 shrink-0" />
                <a
                  href="https://wa.me/2348109015332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-bright-yellow shrink-0" />
                <span>Mon–Fri, 8AM–6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-xs text-white/20">
          <p>
            &copy; {year} SmartEdge Academy & Consult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
