"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const cards = [
  {
    icon:    Phone,
    title:   "Phone",
    content: siteConfig.contact.phone,
    href:    `tel:${siteConfig.contact.phone.replace(/\s/g,"")}`,
    colour:  "bg-purple-700",
  },
  {
    icon:    Mail,
    title:   "Email",
    content: siteConfig.contact.email,
    href:    `mailto:${siteConfig.contact.email}`,
    colour:  "bg-purple-600",
  },
  {
    icon:    MapPin,
    title:   "Address",
    content: siteConfig.contact.address,
    href:    undefined,
    colour:  "bg-purple-500",
  },
  {
    icon:    Clock,
    title:   "Office Hours",
    content: siteConfig.contact.officeHours,
    href:    undefined,
    colour:  "bg-purple-700",
  },
];

export default function ContactCards({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          const Inner = (
            <>
              <div className={`w-12 h-12 ${c.colour} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-0.5">{c.title}</p>
                <p className="text-charcoal text-sm font-medium">{c.content}</p>
              </div>
            </>
          );

          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {c.href ? (
                <a href={c.href}
                   className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card transition-all duration-200 group">
                  {Inner}
                </a>
              ) : (
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-purple-100">
                  {Inner}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Out-of-hours note */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-200 rounded-2xl text-sm text-grey-600"
      >
        <Clock size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
        <p><strong className="text-purple-700">Out of hours:</strong> {siteConfig.contact.outOfHours}</p>
      </motion.div>

      {/* Emergency disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-4 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-sm"
      >
        <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-amber-800">
          <strong>Emergency:</strong> Badwi Care is not an emergency service. If someone is in immediate danger, call <strong>999</strong>. For urgent medical queries, call <strong>111</strong>.
        </p>
      </motion.div>
    </div>
  );
}
