import type { Metadata } from "next";
import { Suspense } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import ValuesSection from "@/components/ValuesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCards from "@/components/TestimonialCards";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";
import IntroSection from "@/components/IntroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import RegulatedSplitSection from "@/components/RegulatedSplitSection";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero Slider ── */}
      <Suspense>
        <HeroSlider />
      </Suspense>

      {/* ── Intro ── */}
      <IntroSection />

      {/* ── Service Cards ── */}
      <section className="py-20 bg-grey-50" style={{ background: "#F8F7FC" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-[0.1em] uppercase rounded-full">
              How We Can Help
            </span>
            <h2 className="text-charcoal font-bold leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
              Care and support services built around real lives
            </h2>
            <p className="text-grey-600 text-base leading-relaxed">
              From regulated personal care to non-regulated community support — we offer a comprehensive, flexible range of services designed to meet you exactly where you are.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Regulated vs Non-Regulated ── */}
      <RegulatedSplitSection />

      {/* ── Why Choose ── */}
      <WhyChooseSection />

      {/* ── Values ── */}
      <ValuesSection />

      {/* ── Process ── */}
      <ProcessTimeline />

      {/* ── Care image gallery ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-[0.1em] uppercase rounded-full">
              Our Care in Action
            </span>
            <h2 className="text-charcoal font-bold leading-tight"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
              Moments that matter
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.pexels.com/photos/29372536/pexels-photo-29372536.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Care worker supporting an older person at home" },
              { src: "https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Carer sharing a reassuring conversation with an older person" },
              { src: "https://images.pexels.com/photos/29372693/pexels-photo-29372693.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Live-in carer providing attentive home support" },
              { src: "https://images.pexels.com/photos/29372724/pexels-photo-29372724.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Professional carer providing calm support at home" },
              { src: "https://images.pexels.com/photos/34073814/pexels-photo-34073814.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Support worker accompanying someone in the community" },
              { src: "https://images.pexels.com/photos/8949842/pexels-photo-8949842.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Older adults using a tablet together at home" },
              { src: "https://images.pexels.com/photos/8376245/pexels-photo-8376245.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Care professional reviewing support planning notes" },
              { src: "https://images.pexels.com/photos/7551598/pexels-photo-7551598.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Person using digital support to stay connected at home" },
            ].map((image, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <div key={i} className="aspect-square rounded-3xl overflow-hidden bg-purple-100 group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialCards />

      {/* ── Final CTA ── */}
      <CTASection />
    </>
  );
}
