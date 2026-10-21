"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20have%20an%20enquiry."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
