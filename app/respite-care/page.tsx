import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Clock, Calendar, AlertCircle, Home, Users, RefreshCw } from "lucide-react";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Respite & Family Support",
  description: "Badwi Care's respite service gives family carers a well-earned break while ensuring their loved one receives consistent, high-quality professional care.",
};

const respiteTypes = [
  { icon: Clock,      title: "Short-Break Respite",         desc: "A few hours of professional cover while a family carer takes time for themselves — shopping, appointments, rest, or simply a coffee in peace." },
  { icon: Calendar,   title: "Holiday Cover",               desc: "Planned professional care during a family holiday or period away — giving everyone genuine peace of mind and a real break." },
  { icon: AlertCircle,title: "Emergency Respite",           desc: "Responsive cover when a family carer becomes unwell, faces a personal crisis or is unexpectedly unable to provide care." },
  { icon: Home,       title: "Overnight Sitting",           desc: "A carer stays overnight — providing safety and companionship for the person being supported, and rest for the whole household." },
  { icon: Users,      title: "Regular Scheduled Respite",   desc: "A weekly or fortnightly slot where a professional carer provides support — giving family carers a reliable, consistent break." },
  { icon: RefreshCw,  title: "Hospital Discharge Support",  desc: "Transition support after a hospital stay — covering care needs during recovery while the family carer adjusts." },
];

const familySupport = [
  "Full handover briefing before every respite visit",
  "Regular updates during longer respite periods",
  "Same carers used wherever possible for familiarity",
  "Out-of-hours contact available for existing service users",
  "Families involved in all care decisions and reviews",
  "Sensitive, respectful and professional at all times",
];

export default function RespiteCarePage() {
  return (
    <>
      <PageHero
        label="For Families & Carers"
        heading="Respite care — because family carers need a break too"
        subtext="Caring for a loved one is one of the most selfless things a person can do. Every carer needs time to rest and recharge. We're here to make that possible."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Respite & Family Support" }]}
        image="https://images.pexels.com/photos/29372724/pexels-photo-29372724.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/29372536/pexels-photo-29372536.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Professional carer providing reassuring respite support at home" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Why It Matters</span>
              <h2 className="text-charcoal font-bold text-3xl mb-5">You deserve support too</h2>
              <p className="text-grey-600 leading-relaxed mb-4">The emotional and physical demands of caring for a loved one can be overwhelming. Carer burnout is real, and it&apos;s one of the most common reasons why informal care arrangements break down entirely.</p>
              <p className="text-grey-600 leading-relaxed mb-4">Regular respite isn&apos;t a sign of weakness — it&apos;s a sign that you&apos;re taking your caring role seriously enough to protect it. A rested carer is a better carer.</p>
              <p className="text-grey-600 leading-relaxed mb-6">At Badwi Care, we see ourselves as partners to the whole family — not just the person receiving care.</p>
              <ul className="space-y-3">
                {familySupport.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-grey-600">
                    <Check size={16} className="text-purple-500 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-charcoal font-bold text-3xl mb-8 text-center">Flexible respite to suit every situation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {respiteTypes.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all">
                  <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-purple-700" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">{r.title}</h3>
                  <p className="text-grey-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to arrange respite care?" subtext="Whether you need regular cover or just occasional help — we can put something in place quickly, professionally and with full family involvement." />
    </>
  );
}
