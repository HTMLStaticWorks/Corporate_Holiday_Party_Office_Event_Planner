# Vanta Events | Corporate Holiday Party & Office Event Planner

> Premium corporate holiday parties, office celebrations, venue sourcing, catering coordination, entertainment curation, RSVP headcount management, and turnkey event production.

![Vanta Events Banner](https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=90)

---

## 🌟 Overview

**Vanta Events** is a modern, responsive corporate event planning website built with pure semantic HTML5, Vanilla CSS3, and Vanilla JavaScript. The platform is designed specifically for enterprise HR teams, corporate communication leads, and executive assistants planning annual holiday parties, milestone celebrations, and office showcases.

Originally consolidated as a monolithic single-page experience, the codebase has now been structured into dedicated, clean, standalone pages where each document maintains strictly its own page-specific markup while sharing a unified design token system and behavior scripts.

---

## 📁 Repository Structure

```text
Corporate_Holiday_Party_Office_Event_Planner/
├── 404.html                  # Branded 404 Not Found error page
├── README.md                 # Project documentation and guide
├── about.html                # About Us: story, principles, approach, scale
├── assets/
│   ├── css/
│   │   ├── dark-mode.css     # Dedicated dark theme variables & overrides
│   │   ├── rtl.css           # Right-to-left directional styling rules
│   │   └── style.css         # Core CSS design system, typography, grids & components
│   └── js/
│       ├── dashboard.js      # Interactive dashboard view switcher & chart animation
│       └── main.js           # Theme toggle, RTL toggle, mobile nav, toast, loader & forms
├── case-studies.html         # Alias redirect to portfolio.html
├── coming-soon.html          # Virtual Venue Studio teaser & waitlist form
├── contact.html              # Plan Your Event: details, contact cards, interactive map & form
├── dashboard.html            # Event Manager portal: overview, requirements, venues, vendors, RSVP, budget
├── home-2.html               # Alias redirect to home2.html
├── home2.html                # Home 2: "Make Work Feel Worth Celebrating", packages & reviews
├── index.html                # Home 1: "Corporate Events, Designed to Impress", animated stage
├── login.html                # Client portal sign-in with social auth & form
├── pricing.html              # Dedicated event planning packages & comparison
├── register.html             # Alias redirect to signup.html
├── robots.txt                # Search engine crawler directives
├── services.html             # Core services: venue sourcing, catering, entertainment, production
├── signup.html               # Corporate account registration
└── sitemap.xml               # Complete XML sitemap for SEO indexing
```

---

## 🚀 Pages & Structure

| Page | URL | Description |
| :--- | :--- | :--- |
| **Home 1** | [`index.html`](index.html) | Primary landing page with animated orbital showcase, hero statistics, categories, planning timeline, and gallery. |
| **Home 2** | [`home2.html`](home2.html) | Alternative modern team celebration landing page featuring image grid hero, package cards, and testimonials. |
| **About Us** | [`about.html`](about.html) | Company history, founding principles, strategic planning workflow, and experience metrics. |
| **Services** | [`services.html`](services.html) | Comprehensive breakdown of venue sourcing, custom catering, live entertainment, and technical production. |
| **Portfolio** | [`portfolio.html`](portfolio.html) | Visual showcase of ballrooms, festive celebrations, corporate dinner settings, and live event production. |
| **Pricing** | [`pricing.html`](pricing.html) | Detailed planning packages (Team Social, Holiday Gala, Signature Experience) with feature comparison. |
| **Contact** | [`contact.html`](contact.html) | Interactive enquiry form with service dropdowns, direct contact details, and location map. |
| **Dashboard** | [`dashboard.html`](dashboard.html) | Dedicated event management interface tracking requirements, venue bookings, vendor statuses, RSVPs, and budgets. |
| **Login** | [`login.html`](login.html) | Authentication page with Google/Apple sign-in buttons, email authentication, and password reset. |
| **Signup** | [`signup.html`](signup.html) | Corporate client registration form with terms acceptance and quick sign-in link. |
| **Coming Soon**| [`coming-soon.html`](coming-soon.html) | Preview of the 2026 Virtual Venue Studio with VIP waitlist capture. |
| **404 Page** | [`404.html`](404.html) | Graceful error page guiding users back to the event reception. |

---

## 🎨 Design System & Aesthetics

- **Color Palette**:
  - Primary Accent: `#7446E8` (Vanta Purple) & `#9A6CFF`
  - Luxury Gold: `#EBCB69` & `#B99431`
  - Festive Coral: `#F56C74`
  - Cyan Highlights: `#35C7D9`
  - Backgrounds: `#F5F7FB` (Light Surface) & `#0A1020` / `#070B15` (Sleek Dark Mode)
- **Typography**:
  - Primary font: `DM Sans` (Google Fonts)
  - Display/Headings font: `Manrope` (Google Fonts)
- **Key Features**:
  - **Dark / Light Theme Toggle**: Persistent via browser `localStorage`.
  - **RTL (Right-to-Left) Mode**: Full RTL layout flipping for international and multi-lingual accessibility.
  - **Fluid Responsive Design**: Pixel-perfect adaptability across desktop (1440px+), laptop (1024px), tablet (768px), and mobile (320px+).
  - **Dynamic Micro-Interactions**: Scroll reveal intersection observers, orbital rotation animations, glowing radial backdrops, and interactive activity charts.

---

## 💻 Local Preview & Usage

Because the application uses standard HTML5, CSS3, and JavaScript, no complex build tools or compilers are required:

1. **Direct Browser Launch**:
   Open [`index.html`](index.html) in any modern web browser (Chrome, Edge, Firefox, Safari).

2. **Local HTTP Server (Optional)**:
   ```bash
   # Using Python
   python -m http.server 8000

   # Or using Node.js npx
   npx serve .
   ```
   Then navigate to `http://localhost:8000`.

---

## © License & Attribution
&copy; 2026 Vanta Events. All rights reserved. Designed for corporate celebrations, office holiday galas, and enterprise events.
