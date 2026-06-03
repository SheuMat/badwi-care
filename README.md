# Badwi Care — Next.js Website

**Domain:** badwicare.com  
**Stack:** Next.js 15 · React · TypeScript · Tailwind CSS · Framer Motion · Swiper.js · Lucide React  
**Running locally at:** http://localhost:3457

---

## Quick Start

```bash
# Sync from OneDrive to local (avoids OneDrive network timeouts)
rsync -a --exclude='node_modules' --exclude='.next' \
  "/path/to/OneDrive/.../badwi-care-next/" \
  /tmp/badwi-care-next/

cd /tmp/badwi-care-next
npm install
npm run dev
```

Open [http://localhost:3457](http://localhost:3457) in your browser.

---

## File Structure

```
badwi-care-next/
├── app/
│   ├── layout.tsx                   Root layout — Header + Footer wrap every page
│   ├── page.tsx                     Homepage (all homepage sections assembled here)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── regulated-care/page.tsx
│   ├── non-regulated-support/page.tsx
│   ├── domiciliary-care/page.tsx
│   ├── supported-living/page.tsx
│   ├── live-in-care/page.tsx
│   ├── complex-care/page.tsx
│   ├── companionship/page.tsx
│   ├── respite-care/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx                   Sticky nav, top bar, dropdown, mobile menu
│   ├── Footer.tsx                   4-column footer with links & compliance note
│   ├── LogoImage.tsx                Smart logo image with text fallback
│   ├── HeroSlider.tsx               Swiper.js 4-slide hero (edit images here)
│   ├── PageHero.tsx                 Reusable inner-page hero with breadcrumbs
│   ├── ServiceCard.tsx              Service card (default + compact variants)
│   ├── CTASection.tsx               Reusable CTA banner (dark/light)
│   ├── ValuesSection.tsx            6 values — hover cards
│   ├── ProcessTimeline.tsx          7-step care journey
│   ├── TestimonialCards.tsx         3 testimonial cards
│   ├── ContactCards.tsx             Contact info + emergency disclaimer
│   ├── IntroSection.tsx             Homepage intro with image + highlights
│   ├── WhyChooseSection.tsx         8-reason icon grid
│   └── RegulatedSplitSection.tsx    Regulated vs non-regulated split
├── lib/
│   ├── siteConfig.ts                ALL contact details & brand settings (edit here)
│   └── services.ts                  Service catalogue
├── public/
│   └── badwi-logo.png               YOUR LOGO (replace when synced from OneDrive)
└── tailwind.config.ts               Custom colours, shadows, animations
```

---

## 1. How to Add the Real Logo

Copy `badwi logo.png` into `public/` and name it `badwi-logo.png`.  
The logo automatically appears in the Header and Footer.  
If it fails to load, the text "Badwi Care" shows as a fallback.

To adjust size, edit `lib/siteConfig.ts`:
```ts
logo: { src: "/badwi-logo.png", width: 160, height: 52 }
```

---

## 2. How to Replace Slider Images

Edit the `slides` array in `components/HeroSlider.tsx`:

```ts
const slides = [
  {
    id:    1,
    image: "https://images.unsplash.com/...",  // ← swap with your URL or local path
    alt:   "Descriptive alt text",
    ...
  },
]
```

For local images: add files to `public/images/` and use `"/images/hero-1.jpg"`.  
**Recommended:** 1800×1000px JPG/WebP, under 400KB.

---

## 3. How to Change Brand Colours

Edit the `purple` palette in `tailwind.config.ts`:

```ts
purple: {
  700: "#3D1A6E",   // ← Primary brand colour (buttons, nav active, headings)
  900: "#1E0A3C",   // ← Top bar and footer background
  300: "#C4A8E0",   // ← Lavender accent
  50:  "#F5F0FA",   // ← Light section backgrounds
}
```

Gradient backgrounds are also in `tailwind.config.ts` under `backgroundImage`.

---

## 4. How to Update Contact Details

**One file controls everything:** `lib/siteConfig.ts`

```ts
contact: {
  phone:       "01753 201180",
  email:       "info@badwicare.com",
  address:     "Badwi Care Limited, [Add Address Here]",
  officeHours: "Monday – Friday, 9am – 5pm",
  outOfHours:  "For urgent calls outside office hours, please follow the phone instructions.",
},
```

Change once → updates Header, Footer, Contact page, and contact cards everywhere.

---

## 5. How to Add a New Service Page

**Step 1** — Create the page:
```bash
mkdir app/reablement-care
# create app/reablement-care/page.tsx
# copy structure from app/domiciliary-care/page.tsx and customise
```

**Step 2** — Add SEO metadata at the top of your new page.tsx:
```tsx
export const metadata: Metadata = {
  title: "Reablement Care",
  description: "...",
};
```

**Step 3** — Add to the service catalogue in `lib/services.ts` (auto-appears on homepage + /services).

**Step 4** — Add a nav link in `components/Header.tsx` (inside the `children` of "Our Services").

**Step 5** — Add a footer link in `components/Footer.tsx` (inside `serviceLinks`).

---

## 6. How to Remove a Service Page

1. Delete the page folder
2. Remove its entry from `lib/services.ts`
3. Remove its nav link from `components/Header.tsx`
4. Remove its footer link from `components/Footer.tsx`

---

## 7. Deploying to Vercel (Recommended)

### Via GitHub (best for ongoing updates)
1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → connect repo
3. Framework: **Next.js** (auto-detected) — click **Deploy**
4. Add domain: Project Settings → Domains → add `badwicare.com`
5. Update DNS as Vercel instructs

### Via CLI (one-off deploy)
```bash
cd /tmp/badwi-care-next
npx vercel --prod
```

---

## 8. Deploying to Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Build command: `npm run build` · Publish directory: `.next`
3. Deploy — then add your custom domain in site settings

---

## 9. Making the Contact Form Send Real Emails

The forms show a success message client-side only (demo mode).  
To wire them up, choose one:

**Formspree (easiest):**
```tsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Netlify Forms:**
Add `data-netlify="true"` to each `<form>` tag.

**Custom API route (full control):**
Create `app/api/contact/route.ts` using Resend or SendGrid.

---

## 10. Adding CQC Registration

When registered, update `lib/siteConfig.ts`:
```ts
compliance: "Badwi Care Limited is registered with the Care Quality Commission. Registration number: [NUMBER].",
```

Add the CQC widget to the Footer — the embeddable code is available at cqc.org.uk.

---

*Built for Badwi Care Limited — badwicare.com*  
*Next.js · TypeScript · Tailwind CSS · Framer Motion · Swiper.js*
