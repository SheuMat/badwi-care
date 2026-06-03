"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Person-centred support plans",
  "Trained and DBS-checked carers",
  "Family kept informed throughout",
  "Flexible and responsive packages",
  "Cultural sensitivity and dignity",
  "Regular reviews and quality checks",
];

export default function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Carer and service user sharing a warm, personal moment at home"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                💜
              </div>
              <div>
                <p className="font-bold text-xl text-purple-700 leading-none">100%</p>
                <p className="text-xs text-grey-600 mt-0.5">Person-Centred Care</p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-[0.1em] uppercase rounded-full">
              Who We Are
            </span>
            <h2 className="text-charcoal font-bold leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.6rem)" }}>
              Care that feels personal, safe and reliable
            </h2>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              Badwi Care supports adults, older people, families and individuals with disabilities to live well at home and in the community. We are committed to delivering care that is genuinely person-centred — built around the individual, not a one-size-fits-all rota.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-8">
              Whether you need a few hours of support a week or full-time live-in care, we approach every situation with the same dedication, professionalism and warmth. We don&apos;t just provide a service — we build trusted relationships.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-grey-600">
                  <CheckCircle2 size={18} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/about"
                className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm">
                Learn About Us <ArrowRight size={15} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm">
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
