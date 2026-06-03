"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    label:    "Person-Centred Care",
    heading:  "Compassionate care, built around you",
    subtext:  "Personalised support that helps people feel safe, respected and independent at home and in the community.",
    image:    "https://images.pexels.com/photos/29372536/pexels-photo-29372536.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt:      "Care worker supporting an older person in a warm home setting",
  },
  {
    id: 2,
    label:    "Independence",
    heading:  "Supporting independence every day",
    subtext:  "From companionship and home help to personal care and complex support, we adapt around each person's life.",
    image:    "https://images.pexels.com/photos/34073814/pexels-photo-34073814.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt:      "Person being supported confidently in the community",
  },
  {
    id: 3,
    label:    "Family Peace of Mind",
    heading:  "Peace of mind for families",
    subtext:  "Reliable, well-led care with clear communication, dignity, safeguarding and regular reviews at the heart of everything we do.",
    image:    "https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt:      "Care worker offering reassurance and companionship at home",
  },
  {
    id: 4,
    label:    "Flexible Support",
    heading:  "Regulated and non-regulated support",
    subtext:  "Flexible care and support options for adults, older people, families, disabled people and individuals with changing needs.",
    image:    "https://images.pexels.com/photos/8376245/pexels-photo-8376245.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt:      "Care professional reviewing notes for safe support planning",
  },
];

const textVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.65, ease: "easeOut" },
  }),
};

function SlideContent({ slide }: { slide: typeof slides[0] }) {
  return (
    <div className="relative h-full flex items-center">
      {/* BG image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-purple-700/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-[640px]">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-block mb-4 px-4 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase rounded-full"
          >
            {slide.label}
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-white font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
          >
            {slide.heading}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-white/85 text-lg leading-relaxed mb-8"
          >
            {slide.subtext}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white/15 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  return (
    <section className="w-full" style={{ height: "min(700px,90vh)", minHeight: "480px" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={900}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <SlideContent slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
