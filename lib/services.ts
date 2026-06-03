// ─── Service catalogue ────────────────────────────────────────

export interface Service {
  slug:        string;
  title:       string;
  shortTitle:  string;
  description: string;
  icon:        string;   // Lucide icon name
  href:        string;
  regulated:   boolean;
  colour:      string;   // Tailwind bg class for card accent
}

export const services: Service[] = [
  {
    slug:        "domiciliary-care",
    title:       "Domiciliary Care",
    shortTitle:  "Domiciliary Care",
    description: "Professional home visits covering personal care, medication, meals, and daily routines — tailored around your schedule and needs.",
    icon:        "Home",
    href:        "/domiciliary-care",
    regulated:   true,
    colour:      "bg-purple-700",
  },
  {
    slug:        "supported-living",
    title:       "Supported Living",
    shortTitle:  "Supported Living",
    description: "Person-centred support for adults in their own home or shared accommodation — building independence and life skills.",
    icon:        "Building2",
    href:        "/supported-living",
    regulated:   true,
    colour:      "bg-purple-600",
  },
  {
    slug:        "live-in-care",
    title:       "Live-in Care",
    shortTitle:  "Live-in Care",
    description: "A dedicated carer lives with you full-time, providing round-the-clock support, companionship and peace of mind.",
    icon:        "Heart",
    href:        "/live-in-care",
    regulated:   true,
    colour:      "bg-purple-700",
  },
  {
    slug:        "complex-care",
    title:       "Complex Care",
    shortTitle:  "Complex Care",
    description: "Specialist high-acuity support for individuals with complex health needs, neurological conditions, and palliative care.",
    icon:        "Activity",
    href:        "/complex-care",
    regulated:   true,
    colour:      "bg-purple-800",
  },
  {
    slug:        "companionship",
    title:       "Companionship & Community Support",
    shortTitle:  "Companionship",
    description: "Genuine social connection, outings, hobbies and community access — reducing isolation and improving wellbeing.",
    icon:        "Users",
    href:        "/companionship",
    regulated:   false,
    colour:      "bg-purple-500",
  },
  {
    slug:        "respite-care",
    title:       "Respite & Family Support",
    shortTitle:  "Respite Care",
    description: "Giving family carers a well-earned break while ensuring their loved one receives consistent, high-quality care.",
    icon:        "Clock",
    href:        "/respite-care",
    regulated:   false,
    colour:      "bg-purple-600",
  },
  {
    slug:        "regulated-care",
    title:       "Regulated Care",
    shortTitle:  "Regulated Care",
    description: "Personal care, medication administration, care planning and risk assessments delivered to the highest professional standards.",
    icon:        "Shield",
    href:        "/regulated-care",
    regulated:   true,
    colour:      "bg-purple-700",
  },
  {
    slug:        "non-regulated-support",
    title:       "Non-Regulated Support",
    shortTitle:  "Home Help & Support",
    description: "Companionship, shopping, cleaning, meal preparation, appointment support and wellbeing checks — no personal care required.",
    icon:        "Sparkles",
    href:        "/non-regulated-support",
    regulated:   false,
    colour:      "bg-purple-400",
  },
];

export const allServicesList = [
  "Personal care",
  "Medication support",
  "Meal preparation",
  "Domestic support",
  "Shopping support",
  "Companionship",
  "Sitting service",
  "Community access",
  "Appointment support",
  "Hospital discharge support",
  "Respite care",
  "Live-in care",
  "Supported living",
  "Complex care",
  "Dementia support",
  "Learning disability support",
  "Autism support",
  "Mental health support",
  "Palliative/end-of-life support",
  "Reablement support",
  "Family support",
  "Non-regulated home help",
  "Social inclusion activities",
];
