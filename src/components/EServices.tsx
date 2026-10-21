import {
  CreditCard,
  Shield,
  FileCheck,
  KeyRound,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "WAEC Scratch Card",
    description:
      "Original WAEC result checker scratch cards for checking your WASSCE results online.",
    price: "Affordable",
    whatsappMsg:
      "Hello SmartEdge! I want to buy a WAEC Scratch Card. Please share the price and how to pay.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: CreditCard,
    title: "NECO Scratch Card",
    description:
      "Genuine NECO token pins for checking your NECO examination results online.",
    price: "Affordable",
    whatsappMsg:
      "Hello SmartEdge! I want to buy a NECO Scratch Card. Please share the price and how to pay.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: CreditCard,
    title: "NABTEB Scratch Card",
    description:
      "NABTEB result checker cards for accessing your NABTEB exam results.",
    price: "Affordable",
    whatsappMsg:
      "Hello SmartEdge! I want to buy a NABTEB Scratch Card. Please share the price and how to pay.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Shield,
    title: "WAEC Verification PIN",
    description:
      "Verification PINs for employers and institutions to verify WAEC certificates.",
    price: "Contact us",
    whatsappMsg:
      "Hello SmartEdge! I need a WAEC Verification PIN. Please share the details.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: KeyRound,
    title: "JAMB Portal Services",
    description:
      "Complete JAMB registration, profile creation, result checking, and admission status.",
    price: "Varies",
    whatsappMsg:
      "Hello SmartEdge! I need help with JAMB portal services. Please share the details.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: FileCheck,
    title: "WAEC Certificate Retrieval",
    description:
      "Assistance with retrieving lost or delayed WAEC certificates and statements of result.",
    price: "Contact us",
    whatsappMsg:
      "Hello SmartEdge! I need help retrieving my WAEC certificate. Please share the process and cost.",
    color: "from-orange-500 to-orange-600",
  },
];

export default function EServices() {
  return (
    <section id="eservices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-deep-blue/10 text-deep-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            E-Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
            Digital Exam Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get scratch cards, verification PINs, and portal services delivered
            quickly. All genuine and verified.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-deep-blue text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-forest-green">
                    {service.price}
                  </span>
                  <a
                    href={`https://wa.me/2348109015332?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Buy Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-deep-blue to-deep-blue/90 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Need Bulk Orders?</h3>
          <p className="text-white/70 mb-4">
            Schools and organizations get special wholesale pricing on scratch
            cards and PINs.
          </p>
          <a
            href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20need%20bulk%20scratch%20cards%2FPINs.%20Please%20share%20wholesale%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bright-yellow text-deep-blue hover:bg-yellow-300 px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Get Wholesale Pricing
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
