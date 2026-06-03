import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/siteConfig";
import { Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Complex Care",
  description: "Specialist complex care from Badwi Care — supporting individuals with neurological conditions, ABI, dementia, autism, learning disabilities and palliative care needs.",
};

const conditions = [
  { title: "Neurological Conditions",     desc: "Support for MS, Parkinson's, Motor Neurone Disease, Huntington's Disease and other conditions affecting the nervous system." },
  { title: "Acquired Brain Injury",        desc: "Specialist support following traumatic brain injury or stroke — addressing physical, cognitive and emotional recovery across all stages." },
  { title: "Dementia Care",               desc: "Compassionate expert support for all stages of dementia — maintaining dignity, reducing anxiety and supporting quality of life throughout." },
  { title: "Palliative & End-of-Life Care", desc: "Sensitive, compassionate support in the final stages of life — ensuring comfort, dignity and the ability to remain at home with loved ones." },
  { title: "Spinal Cord Injury",           desc: "Skilled support including moving and handling, respiratory support, skin integrity management and community access facilitation." },
  { title: "Learning Disabilities",        desc: "Specialist support for adults with mild, moderate or profound learning disabilities — personalised, enabling and consistently respectful." },
  { title: "Autism Support",               desc: "Support for autistic adults tailored to their specific sensory, communication and daily living needs — delivered calmly and consistently." },
  { title: "Mental Health Support",        desc: "Practical and emotional support for individuals with mental health conditions, including dual diagnosis — trauma-informed and person-led." },
  { title: "Complex Medication",           desc: "PEG feeding, catheter care, stoma care, complex medication regimes and other health-related tasks requiring trained, skilled professionals." },
  { title: "Reablement Support",           desc: "Supporting individuals following hospital discharge to regain skills, rebuild confidence and re-establish independence at home." },
];

const approach = [
  { title: "Specialist Training",          desc: "Care workers receive enhanced, condition-specific training relevant to each individual's needs." },
  { title: "Multi-Disciplinary Working",   desc: "We work alongside GPs, nurses, OTs, physios and social workers to ensure care is coordinated and clinically sound." },
  { title: "Detailed Care Plans",          desc: "Comprehensive, regularly reviewed care plans address all identified needs and risks in full." },
  { title: "Family Partnership",           desc: "Families are central to the care team — informed, involved and supported throughout with clear communication channels." },
];

export default function ComplexCarePage() {
  return (
    <>
      <PageHero
        label="Specialist Support"
        heading="Complex care — expert support for complex needs"
        subtext="We provide specialist, skilled care for individuals with high-acuity, complex health and care needs — delivered at home with warmth, dignity and person-centred values."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Complex Care" }]}
        image="https://images.pexels.com/photos/29372536/pexels-photo-29372536.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-purple-50 border border-purple-200 border-l-4 border-l-purple-600 rounded-2xl p-6 flex gap-4">
            <Activity size={20} className="text-purple-700 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-grey-600"><strong className="text-purple-700">Our commitment: </strong>{siteConfig.compliance}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-charcoal font-bold text-3xl mb-10 text-center">Conditions and needs we support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all">
                <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Activity size={16} className="text-purple-700" />
                </div>
                <h3 className="font-bold text-charcoal mb-2">{c.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-charcoal font-bold text-3xl mb-8 text-center">How we deliver complex care safely</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approach.map(a => (
              <div key={a.title} className="bg-white rounded-2xl p-6 border border-purple-100 border-l-4 border-l-purple-600">
                <h3 className="font-bold text-charcoal mb-2 text-sm">{a.title}</h3>
                <p className="text-grey-600 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Enquire about complex care support" subtext="Complex needs require thoughtful, experienced support. Contact our team for a detailed discussion — in confidence and with no obligation." />
    </>
  );
}
