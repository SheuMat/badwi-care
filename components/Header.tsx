"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const navItems = [
  { label: "Home",      href: "/" },
  { label: "About Us",  href: "/about" },
  {
    label: "Our Services",
    href:  "/services",
    children: [
      { label: "All Services",              href: "/services" },
      { label: "Regulated Care",            href: "/regulated-care" },
      { label: "Non-Regulated Support",     href: "/non-regulated-support" },
      { label: "Domiciliary Care",          href: "/domiciliary-care" },
      { label: "Supported Living",          href: "/supported-living" },
      { label: "Live-in Care",              href: "/live-in-care" },
      { label: "Complex Care",              href: "/complex-care" },
      { label: "Companionship & Community", href: "/companionship" },
      { label: "Respite & Family Support",  href: "/respite-care" },
    ],
  },
  { label: "Careers",   href: "/careers" },
  { label: "Contact",   href: "/contact" },
];

export default function Header() {
  const pathname   = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Top bar ── */}
      <div className="bg-purple-900 text-white/80 text-[0.78rem] py-2">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-5 flex-wrap">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g,"")}`}
               className="flex items-center gap-1.5 hover:text-purple-300 transition-colors">
              <Phone size={13} /> {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`}
               className="flex items-center gap-1.5 hover:text-purple-300 transition-colors">
              <Mail size={13} /> {siteConfig.contact.email}
            </a>
          </div>
          <span className="hidden sm:block">{siteConfig.contact.officeHours}</span>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-card" : "shadow-soft"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        pathname.startsWith("/services") ||
                        item.children.some(c => pathname === c.href)
                          ? "text-purple-700 bg-purple-50"
                          : "text-charcoal hover:text-purple-700 hover:bg-purple-50"
                      }`}
                      onMouseEnter={() => setDropdown(item.label)}
                      onMouseLeave={() => setDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          dropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setDropdown(item.label)}
                      onMouseLeave={() => setDropdown(null)}
                      className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-purple-100 py-2 transition-all duration-200 ${
                        dropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                            pathname === child.href
                              ? "text-purple-700 bg-purple-50"
                              : "text-grey-800 hover:text-purple-700 hover:bg-purple-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      pathname === item.href
                        ? "text-purple-700 bg-purple-50"
                        : "text-charcoal hover:text-purple-700 hover:bg-purple-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get in Touch
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-purple-100 ${
            open ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <div className="px-4 py-4 space-y-1 bg-white">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === item.href
                      ? "text-purple-700 bg-purple-50"
                      : "text-charcoal hover:text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-purple-100 pl-4">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-grey-600 hover:text-purple-700 transition-colors font-medium"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center bg-purple-700 hover:bg-purple-600 text-white px-4 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
