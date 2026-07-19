# Sanjay Santhanam - Portfolio

Modern portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first layouts with tablet-safe navigation and overflow protection
- **Dark/Light Theme**: Theme switching with next-themes
- **Accessibility**: High-legibility typography, keyboard focus states, and reduced-motion support
- **Performance**: Optimized for fast loading and smooth interactions
- **Conversion**: Verified project links and a printable, accessible resume route

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 GitHub Pages Deployment

### Step 1: Repository Configuration ✅
This is a standard `username.github.io` User Page site, so no `basePath` is required in `next.config.js`. It renders directly to the root.

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/Sanjays2402/Sanjays2402.github.io.git

# Push to main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch** and choose **main**, folder **/(root)**
   - *(Note: currently we build locally and push the static output directly to the root of the repo)*

### Step 4: Access Your Site
Your portfolio will be available at:
`https://sanjays2402.github.io/`

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices including:
- Touch-friendly navigation
- Responsive layouts
- iPhone/Safari compatibility
- Motion that follows the user's reduced-motion preference

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` and `globals.css`
- **Content**: Update components in `/components/sections/`
- **Fonts**: Modify font imports in `globals.css`
- **Animations**: Adjust Framer Motion variants in component files

## 📝 Content Sections

- Positioning-focused hero with portfolio and resume calls to action
- About, impact metrics, and education summary
- Work experience
- Verified projects with source and live-demo links
- Skills grouped by engineering area
- Research publications linked to Google Scholar
- Contact information

## 🔧 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Font**: Inter & JetBrains Mono
- **Deployment**: GitHub Pages with GitHub Actions
