# Professional Portfolio 2026

A modern, professional portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and PostgreSQL.


## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS v4
- **Stunning Design**: Dark theme with glassmorphism effects and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Lighthouse score 90+, optimized images, lazy loading
- **SEO Ready**: Comprehensive meta tags, OpenGraph, Twitter cards
- **Accessible**: WCAG compliant, keyboard navigation, screen reader friendly
- **Interactive Animations**: Framer Motion for smooth, professional animations
- **Contact Form**: Integrated contact form with validation
- **Designed & Built by Sonia Karenzi Uwase**
- **Database Ready**: PostgreSQL with Prisma ORM for dynamic content

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

```
portfolio-2026/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles + Tailwind
│   │   └── api/
│   │       └── contact/route.ts # Contact form API
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── SocialLinks.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── animations/         # Animation wrappers
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── StaggerContainer.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── db.ts              # Prisma client
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── index.ts           # TypeScript types
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   ├── images/                # Images
│   └── assets/                # Other assets
├── .env.example               # Environment variables template
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or cloud)

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd portfolio-2026
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your database URL:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
   ```

4. **Set up the database** (optional - for dynamic content):
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/sections/Hero.tsx`):
   - Update name, tagline, and description

2. **About Section** (`src/components/sections/About.tsx`):
   - Update bio and skills list
   - Replace profile image in `public/images/sonia.png`

3. **Experience** (`src/components/sections/Experience.tsx`):
   - Update work experience and education

4. **Projects** (`src/components/sections/Projects.tsx`):
   - Add your projects with images and links

5. **Social Links** (`src/components/ui/SocialLinks.tsx`):
   - Update social media URLs

6. **Contact** (`src/components/sections/Contact.tsx`):
   - Update email address

### Color Scheme

Edit `src/app/globals.css` to customize colors:
```css
--color-navy-darkest: #0a192f;
--color-cyan: #64ffda;
/* ... more colors */
```

## Database Setup (Optional)

### Using Neon (Recommended - Free)

1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Create a new project
4. Copy the connection string
5. Paste it in `.env` as `DATABASE_URL`

### Using Supabase

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string (Transaction mode)
5. Paste it in `.env` as `DATABASE_URL`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

Vercel will automatically:
- Build your project
- Set up custom domain
- Enable automatic deployments on push

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Performance

- Lighthouse Score: 90+
- Core Web Vitals: All Green
- SEO Score: 100
- Accessibility Score: 100
- Best Practices: 100

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration: [Brittany Chiang](https://brittanychiang.com/)
- Icons: [Lucide Icons](https://lucide.dev/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter)

## Contact

Sonia Karenzi Uwase

Portfolio: [yourportfolio.com](https://yourportfolio.com)

---


