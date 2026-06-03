import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Domiciliary Care",
  description: "Badwi Care's domiciliary care service delivers professional home visits covering personal care, medication, meals and daily routines — tailored to you.",
};

const included = {
  personal: ["Washing, bathing & showering", "Dressing & undressing", "Oral hygiene & grooming", "Continence care & catheter support", "Medication administration & prompting", "Skin care & pressure relief", "Mobility & transfer support", "Hospital discharge aftercare"],
  practical: ["Meal preparation & light cooking", "Light domestic tasks", "Shopping & errand support", "Companionship & social conversation", "Appointment accompaniment", "Prompting daily routines", "Wellbeing monitoring", "Family communication & updates"],
};

const benefits = [
  { emoji: "🏡", title: "Your own space",  desc: "Remaining at home preserves routine, familiarity, and the emotional wellbeing that comes from living in a place you know and love." },
  { emoji: "🔑", title: "Your own choices", desc: "Unlike residential settings, home care allows individuals to choose their own routines, meals, sleeping times and daily activities." },
  { emoji: "👨‍👩‍👧", title: "Close to family", desc: "Staying at home means staying close to the people who matter most — friends, family, neighbours and pets." },
  { emoji: "💜", title: "Consistent carer", desc: "Wherever possible, the same carer visits regularly — building familiarity, trust and a genuine relationship over time." },
];

export default function DomiciliaryCarePage() {
  return (
    <>
      <PageHero
        label="Home Care Visits"
        heading="Professional home care visits, centred around your life"
        subtext="Our domiciliary care service brings skilled, compassionate support directly to your home — at the times you need it, in the way that works best for you."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Domiciliary Care" }]}
        image="https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">What Is Domiciliary Care?</span>
              <h2 className="text-charcoal font-bold text-3xl mb-5">Quality care — without leaving the home you love</h2>
              <p className="text-grey-600 leading-relaxed mb-4">Domiciliary care (also known as home care or visiting care) means a trained carer comes to your home on a scheduled basis to provide support with personal care, daily routines and household tasks.</p>
              <p className="text-grey-600 leading-relaxed mb-4">Visits can range from 30 minutes to several hours, and can happen once a day or multiple times throughout the day — including early mornings, evenings and weekends. Everything is built around your existing routines, not ours.</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["30 min – full day visits","7 days a week","Morning & evening calls","Fully flexible"].map(t => (
                  <span key={t} className="bg-purple-50 text-purple-700 border border-purple-200 text-xs font-medium px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/29372724/pexels-photo-29372724.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Care worker providing warm domiciliary support at home" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-charcoal font-bold text-3xl mb-10 text-center">What our domiciliary care visits cover</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 border border-purple-100">
              <h3 className="font-bold text-purple-700 mb-5">Personal & Health Care</h3>
              <ul className="space-y-3">{included.personal.map(i => <li key={i} className="flex items-center gap-3 text-sm text-grey-600"><Check size={16} className="text-purple-500 flex-shrink-0" />{i}</li>)}</ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-purple-100">
              <h3 className="font-bold text-purple-700 mb-5">Practical & Social Support</h3>
              <ul className="space-y-3">{included.practical.map(i => <li key={i} className="flex items-center gap-3 text-sm text-grey-600"><Check size={16} className="text-purple-500 flex-shrink-0" />{i}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-charcoal font-bold text-3xl mb-10 text-center">The benefits of staying at home</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all duration-200">
                <span className="text-4xl mb-3 block">{b.emoji}</span>
                <h3 className="font-bold text-charcoal mb-2">{b.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to arrange domiciliary care?" subtext="Contact us to arrange a free care needs assessment. We'll design a schedule and care plan that fits around your life — not the other way around." />
    </>
  );
}
