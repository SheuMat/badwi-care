"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home, Building2, Heart, Activity, Users, Clock,
  Shield, Sparkles, ArrowRight, LucideIcon,
} from "lucide-react";
import { Service } from "@/lib/services";

const iconMap: Record<string, LucideIcon> = {
  Home, Building2, Heart, Activity, Users, Clock,
  Shield, Sparkles, ArrowRight,
};

interface Props {
  service: Service;
  index?:  number;
  variant?: "default" | "compact";
}

export default function ServiceCard({ service, index = 0, variant = "default" }: Props) {
  const Icon = iconMap[service.icon] ?? Heart;

  if (variant === "compact") {
    return (
      <Link href={service.href}
        className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
      >
        <span className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
          <Icon size={20} />
        </span>
        <div>
          <h3 className="font-semibold text-charcoal text-sm mb-1 group-hover:text-purple-700 transition-colors">
            {service.shortTitle}
          </h3>
          <p className="text-grey-600 text-xs leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link href={service.href}
        className="group flex flex-col h-full bg-white rounded-3xl border border-purple-100 hover:border-purple-300 hover:shadow-lg p-7 transition-all duration-300 hover:-translate-y-1.5"
      >
        {/* Icon */}
        <span className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300 group-hover:shadow-md">
          <Icon size={24} />
        </span>

        {/* Badge */}
        <span className={`self-start mb-3 text-[0.7rem] font-semibold px-3 py-0.5 rounded-full ${
          service.regulated
            ? "bg-purple-100 text-purple-700"
            : "bg-purple-50 text-purple-500"
        }`}>
          {service.regulated ? "Regulated" : "Non-Regulated"}
        </span>

        {/* Title */}
        <h3 className="font-bold text-charcoal text-lg mb-2 group-hover:text-purple-700 transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Desc */}
        <p className="text-grey-600 text-sm leading-relaxed flex-1 mb-5">
          {service.description}
        </p>

        {/* Link */}
        <span className="flex items-center gap-2 text-purple-700 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
          Learn more <ArrowRight size={15} />
        </span>
      </Link>
    </motion.div>
  );
}
