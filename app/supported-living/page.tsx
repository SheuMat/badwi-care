import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Supported Living",
  description: "Badwi Care's supported living service provides person-centred support for adults in their own home — promoting independence, life skills and community participation.",
};

const supportItems = [
  { title: "Personal Care Support",     desc: "Support with personal care tasks as needed — always delivered with dignity and working towards maximum independence." },
  { title: "Life Skills Development",   desc: "Cooking, budgeting, shopping, cleaning and managing a home — coaching individuals to develop practical independence skills." },
  { title: "Community Participation",   desc: "Support to access education, employment, volunteering, leisure and social groups — staying connected and included in community life." },
  { title: "Medication Management",     desc: "Support with medication routines — from prompting and self-administration to full administration where clinically appropriate." },
  { title: "Tenancy Support",           desc: "Helping individuals understand and maintain their tenancy responsibilities — managing bills, correspondence and household administration." },
  { title: "Family & Network Liaison",  desc: "Working collaboratively with families, social workers, care coordinators and commissioners to ensure the support package is fully joined up." },
];

export default function SupportedLivingPage() {
  return (
    <>
      <PageHero
        label="Independent Living"
        heading="Supported living — your home, your way, with the right support"
        subtext="We support adults with disabilities, learning needs and complex health conditions to live independently — with person-centred support that builds real skills and confidence."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Supported Living" }]}
        image="https://images.pexels.com/photos/34073814/pexels-photo-34073814.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">What Is Supported Living?</span>
              <h2 className="text-charcoal font-bold text-3xl mb-5">Living independently with the right support around you</h2>
              <p className="text-grey-600 leading-relaxed mb-4">Supported living means living in your own home — whether that&apos;s a flat you rent, a house you own, or a shared property — with support from trained professionals who help you manage daily life on your terms.</p>
              <p className="text-grey-600 leading-relaxed mb-4">Unlike residential care, you have a tenancy agreement and full control over your home and lifestyle. Our support is flexible and person-centred — evolving as your confidence, skills and needs change over time.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Learning disabilities","Autism","Mental health","ABI","Young adults in transition"].map(t => (
                  <span key={t} className="bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/7551598/pexels-photo-7551598.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Person using a tablet at home to stay independent and connected" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="text-charcoal font-bold text-3xl mb-8 text-center">Support that builds real independence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportItems.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all">
                <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Check size={16} className="text-purple-700" />
                </div>
                <h3 className="font-bold text-charcoal mb-2">{s.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Looking for supported living support?" subtext="Whether you're a family member, a social worker or an individual — we'd love to talk about how we can help." />
    </>
  );
}
