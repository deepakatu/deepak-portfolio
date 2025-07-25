
# Deepak Manoharan - Portfolio Website

A modern, responsive portfolio website for Deepak Manoharan, Senior Data Scientist & ML Engineer with 9+ years of experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and hover effects
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags, structured data, and sitemap for better search visibility
- **GitHub Pages Ready**: Static site optimized for GitHub Pages deployment
- **Performance Optimized**: Fast loading with optimized images and minimal JavaScript
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Animations
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
app/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with SEO meta tags
│   └── page.tsx            # Main homepage
├── components/
│   ├── navigation.tsx       # Sticky navigation with smooth scrolling
│   ├── hero-section.tsx     # Hero section with CTA buttons
│   ├── about-section.tsx    # About me and education
│   ├── skills-section.tsx   # Technical skills with animated progress bars
│   ├── projects-section.tsx # Featured projects showcase
│   ├── experience-section.tsx # Professional experience timeline
│   ├── contact-section.tsx  # Contact form and information
│   └── footer.tsx          # Footer with social links
├── lib/
│   └── data.ts             # All portfolio data and content
├── public/
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # XML sitemap
└── README.md
```

## 🎨 Sections

1. **Hero Section**: Professional introduction with key expertise and CTA buttons
2. **About**: Detailed background, education, and career highlights
3. **Skills**: Technical skills organized by categories with visual progress indicators
4. **Projects**: 6 featured projects across multiple industries (Healthcare, Finance, Retail, Energy, Transportation, Manufacturing)
5. **Experience**: Professional timeline with achievements and technologies
6. **Contact**: Contact form and professional links
7. **Footer**: Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deepak-manoharan/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
cd app
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
yarn build
yarn start
```

## 🌐 GitHub Pages Deployment

This portfolio is optimized for GitHub Pages deployment:

1. **Static Export**: The site is configured for static export
2. **Asset Optimization**: All images and assets are optimized
3. **SEO Ready**: Includes sitemap, robots.txt, and meta tags
4. **No Server Dependencies**: Pure static site with no backend requirements

### Deployment Steps

1. Build the static site:
```bash
yarn build
```

2. The `out` folder contains the static files ready for deployment

3. Deploy to GitHub Pages:
   - Push code to your GitHub repository
   - Go to Settings > Pages
   - Select source as "Deploy from a branch"
   - Choose the branch containing your built files
   - Your site will be available at `https://yourusername.github.io/repository-name`

## 🎯 Key Features

### Professional Branding
- Clean, modern design with blue accent color
- Professional typography using Inter font
- Consistent visual hierarchy and spacing
- High-quality placeholder images that get replaced with actual images

### Interactive Elements
- Smooth scrolling navigation
- Animated skill progress bars
- Hover effects on cards and buttons
- Responsive mobile menu
- Project filtering by category
- Contact form with validation

### SEO & Performance
- Server-side rendering with Next.js
- Optimized images with Next.js Image component
- Proper meta tags and Open Graph data
- JSON-LD structured data for rich snippets
- Sitemap and robots.txt for better crawling
- Fast loading with minimal JavaScript

### Accessibility
- WCAG 2.1 AA compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader friendly
- Focus indicators for interactive elements

## 📊 Projects Featured

1. **Healthcare Medical Image Analysis** - CNN-based medical imaging with 94% accuracy
2. **Financial Fraud Detection API** - Real-time fraud detection with 99.2% accuracy
3. **Retail Recommendation Engine** - Personalized recommendations increasing CTR by 40%
4. **Energy Demand Forecasting** - LSTM-based forecasting with 95% accuracy
5. **Transportation Route Optimization** - Graph algorithms reducing travel time by 30%
6. **Manufacturing Predictive Maintenance** - IoT-based system reducing downtime by 50%

## 🔧 Customization

### Updating Content

All content is stored in `lib/data.ts`. You can easily update:

- Personal information and contact details
- Skills and proficiency levels
- Work experience and achievements
- Project details and links
- Education background

### Styling

The site uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.ts`
- Typography and spacing
- Component styles in individual component files
- Global styles in `app/globals.css`

### Adding New Sections

To add new sections:

1. Create a new component in `components/`
2. Add it to the main page in `app/page.tsx`
3. Update navigation links in `lib/data.ts`
4. Add corresponding styles if needed

## 📈 Analytics & Tracking

The site is ready for analytics integration:

- Google Analytics 4
- Microsoft Clarity
- Facebook Pixel
- LinkedIn Insight Tag

Add your tracking codes in `app/layout.tsx`.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Deepak Manoharan**
- Email: deepak.manoharan@email.com
- LinkedIn: [linkedin.com/in/deepak-manoharan](https://linkedin.com/in/deepak-manoharan)
- GitHub: [github.com/deepak-manoharan](https://github.com/deepak-manoharan)
- Location: New Zealand (Open to NZ, AU, Remote India)

---

Built with ❤️ using Next.js and Tailwind CSS
