"use client";

import { motion } from "framer-motion";
import {
  UserCheck, MessageCircle, Shield, GraduationCap,
  Package, Globe, Star, RefreshCw,
} from "lucide-react";

const reasons = [
  { icon: UserCheck,       title: "Person-Centred Support",    desc: "Every care plan is tailored to the individual — their preferences, goals and life, not a generic template." },
  { icon: MessageCircle,   title: "Family Communication",       desc: "We keep families informed, involved and reassured at every stage of the care journey." },
  { icon: Shield,          title: "Safeguarding-Led Practice",  desc: "Robust safeguarding procedures and trained staff ensure everyone in our care is protected." },
  { icon: GraduationCap,   title: "Trained & Compassionate",    desc: "All carers are thoroughly trained, DBS-checked and selected for both their skills and their character." },
  { icon: Package,         title: "Flexible Care Packages",     desc: "We adapt quickly to changing needs — from a few visits a week to around-the-clock support." },
  { icon: Globe,           title: "Dignity, Culture & Choice",  desc: "We respect cultural, religious and personal values in everything we do, every single day." },
  { icon: Star,            title: "Quality Monitoring",         desc: "Regular reviews, spot checks and service user feedback ensure standards are always improving." },
  { icon: RefreshCw,       title: "Ongoing Reviews",            desc: "We revisit and update care plans regularly to keep them genuinely relevant to each person's life." },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-[0.1em] uppercase rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-charcoal font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
            Why families and individuals trust Badwi Care
          </h2>
          <p className="text-grey-600 text-base">
            We know you have a choice. Here&apos;s what makes us different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-card transition-all duration-200 border-l-4 border-l-purple-400 hover:border-l-purple-700"
              >
                <div className="w-11 h-11 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-charcoal text-sm mb-2">{r.title}</h3>
                <p className="text-grey-600 text-xs leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
