"use client";

import { motion } from "framer-motion";

const steps = [
  { n: 1, title: "Initial Enquiry",            desc: "Call, email or submit a form — we'll listen to your situation with care and no pressure." },
  { n: 2, title: "Care Conversation",          desc: "A friendly, in-depth conversation to understand needs, wishes and the right type of support." },
  { n: 3, title: "Assessment",                 desc: "A free, thorough care needs assessment at a time that works for you and your family." },
  { n: 4, title: "Personalised Support Plan",  desc: "A co-produced plan built around the individual's goals, preferences and health needs." },
  { n: 5, title: "Matching the Right Staff",   desc: "Carefully matching carers based on personality, experience, culture and compatibility." },
  { n: 6, title: "Support Begins",             desc: "Care starts — compassionately, professionally and exactly as agreed in the plan." },
  { n: 7, title: "Review & Improve",           desc: "Regular reviews to ensure care continues to meet evolving needs and aspirations." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-[0.1em] uppercase rounded-full">
            Our Process
          </span>
          <h2 className="text-charcoal font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
            Your journey to great care
          </h2>
          <p className="text-grey-600 text-base">
            Simple, supportive and centred entirely on you — from first contact to ongoing support.
          </p>
        </motion.div>

        {/* Desktop: horizontal line + steps */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-purple-200 via-purple-500 to-purple-200 rounded-full" />

          <div className="grid grid-cols-7 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-20 h-20 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-xl shadow-lg mb-4 ring-4 ring-purple-100">
                  {s.n}
                </div>
                <h4 className="font-bold text-charcoal text-sm mb-1.5 leading-tight">{s.title}</h4>
                <p className="text-grey-600 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0">
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-purple-200 my-2 min-h-[24px]" />
                )}
              </div>
              <div className="pt-2 pb-4">
                <h4 className="font-bold text-charcoal mb-1">{s.title}</h4>
                <p className="text-grey-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
