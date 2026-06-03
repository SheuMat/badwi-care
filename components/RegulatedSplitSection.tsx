"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const regulatedItems = [
  "Personal care & hygiene support",
  "Medication administration",
  "Catheter & stoma care",
  "Risk-assessed care plans",
  "Safeguarding & governance",
  "CQC-aligned documentation",
];

const nonRegulatedItems = [
  "Companionship & social visits",
  "Shopping & errands",
  "Domestic support & cleaning",
  "Meal preparation",
  "Appointment accompaniment",
  "Community access & outings",
];

export default function RegulatedSplitSection() {
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
            Understanding Care
          </span>
          <h2 className="text-charcoal font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
            Regulated and non-regulated care — what&apos;s the difference?
          </h2>
          <p className="text-grey-600 text-base">
            We provide both types of care. Here&apos;s a simple guide to help you understand each one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Regulated */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-purple-gradient rounded-3xl p-10 text-white"
          >
            <h3 className="text-2xl font-bold mb-3">Regulated Care</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Regulated care involves personal care tasks such as washing, dressing, medication support and intimate care. Where regulated activity is provided, this will be delivered in line with CQC requirements, robust governance, trained staff, risk assessments and person-centred care planning.
            </p>
            <ul className="space-y-3 mb-8">
              {regulatedItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/regulated-care"
              className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              Learn About Regulated Care
            </Link>
          </motion.div>

          {/* Non-regulated */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-purple-50 border-2 border-purple-200 rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-charcoal mb-3">Non-Regulated Support</h3>
            <p className="text-grey-600 leading-relaxed mb-6">
              Non-regulated support provides vital help with daily life without involving personal care tasks. These services are equally valuable — they promote wellbeing, independence and social connection, without requiring CQC registration.
            </p>
            <ul className="space-y-3 mb-8">
              {nonRegulatedItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-grey-600">
                  <span className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-purple-700" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/non-regulated-support"
              className="inline-flex items-center gap-2 bg-purple-700 text-white hover:bg-purple-600 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              Learn About Non-Regulated Support
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
