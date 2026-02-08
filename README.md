# AI Master Prompt

A premium, high-conversion landing page for selling the **AI Master Prompt – 300+ AI Prompts Mega Pack** digital product.

![Preview](./preview.png)

## 🚀 Tech Stack

- **React 18** + **Vite** (Fast development)
- **Tailwind CSS** (Utility-first styling)
- **Framer Motion** (Premium animations)

## ✨ Features

- Premium SaaS-style design (Apple/Linear/Notion level)
- Mobile-first, fully responsive
- Smooth scroll-based animations
- Interactive audience selector with 5 segments
- Glassmorphism pricing card
- Accordion FAQ section
- Expandable prompt previews
- Animated counters and CTAs

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Sticky navigation
│   ├── Hero.jsx           # Main headline section
│   ├── AudienceSelector.jsx # 5 audience tabs
│   ├── ProductValue.jsx   # 4 benefit cards
│   ├── PromptPreview.jsx  # Sample prompts
│   ├── Pricing.jsx        # Pricing card
│   ├── HowItWorks.jsx     # 3-step process
│   ├── FAQ.jsx            # Accordion FAQ
│   ├── Trust.jsx          # Legal section
│   └── Footer.jsx         # Footer
├── App.jsx                # Main app
├── main.jsx               # Entry point
└── index.css              # Tailwind + custom styles
```

## 🎨 Customization Guide

### Change Colors

Edit `src/index.css` (lines 18-42):

```css
:root {
  --primary-start: #7c3aed;  /* Change to your primary color */
  --primary-end: #2563eb;
  --accent-pink: #ec4899;
}
```

### Change Fonts

Edit `src/index.css` (line 15):

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap');
```

### Update Payment Link

Edit `src/components/Pricing.jsx` (line 25):

```javascript
const paymentLink = 'https://your-razorpay-link.com'
```

### Update WhatsApp Link

Edit `src/components/HowItWorks.jsx` (line 99):

```javascript
href="https://wa.me/YOUR_NUMBER?text=..."
```

### Update Email

- `src/components/FAQ.jsx` (line 115)
- `src/components/Footer.jsx` (line 41)

## 💻 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Netlify

1. Run `npm run build`
2. Drag `dist/` folder to [Netlify](https://netlify.com)

Or connect GitHub repo for automatic deploys.

### Hostinger / Shared Hosting

1. Run `npm run build`
2. Upload contents of `dist/` folder via FTP

## 📋 Checklist Before Launch

- [ ] Update Razorpay/payment link in `Pricing.jsx`
- [ ] Update WhatsApp number in `HowItWorks.jsx`
- [ ] Update email addresses
- [ ] Replace social media links in `Footer.jsx`
- [ ] Add OG image (`/public/og-image.jpg`)
- [ ] Update domain in `index.html` meta tags
- [ ] Test payment flow

## 📄 License

This project is for personal/commercial use. Do not redistribute the source code.

---

Made with ❤️ in India 🇮🇳
