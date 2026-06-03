"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ContactCards from "@/components/ContactCards";
import { Check } from "lucide-react";

export default function ContactPage() {
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
        label="We're Here to Help"
        heading="Get in touch today"
        subtext="Whether you're looking for care for yourself or a loved one, making a professional referral, or considering joining our team — we'd love to hear from you."
        breadcrumbs={[{ label: "Contact Us" }]}
        image="https://images.pexels.com/photos/34073814/pexels-photo-34073814.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      <section className="py-20 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left: contact info */}
            <div className="lg:col-span-2">
              <ContactCards />

              {/* What happens next */}
              <div className="mt-6 bg-white rounded-2xl border border-purple-100 p-6">
                <h4 className="font-bold text-charcoal mb-4 text-sm">What happens after you contact us?</h4>
                <ul className="space-y-2.5">
                  {["We'll respond within 1 working day","A friendly team member will listen to your needs","No pressure, no obligation — just a genuine conversation","We'll explain our services clearly and answer all questions","If we're a good fit, we'll arrange a free care needs assessment"].map(c => (
                    <li key={c} className="flex items-start gap-2.5 text-xs text-grey-600">
                      <Check size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-card border border-purple-100 p-8 lg:p-10">
                <h2 className="text-charcoal font-bold text-2xl mb-1">Send us a message</h2>
                <p className="text-grey-600 text-sm mb-8">We aim to respond to all enquiries within 1 working day.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={28} className="text-green-600" />
                    </div>
                    <h3 className="font-bold text-charcoal text-xl mb-2">Message sent!</h3>
                    <p className="text-grey-600 text-sm">Thank you for getting in touch. We&apos;ll be back in touch within 1 working day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-xs font-semibold text-charcoal mb-1.5">First Name *</label><input required type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                      <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Last Name *</label><input required type="text" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Email *</label><input required type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                      <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Phone</label><input type="tel" placeholder="01753 000000" className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors" /></div>
                    </div>
                    <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Reason for Enquiry *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors bg-white">
                        <option value="">Please select...</option>
                        {["I'm looking for care for myself","I'm looking for care for a family member","I'm a professional making a referral","I'm interested in a career at Badwi Care","General enquiry","Other"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Service of Interest</label>
                      <select className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors bg-white">
                        <option value="">Please select (optional)...</option>
                        {["Domiciliary Care","Live-in Care","Supported Living","Companionship & Community Support","Complex Care","Respite Care","Non-Regulated Support","Not sure yet"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div><label className="block text-xs font-semibold text-charcoal mb-1.5">Your Message *</label>
                      <textarea required rows={5} placeholder="Tell us about what you're looking for, or any questions you have..." className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 outline-none text-sm transition-colors resize-none" />
                    </div>
                    <div className="flex items-start gap-3">
                      <input required type="checkbox" id="consent" className="mt-1 flex-shrink-0 accent-purple-700" />
                      <label htmlFor="consent" className="text-xs text-grey-600 cursor-pointer">I agree to Badwi Care contacting me in response to this enquiry. My details will not be shared with third parties. *</label>
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full bg-purple-700 hover:bg-purple-600 disabled:opacity-70 text-white font-semibold py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm flex items-center justify-center gap-2">
                      {loading ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12 h-72 bg-white rounded-3xl border-2 border-dashed border-purple-200 flex flex-col items-center justify-center gap-3">
            <span className="text-5xl">📍</span>
            <p className="font-semibold text-charcoal">Map coming soon</p>
            <p className="text-sm text-grey-400">Badwi Care Limited | Address to be confirmed</p>
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="py-12 bg-purple-gradient">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { label: "Call us now", value: "01753 201180", href: "tel:01753201180" },
              { label: "Email us",    value: "info@badwicare.com", href: "mailto:info@badwicare.com" },
              { label: "Office hours",value: "Mon–Fri 9am–5pm", href: undefined },
              { label: "Response",   value: "Within 1 working day", href: undefined },
            ].map(item => (
              <div key={item.label} className="text-white">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                {item.href
                  ? <a href={item.href} className="font-bold text-sm hover:text-purple-200 transition-colors">{item.value}</a>
                  : <p className="font-bold text-sm">{item.value}</p>
                }
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
