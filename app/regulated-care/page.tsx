import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/siteConfig";
import { Check, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Regulated Care",
  description: "Badwi Care's regulated services include personal care, medication support, safeguarding, care planning and CQC-aligned governance.",
};

const features = [
  { title: "Personal Care", desc: "Washing, bathing, dressing, grooming, oral hygiene and continence care — delivered with absolute dignity and respect, always led by the individual's preference and choice." },
  { title: "Medication Support", desc: "Trained carers administer or prompt medication correctly and on time, with full documentation completed at every visit using medication administration records (MAR sheets)." },
  { title: "Care Planning", desc: "Every regulated service begins with a detailed, co-produced care plan. We assess needs, document preferences, involve families and set meaningful, measurable goals." },
  { title: "Risk Assessments", desc: "Comprehensive risk assessments are completed before care begins and reviewed regularly — covering moving and handling, environment, health risks and specific individual factors." },
  { title: "Safeguarding", desc: "All staff are trained in adult safeguarding to the level appropriate for their role. We have clear procedures for identifying, responding to and reporting any concerns." },
  { title: "Trained Staff", desc: "Every carer is DBS-checked, reference-verified and trained to Care Certificate standard, with ongoing specialist training relevant to the needs of those they support." },
  { title: "Dignity & Privacy", desc: "All care is delivered in a way that preserves dignity, privacy and the individual's sense of self. We never rush, never dismiss, and always ask before acting." },
  { title: "CQC-Aligned Governance", desc: "Our policies, procedures, record-keeping and quality systems are aligned with CQC's fundamental standards and the Health and Social Care Act 2008." },
  { title: "Family Involvement", desc: "Families are partners, not bystanders. We keep loved ones informed, involve them in reviews and act on their feedback to continuously improve care." },
  { title: "Monitoring & Reviews", desc: "Care plans are reviewed at least every three months or sooner if needs change. We also conduct spot checks and gather regular feedback from service users." },
];

const whoWeSupport = ["Older adults needing personal care", "People living with dementia", "Adults with physical disabilities", "People with learning disabilities", "Individuals with autism", "Adults with mental health conditions", "People recovering from stroke or surgery", "Those with neurological conditions", "Individuals with acquired brain injuries", "People requiring palliative or end-of-life care"];

export default function RegulatedCarePage() {
  return (
    <>
      <PageHero
        label="Regulated Services"
        heading="Regulated care delivered with skill and compassion"
        subtext="Our regulated care services involve personal care tasks and specialist health-related support, delivered by trained professionals using robust governance frameworks."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Regulated Care" }]}
        image="https://images.pexels.com/photos/29372536/pexels-photo-29372536.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      {/* Compliance */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-purple-50 border border-purple-200 border-l-4 border-l-purple-600 rounded-2xl p-6 flex gap-4">
            <Shield size={20} className="text-purple-700 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-grey-600"><strong className="text-purple-700">Important: </strong>{siteConfig.compliance}</p>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-charcoal font-bold text-3xl mb-10 text-center">How we ensure safe, regulated care</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all duration-200">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Check size={18} className="text-purple-700" />
                </div>
                <h3 className="font-bold text-charcoal mb-2">{f.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we support */}
      <section className="py-16 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-charcoal font-bold text-3xl">Who we support through regulated care</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {whoWeSupport.map((item) => (
              <div key={item} className="flex items-center gap-2.5 bg-white rounded-xl p-4 border border-purple-100 text-sm text-grey-600 shadow-soft">
                <Check size={14} className="text-purple-500 flex-shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to discuss regulated care?" subtext="Our team will listen carefully, carry out a thorough assessment, and create a care plan that truly fits your situation." btn1Label="Contact Us Today" btn2Label="View All Services" btn2Href="/services" />
    </>
  );
}
