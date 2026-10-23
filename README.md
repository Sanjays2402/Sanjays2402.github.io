# Sanjay Santhanam - Portfolio

Modern portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first layouts with tablet-safe navigation and overflow protection
- **Dark/Light Theme**: Theme switching with next-themes
- **Accessibility**: High-legibility typography, keyboard focus states, and reduced-motion support
- **Performance**: Optimized for fast loading and smooth interactions
- **Conversion**: Outcome-led project case studies and a printable, accessible resume route

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
1. Go to **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Pushes to `main` build the static export and deploy the `out/` artifact through `.github/workflows/deploy.yml`.

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
- Production case studies and recent open-source builds with measurable outcomes
- Skills grouped by engineering area
- Research publications linked to Google Scholar
- Contact information

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Font**: Inter & JetBrains Mono
- **Deployment**: GitHub Pages with GitHub Actions

## Terms & Disclaimer

By using this project you agree to the following.

- **No warranty.** This software is provided "as is", without warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
- **No liability.** To the maximum extent permitted by law, the author and contributors are not liable for any claim, loss, or damage (direct, indirect, incidental, or consequential, including lost data or profits) arising from its use.
- **Your responsibility.** You use it at your own risk and are responsible for complying with the laws that apply to you.
- **Third parties.** Names, logos, APIs, and services of others belong to their owners and are used for identification only; no affiliation or endorsement is implied.
- **Your statutory rights.** Nothing here limits rights that cannot be waived by agreement, including under consumer-protection laws in the USA, Canada (including Quebec), and India (Consumer Protection Act, 2019).
- **License.** Use, copying, and distribution are governed by the [LICENSE](LICENSE) file; if anything here conflicts with it, the license controls.
