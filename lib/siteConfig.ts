// ─── Site-wide configuration ──────────────────────────────────
// Update this file to change contact details, brand text, compliance wording

export const siteConfig = {
  name:        "Badwi Care",
  domain:      "badwicare.com",
  tagline:     "Compassionate care, built around you",
  description: "Badwi Care provides high-quality regulated and non-regulated care services across the UK, supporting adults, older people, families and individuals with disabilities to live well at home and in the community.",

  contact: {
    phone:        "01753 201180",
    email:        "info@badwicare.com",
    address:      "Badwi Care Limited, [Add Address Here]",
    officeHours:  "Monday – Friday, 9am – 5pm",
    outOfHours:   "For urgent calls outside office hours, please follow the phone instructions to reach the duty team.",
  },

  social: {
    facebook:  "",
    twitter:   "",
    linkedin:  "",
    instagram: "",
  },

  compliance:
    "Where regulated activity is provided, this will be delivered in line with CQC requirements, robust governance, trained staff, person-centred care planning, safeguarding procedures and ongoing quality monitoring.",

  logo: {
    src:  "/badwi-logo.png",
    alt:  "Badwi Care logo",
    width: 220,
    height: 110,
  },
} as const;
