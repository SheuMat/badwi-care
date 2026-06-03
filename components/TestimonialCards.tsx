"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:  "Badwi Care have been absolutely wonderful for my mother. The carers are kind, professional and always go the extra mile. We finally feel at peace knowing Mum is in safe hands.",
    name:   "Sarah M.",
    role:   "Daughter of a service user",
    avatar: "👩",
  },
  {
    quote:  "After my husband's stroke, we were overwhelmed. The team at Badwi Care listened carefully and put together a care plan that made everything manageable. The carer is patient, consistent and truly caring.",
    name:   "Amina T.",
    role:   "Wife of a service user",
    avatar: "👩",
  },
  {
    quote:  "I was referred through social services and couldn't be happier. They treat me like a person — not a case number. The support has genuinely changed my daily life for the better.",
    name:   "James O.",
    role:   "Service user",
    avatar: "👨",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialCards() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-[0.1em] uppercase rounded-full">
            What People Say
          </span>
          <h2 className="text-charcoal font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
            Words from families we&apos;ve supported
          </h2>
          <p className="text-grey-600 text-base">
            Trust is built through experience, not promises. Here&apos;s what real families have shared.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-card border border-purple-100 relative overflow-hidden"
            >
              {/* Big quote mark */}
              <span className="absolute top-4 left-6 text-7xl text-purple-100 font-serif leading-none select-none" aria-hidden>
                &ldquo;
              </span>
              <div className="relative">
                <Stars />
                <p className="text-grey-600 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-xl flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                    <p className="text-grey-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-6 text-xs text-grey-400">
          * Testimonials are illustrative. Real testimonials will be added as the service grows.
        </p>
      </div>
    </section>
  );
}
