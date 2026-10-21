"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  GraduationCap,
  Home,
  BookOpen,
  Monitor,
  ShoppingBag,
  Phone,
  Brain,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Academy", href: "/academy", icon: GraduationCap },
  { label: "E-Services", href: "/e-services", icon: Monitor },
  { label: "Bookstore", href: "/bookstore", icon: ShoppingBag },
  { label: "AI Suite", href: "/ai", icon: Brain },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-blue/95 backdrop-blur-md shadow-xl shadow-deep-blue/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-bright-yellow/30 rounded-lg blur-md group-hover:blur-lg transition-all" />
              <GraduationCap className="relative h-9 w-9 text-bright-yellow" />
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-tight block tracking-tight">
                SmartEdge
              </span>
              <span className="text-bright-yellow/80 text-[10px] font-medium leading-tight block tracking-widest uppercase">
                Academy & Consult
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-bright-yellow"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label === "AI Suite" && (
                    <Sparkles className="inline h-3.5 w-3.5 mr-1 text-accent-purple" />
                  )}
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-bright-yellow rounded-full" />
                  )}
                </Link>
              );
            })}
            <a
              href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-deep-blue/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "text-bright-yellow bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                  {link.label === "AI Suite" && (
                    <span className="ml-auto text-[10px] bg-accent-purple/20 text-accent-purple px-2 py-0.5 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                </Link>
              );
            })}
            <a
              href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20want%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3.5 rounded-xl text-base font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
