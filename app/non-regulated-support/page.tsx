import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Non-Regulated Support",
  description: "Non-regulated support services from Badwi Care — companionship, shopping, cleaning, meal preparation, community access and wellbeing checks.",
};

const supportServices = [
  { title: "Companionship & Social Visits", desc: "Genuine, warm company — someone to talk to, share a meal with, or simply be present. Combating loneliness and improving wellbeing every single visit." },
  { title: "Shopping & Errands",             desc: "Accompanying or carrying out food shopping, collecting prescriptions, posting letters or running local errands — maintaining independence and routine." },
  { title: "Cleaning & Domestic Help",       desc: "Light housekeeping, vacuuming, laundry, washing up and tidying — maintaining a clean, safe and comfortable living environment." },
  { title: "Meal Preparation",              desc: "Planning and preparing nutritious, enjoyable meals that cater to dietary needs, cultural preferences and personal tastes." },
  { title: "Community Access",              desc: "Support to access social activities, leisure, clubs, religious services and community groups — reducing isolation and building real connection." },
  { title: "Appointment Accompaniment",    desc: "Accompanying individuals to GP, hospital, dental or other appointments — ensuring they feel supported, understood and never alone." },
  { title: "Wellbeing Checks",             desc: "Regular friendly visits or calls to check in — providing reassurance to individuals and peace of mind to families who live further away." },
  { title: "Family Reassurance",           desc: "Regular updates and clear communication so families always know how their loved one is doing, even when they can't be there themselves." },
  { title: "Social Inclusion Activities",  desc: "Support to attend day centres, hobby groups, arts activities or social events — promoting meaningful engagement and connection." },
  { title: "Sitting Service",              desc: "A trusted sitter to stay with someone while a family carer takes a short break — providing reassurance to everyone involved." },
  { title: "Non-Regulated Home Help",      desc: "General support around the home — changing bed linen, organising post, watering plants and other practical tasks that keep life running smoothly." },
  { title: "Technology & Digital Support", desc: "Helping individuals stay connected through phones, tablets and video calls — reducing digital isolation and enabling contact with loved ones." },
];

export default function NonRegulatedPage() {
  return (
    <>
      <PageHero
        label="Practical & Social Support"
        heading="Non-regulated support that transforms everyday life"
        subtext="Our non-regulated services don't involve personal care — but they are just as valuable. They help people stay connected, independent, and living well in the home they love."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Non-Regulated Support" }]}
        image="https://images.pexels.com/photos/34073814/pexels-photo-34073814.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      {/* Explainer */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-purple-50 border border-purple-200 border-l-4 border-l-purple-500 rounded-2xl p-6 text-sm text-grey-600 max-w-4xl">
            <strong className="text-purple-700">What does &lsquo;non-regulated&rsquo; mean?</strong> Non-regulated services are those that do not involve personal care tasks (such as washing, dressing or medication). They do not require CQC registration, but at Badwi Care they are delivered with the same professionalism, warmth and quality as all our other services.
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-charcoal font-bold text-3xl mb-10 text-center">Everything we offer under non-regulated support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all duration-200">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Check size={16} className="text-purple-700" />
                </div>
                <h3 className="font-bold text-charcoal mb-2 text-base">{s.title}</h3>
                <p className="text-grey-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + text */}
      <section className="py-20 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/34073814/pexels-photo-34073814.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Support worker accompanying someone confidently in the community" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-charcoal font-bold text-3xl mb-5">Small things make a big difference</h2>
              <p className="text-grey-600 leading-relaxed mb-4">It might sound simple — a trip to the shops, a conversation over tea, help tidying the kitchen. But for many people, these are the things that determine whether life feels manageable and meaningful, or isolating and overwhelming.</p>
              <p className="text-grey-600 leading-relaxed mb-4">Non-regulated support is often the first step that families take when they notice someone is struggling. It can reduce the risk of a more serious crisis, support mental health and wellbeing, and provide vital breathing space for family carers.</p>
              <p className="text-grey-600 leading-relaxed">At Badwi Care, we treat every visit — however brief — as an opportunity to make a real, positive difference in someone&apos;s day.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Interested in non-regulated support?" subtext="We'll have a relaxed conversation about what you need and put together a flexible package that genuinely helps." />
    </>
  );
}
