# 🌟 Elizaveta Landing Page

![Astro Badge](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE) ![Tailwind Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Website Preview](./docs/site_preview.png)

A modern, fast, and responsive landing page developed for a teacher, Elizaveta. The website is built using cutting-edge web technologies to ensure maximum performance, excellent SEO, and a smooth user experience.

🔗 **Live Site**: [elizavetayuvati.ru](https://elizavetayuvati.ru/)

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 + [tailwind-variants](https://www.tailwind-variants.org/)
- **Animations**: `tailwindcss-intersect`, `tailwind-typewriter`, `@oglofus/tailwind-viewport-animations`
- **UI Components**: [astro-swiper](https://github.com/nolimits4web/swiper) (for sliders and carousels)
- **SEO & Metadata**: `astro-seo`, `@astrojs/sitemap`, `schema-dts` (for JSON-LD structured data)
- **Build Tool**: Vite (built into Astro)
- **Requirements**: Node.js `>= 22.12.0`

## 🚀 Project Structure

The project features a modular and clean architecture, making it easy to maintain and scale:

```text
/
├── public/              # Static files (favicon, robots.txt, etc.)
├── src/
│   ├── assets/          # Images, fonts, and other media resources
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page templates (e.g., Layout.astro)
│   ├── sections/        # Landing page sections (Hero, About, Pricing, etc.)
│   ├── ui/              # Base interface elements (Container, Section)
│   ├── widgets/         # Global widgets (Header, Footer)
│   └── pages/           # Routes and pages (index.astro)
└── package.json         # Project dependencies and scripts
```

## ⚙️ Installation & Setup

To get started with the project, ensure you have **Node.js version 22.12.0 or higher** installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/VladSivoloobov/elizaveta-landing.git
   cd elizaveta-landing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   The site will be available at: `http://localhost:4321`

## 📜 Available Commands

All commands are run from the root of the project in your terminal:

| Command                   | Description                                                             |
| :------------------------ | :---------------------------------------------------------------------- |
| `npm run dev`             | Starts the local development server with Hot Module Replacement (HMR)   |
| `npm run build`           | Builds the optimized production-ready site into the `./dist/` directory |
| `npm run preview`         | Locally previews the built site before deploying                        |
| `npm run astro`           | Accesses the Astro CLI (e.g., `npm run astro add react`)                |
| `npm run astro -- --help` | Gets help information for Astro CLI commands                            |

## ✨ Key Features

- **📱 Fully Responsive**: Flawless display across all devices (mobile, tablet, desktop).
- **⚡ High Performance**: Astro generates static HTML, ensuring lightning-fast page loads and high Lighthouse scores.
- **🔍 SEO Optimized**: Built-in support for meta tags, structured data, and automatic `sitemap.xml` generation.
- **🎨 Modern Animations**: Smooth scroll-triggered element appearances using specialized Tailwind plugins.
- **🧩 Modularity**: Clean separation of concerns into sections, widgets, and UI components.

## 📝 Landing Page Sections

1. **Header** – Site navigation.
2. **HeroSection** – Main screen with the primary value proposition and call to action.
3. **AboutSection** – Information about the teacher.
4. **SpecializationSection** – Teaching directions and areas of expertise.
5. **BenefitsSection** – Advantages of the learning process.
6. **RatingSection** – Reviews and ratings (powered by a slider).
7. **PricingSection** – Cost of services or courses.
8. **CtaSection** – Final call to action.
9. **Footer** – Contact information and useful links.

## 👨‍💻 Author

- **Developer**: Vlad Sivoloobov
- **GitHub**: [VladSivoloobov](https://github.com/VladSivoloobov)

---

> 💡 **Tip**: Before final deployment, remember to verify all texts, contact details, and links within the section files (`src/sections/`) and widgets (`src/widgets/`). Also, update the `sitemap` configuration in `astro.config.mjs` with the actual production domain.
