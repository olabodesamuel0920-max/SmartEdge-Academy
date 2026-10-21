import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-forest-green/10 text-forest-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at our center or reach out via WhatsApp for quick
            responses. We&apos;re here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-light-bg rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-deep-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-deep-blue" />
            </div>
            <h3 className="font-semibold text-deep-blue mb-2">Our Address</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              F/F 05, Afriland Complex, Beside UBA Bank, Abule Taylor, Abule
              Egba, Lagos State
            </p>
          </div>

          <div className="bg-light-bg rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-7 w-7 text-green-500" />
            </div>
            <h3 className="font-semibold text-deep-blue mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/2348109015332"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 font-medium hover:underline"
            >
              08109015332
            </a>
            <p className="text-xs text-gray-500 mt-1">Quick responses!</p>
          </div>

          <div className="bg-light-bg rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-forest-green" />
            </div>
            <h3 className="font-semibold text-deep-blue mb-2">Call Us</h3>
            <a
              href="tel:08109015332"
              className="text-sm text-forest-green font-medium hover:underline"
            >
              08109015332
            </a>
            <p className="text-xs text-gray-500 mt-1">Mon–Fri, 8AM–6PM</p>
          </div>

          <div className="bg-light-bg rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-bright-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-7 w-7 text-bright-yellow" />
            </div>
            <h3 className="font-semibold text-deep-blue mb-2">Hours</h3>
            <p className="text-sm text-gray-600">Morning: 8AM – 1PM</p>
            <p className="text-sm text-gray-600">Afternoon: 4PM – 6PM</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 sm:p-10 text-center text-white">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-3">
            Fastest Way to Reach Us?
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Send us a WhatsApp message and get a response within minutes. We&apos;re
            always ready to help!
          </p>
          <a
            href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20have%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-bright-yellow hover:text-deep-blue px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
