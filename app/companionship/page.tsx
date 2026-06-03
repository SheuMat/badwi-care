import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Smile, MapPin, Music, Users, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Companionship & Community Support",
  description: "Badwi Care's companionship and community support services reduce isolation through genuine social connection, outings, activities and community access.",
};

const companionshipServices = [
  { icon: Smile,    title: "In-Home Social Visits",    desc: "Regular, friendly visits at home — chatting, sharing a meal, watching a favourite programme, playing games or simply being present." },
  { icon: MapPin,   title: "Community Outings",         desc: "Trips to local cafés, parks, shops, libraries, places of worship — keeping people connected to the wider world." },
  { icon: Music,    title: "Hobbies & Activities",     desc: "Accompanying individuals to hobby groups, craft classes, exercise sessions, cinema or any activity that brings pleasure and purpose." },
  { icon: Users,    title: "Social Groups & Events",   desc: "Support to attend day centres, social clubs, community events or faith groups — helping people maintain social networks." },
  { icon: Phone,    title: "Telephone Befriending",    desc: "Regular friendly check-in calls for individuals who cannot have in-person visits or who benefit from additional remote social contact." },
  { icon: Calendar, title: "Appointment Accompaniment", desc: "Being there for medical, dental or social appointments — providing emotional support and ensuring nothing is missed." },
];

export default function CompanionshipPage() {
  return (
    <>
      <PageHero
        label="Social & Community"
        heading="Companionship that brightens every single day"
        subtext="Loneliness is one of the biggest threats to health. Our companionship and community support services bring warmth, connection and purpose back into daily life."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Companionship & Community" }]}
        image="https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold tracking-widest uppercase rounded-full">Why Companionship Matters</span>
              <h2 className="text-charcoal font-bold text-3xl mb-5">Connection is not a luxury — it&apos;s a necessity</h2>
              <p className="text-grey-600 leading-relaxed mb-4">Research consistently shows that loneliness and social isolation have serious impacts on physical and mental health — increasing the risk of depression, cognitive decline and reduced life expectancy. A friendly, reliable presence can genuinely change someone&apos;s life.</p>
              <p className="text-grey-600 leading-relaxed">We take great care in matching companions with the individuals they support — considering personality, interests, communication style and cultural background to ensure the connection feels natural and genuine, not like a service.</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Carer and older person sharing friendly companionship at home" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="text-charcoal font-bold text-3xl mb-8 text-center">How we bring companionship to life</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companionshipServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-card p-6 transition-all">
                  <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-purple-700" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">{s.title}</h3>
                  <p className="text-grey-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection heading="Could companionship support help someone you care about?" subtext="It's a simple conversation that could lead to a big change in someone's daily life. We'd love to hear from you." />
    </>
  );
}
