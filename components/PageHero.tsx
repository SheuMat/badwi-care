"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Breadcrumb { label: string; href?: string }

interface PageHeroProps {
  label?:    string;
  heading:   string;
  subtext?:  string;
  breadcrumbs?: Breadcrumb[];
  image?:    string;
}

export default function PageHero({
  label,
  heading,
  subtext,
  breadcrumbs,
  image = "https://images.pexels.com/photos/29372536/pexels-photo-29372536.jpeg?auto=compress&cs=tinysrgb&w=1400",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
      {/* BG */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/92 via-purple-800/78 to-purple-700/40" />

      {/* Decorative circles */}
      <div className="absolute top-[-20%] right-[-5%] w-96 h-96 bg-white/[0.03] rounded-full" aria-hidden />
      <div className="absolute bottom-[-15%] left-[5%]  w-64 h-64 bg-white/[0.03] rounded-full" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-6 text-xs text-white/55" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-white/30" />
                {b.href
                  ? <Link href={b.href} className="hover:text-white transition-colors">{b.label}</Link>
                  : <span className="text-white/80">{b.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {label && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase rounded-full"
          >
            {label}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-bold leading-tight mb-4 max-w-3xl"
          style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}
        >
          {heading}
        </motion.h1>

        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/82 text-lg max-w-2xl leading-relaxed"
          >
            {subtext}
          </motion.p>
        )}
      </div>
    </section>
  );
}
