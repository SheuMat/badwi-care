import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services, allServicesList } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the full range of care services offered by Badwi Care — regulated personal care, non-regulated support, live-in care, supported living and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Offer"
        heading="Care and support services built around real lives"
        subtext="From regulated personal care to non-regulated community support — we offer a comprehensive, flexible range of services designed to meet you exactly where you are."
        breadcrumbs={[{ label: "Our Services" }]}
        image="https://images.pexels.com/photos/29372693/pexels-photo-29372693.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      {/* Compliance note */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-purple-50 border border-purple-200 border-l-4 border-l-purple-600 rounded-2xl p-6 text-sm text-grey-600">
            <strong className="text-purple-700">Our commitment: </strong>{siteConfig.compliance}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-charcoal font-bold text-3xl mb-10">All our services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Full list */}
      <section className="py-20 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Complete List</span>
            <h2 className="text-charcoal font-bold text-3xl">Every service we provide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {allServicesList.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-soft border border-purple-100 text-sm text-grey-600">
                <Check size={16} className="text-purple-500 flex-shrink-0" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Not sure which service is right for you?" subtext="We're happy to talk it through. Contact us for a free, no-obligation conversation about your needs and how we can help." />
    </>
  );
}
