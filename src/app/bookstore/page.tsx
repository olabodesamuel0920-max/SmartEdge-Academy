"use client";

import Image from "next/image";
import {
  BookOpen,
  Star,
  MessageCircle,
  CheckCircle,
  ShoppingBag,
  Award,
  Users,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  "Covers SS1 to SS3 complete syllabus",
  "WASSCE, NECO & GCE exam preparation",
  "12 subjects in one comprehensive book",
  "Past questions with detailed solutions",
  "Exam tips, tricks, and marking schemes",
  "Updated to latest WAEC/NECO syllabus",
  "Clear, student-friendly explanations",
  "Practice exercises after every chapter",
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
  "Commerce",
  "Accounting",
  "Geography",
  "Civic Education",
];

export default function BookstorePage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-purple-800 to-deep-blue" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-bright-yellow/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-bright-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingBag className="h-4 w-4" />
            Educational Books
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            SmartEdge <span className="gradient-text">Bookstore</span>
          </h1>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Premium study materials for exam excellence. Our bestselling
            Platinum Series has helped thousands of students score A&apos;s.
          </p>
        </div>
      </section>

      {/* Main Book */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-light-bg to-white rounded-3xl shadow-2xl overflow-hidden reveal">
            <div className="grid md:grid-cols-2">
              <div className="relative bg-gradient-to-br from-accent-purple/10 via-bright-yellow/5 to-accent-pink/10 p-10 flex items-center justify-center">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/images/brand-3.jpg"
                    alt="Platinum Series 12-in-One SSCE Extra"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                  <Award className="h-4 w-4" />
                  #1 Bestseller
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-bright-yellow fill-bright-yellow"
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">
                    5.0 • Best Rated
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mb-2">
                  Platinum Series
                </h2>
                <p className="text-xl text-accent-purple font-bold mb-4">
                  12-in-One SSCE Extra
                </p>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  The ultimate all-in-one study companion for SS1–SS3 students
                  preparing for WASSCE, NECO, and GCE. Covers 12 subjects with
                  detailed solutions to past questions, exam tips, and the
                  latest syllabus updates.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-8">
                  {features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-forest-green shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20buy%20the%20Platinum%20Series%2012-in-One%20SSCE%20Extra%20book.%20Please%20share%20the%20price."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all hover:shadow-xl hover:shadow-green-500/25"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Buy Retail
                  </a>
                  <a
                    href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20wholesale%20pricing%20for%20the%20Platinum%20Series%2012-in-One%20SSCE%20Extra%20book."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-deep-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-deep-blue-light transition-colors"
                  >
                    <Users className="h-5 w-5" />
                    Wholesale Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="py-14 sm:py-24 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-deep-blue mb-4 reveal">
            12 Subjects Covered
          </h2>
          <p className="text-gray-500 mb-12 reveal">
            One book, complete coverage. Every subject mapped to the exam syllabus.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 stagger-children">
            {subjects.map((s) => (
              <div
                key={s}
                className="reveal card-3d bg-white rounded-xl p-4 shadow-sm text-center"
              >
                <BookOpen className="h-6 w-6 text-accent-purple mx-auto mb-2" />
                <span className="font-semibold text-deep-blue text-sm">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-accent-purple to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
            Schools & Wholesalers
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Order in bulk for your school or bookshop and get unbeatable
            wholesale prices. Fast delivery across Lagos and nationwide.
          </p>
          <a
            href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20wholesale%20pricing%20for%20the%20Platinum%20Series%20book.%20Please%20share%20minimum%20order%20and%20prices."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-accent-purple hover:bg-bright-yellow hover:text-deep-blue px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-base sm:text-xl font-black transition-all hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="h-6 w-6" />
            Request Wholesale Pricing
          </a>
        </div>
      </section>
    </>
  );
}
