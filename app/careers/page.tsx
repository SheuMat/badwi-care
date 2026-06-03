"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Heart, GraduationCap, Users, Clock, Car, TrendingUp, Check, MapPin } from "lucide-react";

const whyJoin = [
  { icon: Heart,        title: "Meaningful Work",        desc: "Every day you'll make a genuine, measurable difference in someone's life — that's rare." },
  { icon: GraduationCap,title: "Full Training Provided", desc: "Care Certificate, specialist training, safeguarding — all provided before and during your role." },
  { icon: TrendingUp,   title: "Career Progression",     desc: "We actively promote from within and support staff into senior, supervisory and management roles." },
  { icon: Users,        title: "Supportive Team",        desc: "A manager you can call, colleagues you can rely on, and a culture where asking for help is welcomed." },
  { icon: Clock,        title: "Flexible Hours",         desc: "Part-time, full-time, evenings, weekends — we offer flexible patterns to suit different lifestyles." },
  { icon: Car,          title: "Mileage Paid",           desc: "Travel between clients is paid at a competitive mileage rate, and we aim to keep your working area manageable." },
];

const roles = [
  { badge: "Care", title: "Care Support Worker",       desc: "Visiting clients at home to provide personal care, medication support, companionship and practical help. The foundation of what we do.", type: "Part-time & Full-time", location: "Community-based" },
  { badge: "Live-in", title: "Live-in Carer",          desc: "Live with a client in their home providing round-the-clock support and companionship. Ideal for those seeking an immersive care role.", type: "Rotational", location: "Client's home" },
  { badge: "Senior", title: "Senior Care Worker",      desc: "Lead a small team, carry out spot-checks, complete care plan reviews and support new staff during induction. Experience required.", type: "Full-time", location: "Field & office" },
  { badge: "Specialist", title: "Complex Care Worker", desc: "Supporting individuals with high-acuity needs including neurological conditions, ABI or palliative care. Enhanced training provided.", type: "Full-time / Part-time", location: "Community-based" },
  { badge: "Support", title: "Support Worker – Supported Living", desc: "Working with adults with learning disabilities, autism or mental health needs — building independence and life skills.", type: "Full-time / Part-time", location: "Community-based" },
  { badge: "Admin", title: "Care Coordinator",          desc: "Coordinating care schedules, supporting staff and building client relationships. Organisational skills essential.", type: "Full-time", location: "Office-based" },
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <>
      <PageHero
        label="Join Our Team"
        heading="A career where what you do genuinely matters"
        subtext="We're always looking for warm, dedicated people who want to make a real difference in the lives of others. If you have heart and commitment, we'll give you everything else."
        breadcrumbs={[{ label: "Careers" }]}
        image="https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      {/* Why join */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Why Badwi Care?</span>
            <h2 className="text-charcoal font-bold text-3xl">A workplace that values you as much as you value others</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyJoin.map(r => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all border-l-4 border-l-purple-400 hover:border-l-purple-700">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={18} className="text-purple-700" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2 text-sm">{r.title}</h3>
                  <p className="text-grey-600 text-xs leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Current Opportunities</span>
            <h2 className="text-charcoal font-bold text-3xl">Roles available at Badwi Care</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map(r => (
              <div key={r.title} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all">
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-0.5 rounded-full mb-3">{r.badge}</span>
                <h3 className="font-bold text-charcoal mb-2">{r.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-grey-400"><Clock size={12} />{r.type}</span>
                  <span className="flex items-center gap-1.5 text-xs text-grey-400"><MapPin size={12} />{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">What We Look For</span>
              <h2 className="text-charcoal font-bold text-3xl mb-5">We hire for character. We train for skills.</h2>
              <p className="text-grey-600 leading-relaxed mb-6">We believe the most important qualities in a care worker cannot be taught — compassion, patience, reliability, respect. If you have these, we can give you everything else you need to thrive.</p>
              <ul className="space-y-3">
                {["Genuine warmth and empathy","Reliability and punctuality","Clear communication skills","Commitment to dignity and respect","Flexibility and adaptability","Willingness to learn and grow"].map(c => (
                  <li key={c} className="flex items-center gap-3 text-sm text-grey-600">
                    <Check size={16} className="text-purple-500 flex-shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/29372693/pexels-photo-29372693.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Badwi Care worker building trust with an older person at home" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 bg-purple-50" id="apply">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center mb-10">
            <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Apply Now</span>
            <h2 className="text-charcoal font-bold text-3xl mb-2">Take the first step</h2>
            <p className="text-grey-600">Fill in the form below and we&apos;ll be in touch within 2 working days.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-card border border-purple-100 p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-green-600" />
                </div>
                <h3 className="font-bold text-charcoal text-xl mb-2">Application received!</h3>
                <p className="text-grey-600">We&apos;ll be in touch within 2 working days. Thank you for your interest in Badwi Care.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-charcoal mb-1.5">First Name *</label><input required type="text" placeholder="Your first name" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                  <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Last Name *</label><input required type="text" placeholder="Your last name" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Email *</label><input required type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                  <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Phone *</label><input required type="tel" placeholder="07xxx xxxxxx" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                </div>
                <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Role Interested In *</label>
                  <select required className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors bg-white">
                    <option value="">Please select...</option>
                    {["Care Support Worker","Live-in Carer","Senior Care Worker","Complex Care Worker","Support Worker – Supported Living","Care Coordinator","Other / Not sure"].map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Care Experience</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors bg-white">
                    <option value="">Please select...</option>
                    {["No experience — but keen to learn","Less than 1 year","1–2 years","3–5 years","5+ years"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Tell us about yourself *</label>
                  <textarea required rows={4} placeholder="A few sentences about you and why you want to work in care..." className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-purple-700 hover:bg-purple-600 disabled:opacity-70 text-white font-semibold py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm">
                  {loading ? "Submitting…" : "Submit Application"}
                </button>
                <p className="text-center text-xs text-grey-400">By submitting this form you agree to us contacting you about your application.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection heading="Have questions before you apply?" subtext="Give us a call or send us an email — we're happy to chat about any role informally." btn1Label="Email Us" btn1Href="mailto:info@badwicare.com" btn2Label="Call 01753 201180" btn2Href="tel:01753201180" />
    </>
  );
}
