# Career Bridge Foundation

A premium website for Career Bridge Foundation — a UK-registered Community Interest Company (CIC) focused on workforce activation and capability development.

## About

Career Bridge Foundation operates structured, evidence-based pathways that support individuals to demonstrate real-world capability and progress through readiness-aligned opportunities. This website serves as the organisation's digital presence, designed with institutional quality and premium aesthetics.

## Design System

### Colour Palette
- **Primary:** Deep ink navy (`#0f172a`)
- **Secondary:** Slate (`#475569`)
- **Tertiary:** Cool grey (`#94a3b8`)
- **Background:** Warm white (`#fafaf9`)
- **Accent:** Refined teal (`#0d9488`)

### Typography
- **Headlines:** Source Serif 4 (serif, editorial)
- **Body:** Inter (clean, professional)
- **Monospace:** JetBrains Mono (numbers, labels)

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Routing:** React Router DOM

## Pages

- **Home** — Hero, What We Do, Career Readiness Blueprint, About
- **How It Works** — Operating workflow and governance model
- **Partners** — Partner types and collaboration principles
- **Governance** — Legal status, structure, safeguarding, data protection
- **Contact** — Contact information and enquiry form
- **Apply** — Application process and eligibility information

## Getting Started

### Prerequisites
- Node.js 18+ or Bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bridge-connect

# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev
```

### Build for Production

```bash
bun run build
# or
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Fixed navigation with scroll effects
│   ├── Footer.tsx       # Site footer with links
│   ├── Layout.tsx       # Page layout wrapper
│   ├── AnimatedSection.tsx  # Scroll animations
│   └── PageTransition.tsx   # Page transition effects
├── pages/
│   ├── Index.tsx        # Home page
│   ├── HowItWorks.tsx   # How It Works page
│   ├── Partners.tsx     # Partners page
│   ├── Governance.tsx   # Governance page
│   ├── Contact.tsx      # Contact page
│   ├── Apply.tsx        # Apply page
│   └── ...              # Policy pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── App.tsx              # Main app with routing
```

## Design Principles

- **Institutional quality** — Designed to convey trust and professionalism
- **Premium aesthetics** — Generous whitespace, refined typography
- **Accessibility** — Focus states, semantic HTML, readable contrast
- **Performance** — Optimised animations, efficient bundling

## License

© 2025 Career Bridge Foundation CIC. All rights reserved.

