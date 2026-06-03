import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Live-in Care",
  description: "Badwi Care's live-in care service provides 24/7 dedicated support from a carer who lives with you — safety, companionship and continuity in your own home.",
};

const included = ["Personal care & hygiene routines", "Medication administration & prompting", "Nutritious meal preparation", "Genuine companionship & conversation", "Light domestic support & cleaning", "Night-time support & reassurance", "Appointment accompaniment", "Community access & outings", "Family communication & updates", "Medication documentation (MAR sheets)"];

const vsItems = [
  { title: "Stay in your own home", desc: "No upheaval, no adjustment to an unfamiliar environment — surrounded by everything familiar." },
  { title: "One dedicated carer",   desc: "Real continuity — not a different face every shift. A genuine relationship develops naturally." },
  { title: "Your routines",         desc: "Wake up, eat and go to bed when you want — not when a rota says." },
  { title: "Couples stay together", desc: "Live-in care supports couples — keeping partners in the same home together." },
];

export default function LiveInCarePage() {
  return (
    <>
      <PageHero
        label="24/7 Home Support"
        heading="Live-in care — always there, whenever you need them"
        subtext="A dedicated live-in carer shares your home, providing round-the-clock companionship, support and safety — so you never have to face the day alone."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Live-in Care" }]}
        image="https://images.pexels.com/photos/29372693/pexels-photo-29372693.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/29372724/pexels-photo-29372724.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Live-in carer providing reassuring support at home" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">What Is Live-in Care?</span>
              <h2 className="text-charcoal font-bold text-3xl mb-5">The closest thing to family care — from a professional</h2>
              <p className="text-grey-600 leading-relaxed mb-4">Live-in care means a trained, dedicated carer moves into your home and is available to support you throughout the day and night — providing complete continuity of care without you having to leave your home.</p>
              <p className="text-grey-600 leading-relaxed mb-4">Unlike multiple rotating carers, live-in care offers true consistency. You and your carer get to know each other properly — building a trusting relationship that makes every day feel more secure and more human.</p>
              <p className="text-grey-600 leading-relaxed">This option is ideal for people who require support across the whole day, couples where one partner needs care, or individuals whose families want total peace of mind.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-charcoal text-xl mb-6">Everything your live-in carer provides</h3>
              <ul className="space-y-3">{included.map(i => <li key={i} className="flex items-center gap-3 text-sm text-grey-600"><Check size={16} className="text-purple-500 flex-shrink-0" />{i}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-bold text-charcoal text-xl mb-6">Why families choose live-in care over a care home</h3>
              <div className="space-y-4">
                {vsItems.map(v => (
                  <div key={v.title} className="flex gap-4 bg-purple-50 rounded-2xl p-5 border border-purple-100">
                    <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm mb-1">{v.title}</p>
                      <p className="text-grey-600 text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Want to know if live-in care is right for you?" subtext="We'll talk through your needs honestly and help you decide what type of support is the best fit — with no pressure and no obligation." />
    </>
  );
}
