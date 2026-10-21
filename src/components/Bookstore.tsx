import { BookOpen, Star, MessageCircle, CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  "Covers SS1 to SS3 syllabus",
  "WASSCE, NECO & GCE preparation",
  "12 subjects in one comprehensive book",
  "Past questions with detailed solutions",
  "Exam tips and marking schemes",
  "Updated to latest WAEC syllabus",
];

export default function Bookstore() {
  return (
    <section id="bookstore" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-bright-yellow/20 text-deep-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Bookstore
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
            Educational Books
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium study materials to complement your exam preparation. Retail
            and wholesale available.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-bright-yellow/20 to-forest-green/10 flex items-center justify-center p-8">
                <div className="relative w-full h-full min-h-[300px]">
                  <Image
                    src="/images/brand-3.jpg"
                    alt="Platinum Series 12-in-One SSCE Extra"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Bestseller
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-bright-yellow fill-bright-yellow"
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    (Best Rated)
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-deep-blue mb-2">
                  Platinum Series: 12-in-One
                </h3>
                <p className="text-lg text-forest-green font-semibold mb-4">
                  SSCE Extra
                </p>
                <p className="text-gray-600 mb-6">
                  The ultimate all-in-one study companion for SS1–SS3 students
                  preparing for WASSCE, NECO, and GCE examinations. Covers 12
                  subjects with past questions and solutions.
                </p>

                <ul className="space-y-2 mb-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-forest-green shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20buy%20the%20Platinum%20Series%2012-in-One%20SSCE%20Extra%20book.%20Please%20share%20the%20price."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Buy Retail
                  </a>
                  <a
                    href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20wholesale%20pricing%20for%20the%20Platinum%20Series%2012-in-One%20SSCE%20Extra%20book."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <BookOpen className="h-5 w-5" />
                    Wholesale Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
