import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Badwi Care — our story, mission, vision, values and commitment to delivering compassionate, person-centred care.",
};

const commitments = [
  "Every care plan is co-produced with the individual and their family",
  "We match carers carefully — personality, skills and compatibility",
  "Regular reviews ensure care stays relevant and genuinely helpful",
  "Families are kept informed and involved at every stage",
  "We respect cultural, religious and personal values in all we do",
  "Safeguarding is embedded in everything — not just a tick-box",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        heading="Built on compassion. Driven by purpose."
        subtext="Badwi Care was founded with a clear belief: everyone deserves care that treats them as a whole person — with dignity, warmth and real respect."
        breadcrumbs={[{ label: "About Us" }]}
        image="https://images.pexels.com/photos/29372536/pexels-photo-29372536.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=1200"
                   alt="Badwi Care team member supporting an older person at home" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Who We Are</span>
              <h2 className="text-charcoal font-bold leading-tight mb-5 text-3xl lg:text-4xl">A care provider you can truly rely on</h2>
              <p className="text-grey-600 leading-relaxed mb-4">Badwi Care is a dedicated care provider committed to delivering high-quality, compassionate support to adults, older people, families, and individuals living with disabilities or health conditions.</p>
              <p className="text-grey-600 leading-relaxed mb-4">We believe every person deserves to live with dignity, independence and real choice. Whether someone needs a little extra help at home or more complex, ongoing support, our team is here to work alongside them — listening, adapting and always putting wellbeing first.</p>
              <p className="text-grey-600 leading-relaxed">We are not just a care company — we are trusted partners in the wellbeing of those we support and their families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-purple-gradient rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/85 leading-relaxed">To provide compassionate, high-quality care and support that enables every individual we work with to live with dignity, independence and confidence — in a way that reflects their personal values and life goals.</p>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
              <p className="text-grey-600 leading-relaxed">A world where everyone who needs care receives it from people who truly care — where support is flexible, responsive and built around the whole person. We aspire to be a care provider that families trust completely, professionals recommend confidently, and staff are proud to work for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Person-centred approach */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Our Approach</span>
              <h2 className="text-charcoal font-bold leading-tight mb-5 text-3xl lg:text-4xl">Person-centred care — what it really means</h2>
              <p className="text-grey-600 leading-relaxed mb-4">Person-centred care is not a buzzword at Badwi Care. It is the foundation of everything we do. It means getting to know each person as an individual — understanding their history, preferences, routines, fears and dreams.</p>
              <p className="text-grey-600 leading-relaxed mb-6">Before we begin any care package, we sit with the individual and their family to truly understand what matters most. We ask: &ldquo;What does a good day look like for you?&rdquo; — and then we work backwards from there.</p>
              <ul className="space-y-3">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-grey-600">
                    <CheckCircle2 size={18} className="text-purple-500 flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/29372693/pexels-photo-29372693.jpeg?auto=compress&cs=tinysrgb&w=1200"
                   alt="Care professional providing person-centred support at home" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <CTASection heading="Ready to find out how we can help?" subtext="Whether you're exploring care options for the first time or looking to make a change — we're ready to have an honest, supportive conversation." btn1Label="Contact Us Today" btn2Label="View Our Services" />
    </>
  );
}
