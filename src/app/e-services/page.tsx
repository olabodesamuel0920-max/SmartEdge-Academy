"use client";

import {
  CreditCard,
  Shield,
  FileCheck,
  KeyRound,
  MessageCircle,
  ArrowRight,
  Zap,
  CheckCircle,
  Monitor,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: CreditCard,
    title: "WAEC Scratch Card",
    desc: "Original WAEC result checker scratch cards for checking your WASSCE results online. Genuine and verified.",
    price: "Affordable",
    features: ["Instant delivery", "100% genuine", "Result checking"],
    whatsappMsg: "Hello SmartEdge! I want to buy a WAEC Scratch Card. Please share the price and how to pay.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: CreditCard,
    title: "NECO Scratch Card",
    desc: "Genuine NECO token pins for checking your NECO examination results online. Fast delivery guaranteed.",
    price: "Affordable",
    features: ["Quick delivery", "Verified tokens", "NECO results"],
    whatsappMsg: "Hello SmartEdge! I want to buy a NECO Scratch Card. Please share the price and how to pay.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: CreditCard,
    title: "NABTEB Scratch Card",
    desc: "NABTEB result checker cards for accessing your NABTEB exam results quickly and securely.",
    price: "Affordable",
    features: ["Fast delivery", "Genuine cards", "NABTEB results"],
    whatsappMsg: "Hello SmartEdge! I want to buy a NABTEB Scratch Card. Please share the price and how to pay.",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    icon: Shield,
    title: "WAEC Verification PIN",
    desc: "Verification PINs for employers and institutions to confirm the authenticity of WAEC certificates.",
    price: "Contact us",
    features: ["For employers", "Certificate verification", "Official PINs"],
    whatsappMsg: "Hello SmartEdge! I need a WAEC Verification PIN. Please share the details.",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: KeyRound,
    title: "JAMB Portal Services",
    desc: "Complete JAMB registration, profile creation, result checking, admission status, and change of course/institution.",
    price: "Varies by service",
    features: ["Registration", "Profile setup", "Result checking", "Admission status"],
    whatsappMsg: "Hello SmartEdge! I need help with JAMB portal services. Please share the details.",
    gradient: "from-red-500 to-red-600",
  },
  {
    icon: FileCheck,
    title: "WAEC Certificate Retrieval",
    desc: "Assistance with retrieving lost or delayed WAEC certificates and official statements of result.",
    price: "Contact us",
    features: ["Lost certificates", "Statement of result", "Expert guidance"],
    whatsappMsg: "Hello SmartEdge! I need help retrieving my WAEC certificate. Please share the process and cost.",
    gradient: "from-orange-500 to-orange-600",
  },
];

export default function EServicesPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-[#0c1f3d] to-[#1a1a3e]" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-accent-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Monitor className="h-4 w-4" />
            Digital Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Digital Exam{" "}
            <span className="gradient-text-blue">E-Services</span>
          </h1>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Scratch cards, verification PINs, and portal services. All genuine,
            verified, and delivered fast via WhatsApp.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="reveal card-3d bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <div
                    className={`bg-gradient-to-r ${service.gradient} p-6`}
                  >
                    <Icon className="h-10 w-10 text-white mb-3" />
                    <h3 className="font-bold text-white text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <CheckCircle className="h-4 w-4 text-forest-green shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-forest-green">
                        {service.price}
                      </span>
                      <a
                        href={`https://wa.me/2348109015332?text=${encodeURIComponent(service.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bulk CTA */}
      <section className="py-14 sm:py-20 bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative max-w-4xl mx-auto px-4 text-center reveal">
          <Zap className="h-12 w-12 text-bright-yellow mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
            Bulk Orders? We&apos;ve Got You
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
            Schools and organizations get special wholesale pricing on scratch
            cards and verification PINs.
          </p>
          <a
            href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20need%20bulk%20scratch%20cards%2FPINs.%20Please%20share%20wholesale%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bright-yellow text-deep-blue hover:bg-bright-yellow-light px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-base sm:text-xl font-black transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get Wholesale Pricing
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}
