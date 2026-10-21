import {
  Clock,
  Users,
  CreditCard,
  BookOpen,
  CheckCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const exams = [
  { name: "SSCE", color: "bg-blue-500" },
  { name: "WAEC", color: "bg-green-500" },
  { name: "NECO", color: "bg-purple-500" },
  { name: "GCE", color: "bg-orange-500" },
  { name: "JAMB/UTME", color: "bg-red-500" },
];

const features = [
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Morning (8AM–1PM) and Afternoon (4PM–6PM) sessions, Mon–Fri",
  },
  {
    icon: Users,
    title: "Qualified Tutors",
    description:
      "Experienced educators passionate about student success",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description:
      "Affordable fees with convenient payment plans available",
  },
  {
    icon: BookOpen,
    title: "Conducive Environment",
    description:
      "Well-equipped classrooms designed for focused learning",
  },
  {
    icon: Sparkles,
    title: "AI Study Tools",
    description:
      "Access our AI-powered exam practice and study planning tools",
  },
];

export default function Academy() {
  return (
    <section id="academy" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-forest-green/10 text-forest-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
            Physical Exam Prep Classes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of students who have excelled in their exams through
            our structured, expert-led preparation classes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {exams.map((exam) => (
            <span
              key={exam.name}
              className={`${exam.color} text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg`}
            >
              {exam.name}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/brand-2.jpg"
              alt="SmartEdge Academy classroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Morning Session
                    </div>
                    <div className="font-bold text-deep-blue">
                      8:00 AM – 1:00 PM
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Afternoon Session
                    </div>
                    <div className="font-bold text-deep-blue">
                      4:00 PM – 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-forest-green/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-forest-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-forest-green to-forest-green/90 rounded-2xl p-8 sm:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Start Your Journey?
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Registration is open! Reach out on WhatsApp to secure your spot in
            our next session.
          </p>
          <a
            href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20register%20for%20exam%20prep%20classes.%20Please%20share%20the%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-forest-green hover:bg-bright-yellow hover:text-deep-blue px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Register via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
