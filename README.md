# Abdullah Habberrih - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Backend Developer with expertise in Node.js, NestJS, and PostgreSQL. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic inspired by essam.ly with warm beige color scheme
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Dark/Light Mode**: Theme toggle for user preference
- **Interactive Sections**:
  - Hero section with typing animation cycling through roles
  - About section with stats, skills progress bars, and tech stack
  - Experience timeline with alternating card layout
  - Services showcase with hover effects
  - Education section with publications subsection
  - Projects gallery with filterable categories and detailed modal views
  - News/Updates section with category filters
  - Contact form with validation
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main page with all sections
│   │   └── globals.css         # Global styles and design tokens
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── navigation.tsx      # Navigation bar with smooth scroll
│   │   ├── hero-section.tsx    # Hero with typing animation
│   │   ├── about-section.tsx   # About with stats and skills
│   │   ├── experience-section.tsx  # Work experience timeline
│   │   ├── services-section.tsx    # Services showcase
│   │   ├── education-section.tsx   # Education and publications
│   │   ├── projects-section.tsx    # Projects gallery with filters
│   │   ├── news-section.tsx    # News/updates section
│   │   ├── contact-section.tsx # Contact form
│   │   ├── footer.tsx          # Footer with links
│   │   └── theme-provider.tsx  # Theme context provider
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions
├── public/                     # Static assets (images)
├── tsconfig.json               # TypeScript configuration
├── components.json             # shadcn/ui configuration
└── package.json
```

## 🎨 Customization

### Colors

Update the design tokens in `src/app/globals.css`:

```css
@theme inline {
  --color-primary: #3b82f6;
  --color-accent: #f59e0b;
  /* ... other colors */
}
```

### Content

Update the content in each section component:

- Personal info: `src/components/hero-section.tsx`, `src/components/about-section.tsx`
- Work experience: `src/components/experience-section.tsx`
- Projects: `src/components/projects-section.tsx`
- Education: `src/components/education-section.tsx`
- Contact info: `src/components/contact-section.tsx`

### Images

Replace placeholder images in the `public/` directory with your own images.

## 📧 Contact

- **Email**: a.habberreh@gmail.com
- **Phone**: +218 643 65 26
- **Location**: Rome, Italy
- **LinkedIn**: [Abdullah Habberrih](https://linkedin.com/in/abdullah-habberrih)
- **GitHub**: [Abdullah Habberrih](https://github.com/abdullah-habberrih)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Abdullah Habberrih
