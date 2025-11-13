# Kos Transfer - Premium Transportation Service

A modern, responsive website for a luxury transfer service in Kos, Greece. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🚗 Fleet showcase with luxury vehicles
- 📱 WhatsApp booking integration
- 🗺️ Comprehensive service coverage
- ✨ Smooth animations with Framer Motion
- 🎨 Premium design with gold accents
- 📱 Mobile-first responsive design

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Phosphor Icons** - Beautiful icon library

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Hero.tsx         # Hero section
│   ├── Fleet.tsx        # Fleet showcase
│   ├── Services.tsx     # Services & locations
│   ├── About.tsx        # About section
│   ├── Footer.tsx       # Footer
│   └── WhatsAppFloat.tsx # Floating WhatsApp button
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## Customization

### Update Contact Information

Edit the WhatsApp number and contact details in:
- `src/components/Hero.tsx`
- `src/components/Fleet.tsx`
- `src/components/Footer.tsx`
- `src/components/WhatsAppFloat.tsx`

### Modify Colors

Colors are defined in `src/index.css` using CSS variables:
- `--accent` - Gold accent color
- `--primary` - Dark charcoal
- `--background` - Light background

### Update Content

- **Fleet vehicles**: Edit `src/components/Fleet.tsx`
- **Services**: Edit `src/components/Services.tsx`
- **Locations**: Edit `src/components/Services.tsx`
- **About info**: Edit `src/components/About.tsx`

## License

MIT
