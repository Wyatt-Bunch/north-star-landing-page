# North* Landing Page

Modern, sleek landing page for North* - a GitHub app that automatically generates end-user documentation by visually analyzing your running application.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles and Tailwind imports
├── components/
│   ├── Hero.tsx         # Hero section with CTA
│   ├── HowItWorks.tsx   # 3-step process explanation
│   ├── Features.tsx     # Feature grid with stats
│   ├── CTA.tsx          # Final call-to-action section
│   └── Footer.tsx       # Footer with links
└── public/              # Static assets

```

## Design System

- **Primary Color**: Dark Navy (#0A1E3D, #1E3A5F)
- **Background**: White (#FFFFFF)
- **Font**: Inter
- **Style**: Minimal, modern, YC-inspired

## Build for Production

```bash
npm run build
npm start
```

## License

© 2025 North*. All rights reserved.
