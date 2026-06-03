"use client";

import { motion } from "framer-motion";

const values = [
  { emoji: "💜", title: "Compassion",    desc: "We care deeply — about individuals, families and the communities we serve." },
  { emoji: "🏛",  title: "Dignity",       desc: "Every person deserves to be treated with the utmost respect and privacy." },
  { emoji: "🔑", title: "Independence",  desc: "We support real choices and help people live life on their own terms." },
  { emoji: "🛡",  title: "Safety",        desc: "The safety and wellbeing of those we support is always our first priority." },
  { emoji: "🤝", title: "Respect",       desc: "We honour cultural, religious and personal values in everything we do." },
  { emoji: "⭐", title: "Reliability",   desc: "Consistent, punctual and dependable — because people count on us being there." },
];

export default function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-[0.1em] uppercase rounded-full">
            Our Values
          </span>
          <h2 className="text-charcoal font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
            The values that guide everything we do
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white border border-purple-100 hover:border-purple-300 hover:bg-purple-700 rounded-3xl p-8 text-center shadow-soft hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <span className="text-5xl mb-4 block">{v.emoji}</span>
              <h3 className="font-bold text-lg text-charcoal group-hover:text-white mb-2 transition-colors">
                {v.title}
              </h3>
              <p className="text-grey-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
