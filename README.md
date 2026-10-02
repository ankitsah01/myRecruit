# MyRecruit Ltd — Recruitment Agency Web Application

A modern, premium, professional corporate recruitment agency website built for **MyRecruit Ltd** (Mauritius-based).

The application is structured cleanly with separate **frontend** and **backend** projects.

---

## 📁 Repository Structure

```
D:\OFFICEWORK\maam ka ada project\
├── frontend/                     # Next.js 16 (App Router), TypeScript, Tailwind CSS v4
│   ├── src/
│   │   ├── app/                  # All Pages & Dynamic Route Handlers
│   │   │   ├── page.tsx          # Homepage with all required sections
│   │   │   ├── about/            # About MyRecruit Ltd & Responsible Recruitment
│   │   │   ├── employers/        # Dedicated Employers landing page
│   │   │   ├── workers/          # Dedicated Overseas Workers landing page
│   │   │   ├── sectors/          # Sectors overview & /sectors/[slug] dynamic routes
│   │   │   ├── how-it-works/     # 5-Step dual workflows (Employers & Candidates)
│   │   │   ├── vacancies/        # Job opportunities & vacancy listings
│   │   │   ├── faq/              # Searchable/tabbed FAQ accordion
│   │   │   ├── contact/          # Contact details, WhatsApp CTA, message form
│   │   │   ├── request-workers/  # Employer recruitment request form
│   │   │   ├── apply/            # Worker profile registration form (Free)
│   │   │   └── sitemap.ts        # Dynamic XML sitemap generator
│   │   ├── components/           # Reusable UI & Section Components
│   │   ├── data/                 # Centralized content (sectors, FAQs, testimonials)
│   │   └── lib/                  # Centralized config (siteConfig) & utils
│   └── package.json
│
└── backend/                      # Node.js, Express, TypeScript REST API
    ├── src/
    │   └── index.ts              # API server with rate limiting, helmet, CORS
    ├── .env.example              # Environment variables template
    ├── tsconfig.json             # TypeScript compiler settings
    └── package.json
```

---

## 🚀 Running the Project

### 1. Frontend (Next.js)

```bash
cd "D:\OFFICEWORK\maam ka ada project\frontend"
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

To produce a production build:
```bash
npm run build
npm start
```

### 2. Backend (Express API)

```bash
cd "D:\OFFICEWORK\maam ka ada project\backend"
npm run dev
```
The server will run on **[http://localhost:5000](http://localhost:5000)**.

#### Available Endpoints:
* `GET /health` — Service health check
* `POST /api/contact` — General inquiry form submissions
* `POST /api/request-workers` — Employer candidate request submissions
* `POST /api/apply` — Worker profile & candidate registrations

---

## 🎨 Design Highlights
* **Brand Palette**: Deep Navy (`#0f2557`), Refined Gold (`#c9a84c`), Crisp White, and Neutral Slate backgrounds.
* **Dual Conversion Pathways**: Visible immediately throughout the site ("Request Workers" & "Find Jobs in Mauritius").
* **Responsible Recruitment**: Explicit messaging highlighting that **no placement fees are ever charged to workers**.
* **SEO Optimized**: Metadata, OpenGraph cards, robots.txt, and dynamic XML sitemap.
