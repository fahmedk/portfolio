# Furqan Khan - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. Features smooth animations, interactive tech rings, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Interactive Elements**: Animated tech rings, smooth scrolling, gradient effects
- **Contact Integration**: Working contact dropdown with email, resume, GitHub, and LinkedIn links
- **Performance Optimized**: Clean build, minimal bundle size, fast loading
- **Accessibility**: Keyboard navigation, ARIA labels, semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, CSS animations
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume**
   ```bash
   # Place your resume PDF in the public directory
   cp your-resume.pdf public/resume.pdf
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler check

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page component
├── components/
│   ├── BookLayout.tsx     # Main layout with navigation
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ContactPage.tsx
│   └── ui/               # Reusable UI components
│       ├── TechRing.tsx
│       ├── SingleTechRing.tsx
│       └── DualTechRings.tsx
├── assets/
│   └── logos/            # Tech logos and images
public/
├── resume.pdf            # Your resume (add this file)
└── ...                   # Other static assets
```

## 🎨 Key Features

### Navigation
- **Desktop**: Full navbar with Contact dropdown (Email, Resume, GitHub, LinkedIn)
- **Mobile**: Hamburger menu (Contact excluded, quick icons in header)
- **Smooth Scrolling**: Hash-based navigation with proper offset handling

### Contact Integration
- **Email**: `mailto:furqankhan.cs@gmail.com`
- **Resume**: Opens `/resume.pdf` in new tab
- **GitHub**: Links to `https://github.com/fahmedk`
- **LinkedIn**: Links to `https://www.linkedin.com/in/furqan-a-khan/`

### Responsive Design
- **Experience Section**: Maintains divider position, text wraps responsively
- **Mobile Layout**: Stacked layout with optimized spacing
- **Gradient Tags**: Consistent pill styling across Projects/About sections

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Create account at [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Import project

2. **Configure Settings**
   - Framework: Next.js (auto-detected)
   - Build Command: `next build` (auto-configured)
   - Node Version: 18+ (auto-detected)

3. **Deploy**
   - Push to main branch for production deployment
   - Pull requests create preview deployments

4. **Custom Domain** (Optional)
   - Add domain in Vercel dashboard
   - Configure DNS as instructed
   - Enable automatic HTTPS

### Alternative Platforms

- **Netlify**: Works with Next.js runtime
- **Cloudflare Pages**: Supports Next.js with edge functions

## 📝 Customization

### Update Resume
Replace `public/resume.pdf` with your resume file.

### Modify Contact Information
Update links in `src/components/BookLayout.tsx`:
- Email: Change `mailto:furqankhan.cs@gmail.com`
- GitHub: Update `https://github.com/fahmedk`
- LinkedIn: Update `https://www.linkedin.com/in/furqan-a-khan/`

### Add Projects
Edit `src/components/pages/ProjectsPage.tsx` to add your projects.

### Update About Section
Modify `src/components/pages/AboutPage.tsx` for personal information.

## 🔧 Development Notes

- **TypeScript**: Strict mode enabled for better type safety
- **ESLint**: Configured with Next.js and TypeScript rules
- **Tailwind**: v4 with modern CSS features
- **Performance**: Optimized images, minimal bundle size
- **Accessibility**: WCAG compliant, keyboard navigation

## 📊 Build Output

Current build size:
- Main page: ~9.69 kB
- First Load JS: ~112 kB
- Shared chunks: ~99.6 kB

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Type Errors
```bash
# Run type check
npm run typecheck
```

### Lint Issues
```bash
# Fix auto-fixable issues
npm run lint -- --fix
```

## 📄 License

This project is for personal portfolio use. Feel free to use as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio project. If you find bugs or have suggestions, feel free to open an issue.
