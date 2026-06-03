import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const quickLinks = [
  { label: "Home",            href: "/" },
  { label: "About Us",        href: "/about" },
  { label: "Our Services",    href: "/services" },
  { label: "Careers",         href: "/careers" },
  { label: "Contact Us",      href: "/contact" },
];

const serviceLinks = [
  { label: "Regulated Care",            href: "/regulated-care" },
  { label: "Non-Regulated Support",     href: "/non-regulated-support" },
  { label: "Domiciliary Care",          href: "/domiciliary-care" },
  { label: "Live-in Care",              href: "/live-in-care" },
  { label: "Supported Living",          href: "/supported-living" },
  { label: "Companionship",             href: "/companionship" },
  { label: "Complex Care",              href: "/complex-care" },
  { label: "Respite Care",              href: "/respite-care" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 text-white/70">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="h-14 w-auto object-contain rounded-lg bg-white p-1.5"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              {siteConfig.description}
            </p>
            <p className="text-xs text-white/40">© {year} Badwi Care Limited. All rights reserved.</p>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-7 after:h-0.5 after:bg-purple-400 after:rounded-full">
              Quick Links
            </h5>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-purple-300 transition-colors hover:translate-x-1 inline-block transition-transform">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-7 after:h-0.5 after:bg-purple-400 after:rounded-full">
              Our Services
            </h5>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-purple-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-7 after:h-0.5 after:bg-purple-400 after:rounded-full">
              Contact Us
            </h5>
            <ul className="mt-4 space-y-4">
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g,"")}`}
                   className="flex items-start gap-3 text-sm hover:text-purple-300 transition-colors">
                  <Phone size={15} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}
                   className="flex items-start gap-3 text-sm hover:text-purple-300 transition-colors">
                  <Mail size={15} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={15} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance & copyright */}
        <div className="pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {year} Badwi Care Limited. Registered in England &amp; Wales.
          </p>
          <p className="text-xs text-white/40 max-w-2xl lg:text-right">
            {siteConfig.compliance}
          </p>
        </div>
      </div>
    </footer>
  );
}
