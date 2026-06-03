"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

interface Props {
  heading?:  string;
  subtext?:  string;
  btn1Label?: string;
  btn1Href?:  string;
  btn2Label?: string;
  btn2Href?:  string;
  variant?:   "dark" | "light";
}

export default function CTASection({
  heading  = "Need support for yourself or someone you love?",
  subtext  = "We're here to listen, advise and help you find the right support — with no pressure and no obligation.",
  btn1Label = "Contact Badwi Care",
  btn1Href  = "/contact",
  btn2Label = "View Services",
  btn2Href  = "/services",
  variant   = "dark",
}: Props) {
  const isDark = variant === "dark";

  return (
    <section className={`py-20 ${isDark ? "bg-purple-gradient" : "bg-purple-50"}`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative top icon */}
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
            isDark ? "bg-white/10" : "bg-purple-100"
          }`}>
            <Phone size={24} className={isDark ? "text-white" : "text-purple-700"} />
          </div>

          <h2 className={`font-bold leading-tight mb-4 ${
            isDark ? "text-white" : "text-charcoal"
          }`} style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)" }}>
            {heading}
          </h2>

          <p className={`text-lg mb-2 max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-white/80" : "text-grey-600"
          }`}>
            {subtext}
          </p>

          {/* Phone */}
          <p className={`mb-10 font-semibold ${isDark ? "text-purple-300" : "text-purple-700"}`}>
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g,"")}`}
               className="hover:underline">
              {siteConfig.contact.phone}
            </a>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={btn1Href}
              className={`inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm ${
                isDark
                  ? "bg-white text-purple-700 hover:bg-purple-50"
                  : "bg-purple-700 text-white hover:bg-purple-600"
              }`}
            >
              {btn1Label} <ArrowRight size={16} />
            </Link>
            <Link href={btn2Href}
              className={`inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm ${
                isDark
                  ? "border-2 border-white/60 text-white hover:bg-white/10"
                  : "border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white"
              }`}
            >
              {btn2Label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
