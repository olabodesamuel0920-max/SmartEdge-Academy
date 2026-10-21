"use client";

import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Navigation,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-[#0c1f3d] to-forest-green-dark" />
        <div className="absolute inset-0 noise-bg" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Visit our center, call us, or send a WhatsApp message. We respond
            within minutes!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 sm:py-24 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            <div className="reveal card-3d bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-deep-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-deep-blue" />
              </div>
              <h3 className="font-bold text-deep-blue mb-2">Our Address</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                F/F 05, Afriland Complex, Beside UBA Bank, Abule Taylor, Abule
                Egba, Lagos State
              </p>
            </div>

            <a
              href="https://wa.me/2348109015332"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card-3d bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-center text-white shadow-sm hover:shadow-xl hover:shadow-green-500/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-sm text-white/80">08109015332</p>
              <p className="text-xs text-white/50 mt-1">Fastest response!</p>
            </a>

            <a
              href="tel:08109015332"
              className="reveal card-3d bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-forest-green/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-forest-green" />
              </div>
              <h3 className="font-bold text-deep-blue mb-2">Call Us</h3>
              <p className="text-sm text-forest-green font-medium">
                08109015332
              </p>
              <p className="text-xs text-gray-400 mt-1">Mon–Fri, 8AM–6PM</p>
            </a>

            <div className="reveal card-3d bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-bright-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-bright-yellow" />
              </div>
              <h3 className="font-bold text-deep-blue mb-2">Hours</h3>
              <p className="text-sm text-gray-500">Morning: 8AM – 1PM</p>
              <p className="text-sm text-gray-500">Afternoon: 4PM – 6PM</p>
              <p className="text-xs text-gray-400 mt-1">Monday – Friday</p>
            </div>
          </div>

          {/* Map placeholder + big CTA */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="reveal bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-deep-blue/5 h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="h-12 w-12 text-deep-blue/30 mx-auto mb-3" />
                  <p className="text-deep-blue font-bold">
                    F/F 05, Afriland Complex
                  </p>
                  <p className="text-gray-500 text-sm">
                    Beside UBA Bank, Abule Taylor
                  </p>
                  <p className="text-gray-500 text-sm">
                    Abule Egba, Lagos State
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-center items-center text-center">
              <MessageCircle className="h-14 w-14 opacity-80 mb-4" />
              <h3 className="text-2xl font-black mb-3">
                WhatsApp is the Fastest Way
              </h3>
              <p className="text-white/70 mb-6 max-w-sm">
                Send us a message and get a response within minutes. We&apos;re
                always ready to help!
              </p>
              <a
                href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-bright-yellow hover:text-deep-blue px-8 py-4 rounded-full text-lg font-black transition-all hover:scale-105 hover:shadow-2xl"
              >
                <MessageCircle className="h-5 w-5" />
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
