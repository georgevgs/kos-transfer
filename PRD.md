# Planning Guide

A premium transfer service website for a Kos Island company showcasing their luxury transportation fleet and enabling WhatsApp-based booking inquiries.

**Experience Qualities**:
1. **Luxurious** - Every element should evoke premium quality and exclusivity through refined design choices
2. **Trustworthy** - Professional presentation with clear service information builds confidence in the service
3. **Effortless** - Streamlined booking flow removes friction and makes contacting via WhatsApp feel natural

**Complexity Level**: Content Showcase (information-focused)
  - The site primarily presents the company, their fleet, and services with a single call-to-action: WhatsApp booking.

## Essential Features

### Fleet Showcase
- **Functionality**: Display the two vehicles (luxury car and Ford van) with images, capacity, and features
- **Purpose**: Help customers choose the right vehicle for their needs and party size
- **Trigger**: Automatically visible on page load in a dedicated section
- **Progression**: User views hero → scrolls to fleet section → reviews vehicle cards with specs → clicks WhatsApp to book
- **Success criteria**: Clear differentiation between vehicles, compelling visuals, obvious capacity indicators

### WhatsApp Booking Integration
- **Functionality**: Direct link to WhatsApp with pre-filled message containing booking inquiry
- **Purpose**: Eliminate booking friction by using familiar messaging platform
- **Trigger**: Click on prominent CTA buttons throughout the page
- **Progression**: User clicks "Book Now" → WhatsApp opens with pre-filled message → user adds details → sends message
- **Success criteria**: WhatsApp opens correctly on all devices with appropriate message template

### Service Areas Display
- **Functionality**: Highlight coverage areas including airport, ports, hotels, and popular destinations in Kos
- **Purpose**: Set clear expectations about service availability and build trust
- **Trigger**: Visible in dedicated services section
- **Progression**: User scrolls to services → views coverage map/list → gains confidence → proceeds to booking
- **Success criteria**: Clear, scannable list of supported locations

### Contact Information
- **Functionality**: Display phone number, WhatsApp, email, and business hours
- **Purpose**: Provide multiple contact methods and transparency
- **Trigger**: Visible in header and footer
- **Progression**: User needs contact info → finds it easily in header/footer → contacts company
- **Success criteria**: All contact methods are clickable and functional

## Edge Case Handling

- **No JavaScript/Failed Load**: Core content and WhatsApp links remain functional with semantic HTML
- **Mobile Safari WhatsApp**: Ensure WhatsApp deep links work correctly on iOS devices
- **Slow Image Loading**: Use skeleton loaders or solid color backgrounds during image load
- **Small Viewports**: Stack content vertically, ensure touch targets are 44px minimum
- **International Visitors**: Use clear icons and simple language to overcome potential language barriers

## Design Direction

The design should evoke the feeling of arriving at a five-star resort - elegant, refined, and subtly powerful. It should feel high-end but not ostentatious, combining modern minimalism with luxurious accents. A rich interface with premium imagery and tasteful gold accents will emphasize quality over quantity.

## Color Selection

Custom palette - A sophisticated monochromatic base with premium gold accents to convey luxury and trustworthiness.

- **Primary Color**: Deep Charcoal (oklch(0.18 0.01 264)) - Communicates sophistication, premium quality, and timeless elegance with subtle warmth
- **Secondary Colors**: 
  - Rich Charcoal (oklch(0.28 0.015 264)) - For secondary elements and hover states
  - Soft Pearl (oklch(0.95 0.002 264)) - For muted backgrounds and subtle UI elements
- **Accent Color**: Warm Gold (oklch(0.78 0.12 85)) - For CTAs, highlights, and premium touches that demand attention
- **Foreground/Background Pairings**:
  - Background (Bright Pearl oklch(0.98 0.002 264)): Deep Charcoal text (oklch(0.18 0.01 264)) - Ratio 15.8:1 ✓
  - Card (Pure White oklch(1 0 0)): Deep Charcoal text (oklch(0.18 0.01 264)) - Ratio 16.2:1 ✓
  - Primary (Deep Charcoal oklch(0.18 0.01 264)): Bright Pearl text (oklch(0.98 0.002 264)) - Ratio 15.8:1 ✓
  - Accent (Warm Gold oklch(0.78 0.12 85)): Deep Charcoal text (oklch(0.18 0.01 264)) - Ratio 5.4:1 ✓
  - Muted (Soft Pearl oklch(0.95 0.002 264)): Mid-tone Gray (oklch(0.48 0.01 264)) - Ratio 5.8:1 ✓

## Font Selection

Typefaces should convey luxury and modernity through clean geometric forms with excellent legibility, using a sophisticated sans-serif that feels both contemporary and timeless.

- **Primary Font**: Montserrat - Premium, geometric, elegant with excellent weight range
- **Typographic Hierarchy**:
  - H1 (Hero Title): Montserrat Bold/64px (mobile 48px)/tight tracking (-0.02em) with font-light for italic words - Command attention with graceful scale
  - H2 (Section Headers): Montserrat Bold/48px (mobile 40px)/tight tracking - Strong hierarchy
  - H3 (Card Titles): Montserrat Bold/28px/tight tracking - Clear subsections
  - Body (Descriptions): Montserrat Light/18px (mobile 16px)/relaxed line-height (1.6) - Elevated readability
  - Small (Captions): Montserrat Medium/14px (mobile 13px)/normal tracking - Supporting details
  - CTA Buttons: Montserrat SemiBold/16px/wide tracking (0.05em) - Clear affordance

## Animations

Animations should feel smooth and expensive, like the glide of a luxury vehicle - never abrupt, always intentional. Refined ease curves (cubic-bezier with [0.16, 1, 0.3, 1]), generous spacing, and purposeful motion create sophistication without feeling cheap or overly animated.

- **Purposeful Meaning**: Motion communicates premium quality through smooth, physics-based transitions with longer durations (0.8-1.0s). Gold accent glows provide subtle feedback without being garish. Shimmer effects on CTAs create desire without distraction.
- **Hierarchy of Movement**: 
  - Primary: Hero elements with staggered fade-in and elegant upward motion using custom ease curves, parallax scroll effects on hero background
  - Secondary: CTA buttons with subtle scale transforms (1.03x), shimmer overlays, and enhanced shadows on hover
  - Tertiary: Fleet cards with gentle lift effect (-8px on hover), progressive image zoom (1.08x), and smooth transitions
  - Quaternary: Smooth viewport-triggered animations with useInView for section content with slight vertical motion
  - Micro-interactions: Icon containers with scale + rotate on hover, location cards with horizontal slide, social icons with lift effect

## Component Selection

- **Components**: 
  - Card (shadcn) - Fleet vehicle displays with hover states, customized with refined borders and elevated shadows
  - Button (shadcn) - Primary WhatsApp CTAs with gold background and rounded-full styling, secondary outlined buttons with backdrop-blur
  - Separator (shadcn) - Subtle dividers between footer sections
  - Badge (shadcn) - Vehicle capacity and feature indicators in gold with enhanced padding
  
- **Customizations**: 
  - Hero section with full-viewport height, dual-gradient overlay (radial + linear) on background image
  - Large, refined typography with italic font-light accents for emphasis words
  - Fleet cards with 3:2 aspect-ratio vehicle images and smooth hover effects with enhanced shadows
  - Floating WhatsApp button with gentle pulse animation and enhanced shadow in bottom-right corner
  - Footer with generous spacing and refined typography hierarchy
  - Section spacing increased to 32px (py-32) for premium breathing room
  - Rounded elements using larger radius values (rounded-xl, rounded-2xl, rounded-3xl, rounded-full)
  
- **States**: 
  - Buttons: Gold background with subtle scale (1.02x) and enhanced shadow on hover, smooth all transitions
  - Cards: Enhanced shadow and minimal transform on hover for elegant lift effect
  - Links: Gold color transition on hover with smooth duration-300
  - Icon containers: Rounded-2xl backgrounds with scale transforms on hover
  
- **Icon Selection**: 
  - WhatsApp (filled) for booking CTAs - increased to size 22-34px
  - Phone (filled) for call buttons
  - MapPin (filled) for service areas and locations
  - Users (filled) for passenger capacity
  - Briefcase (filled) for luggage capacity  
  - Shield (filled) for safety/trust indicators
  - Clock (filled) for availability
  - Service-specific icons (AirplaneTilt, Anchor, Buildings, etc.) all filled weight
  
- **Spacing**: Generous padding using Tailwind's 20/24/28/32 scale for premium feel, section gaps of py-32, card padding of p-8 to p-14
  
- **Mobile-First Approach (Enhanced for Touch Devices)**: 
  - **Base Design**: All layouts start mobile-first, with progressive enhancement for larger screens
  - **Touch-First Interactions**: All interactive elements have minimum 44px touch targets, with enhanced mobile button heights (h-[60px] hero CTAs, h-[56px] fleet CTAs)
  - **Responsive Typography**: 
    - Hero heading optimized for mobile: text-[2.75rem] with leading-[1.05] on mobile, scaling to text-8xl on desktop
    - Section headings: text-[2.25rem] with leading-[1.1] on mobile for better readability
    - Body text: text-base with increased line-height (leading-[1.6-1.7]) for comfortable reading on small screens
    - Badges and labels: text-sm with consistent sizing across viewports for better legibility
  - **Fluid Spacing**: Enhanced mobile padding (px-5 py-20/24) increasing to desktop values (px-6 py-32), with generous gaps (gap-5 on mobile, gap-6+ on larger screens)
  - **Stack-First Layouts**: All grid layouts start as single columns, expanding to multi-column only when space allows (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
  - **Optimized Image Heights**: Fleet images use comfortable heights (h-64 sm:h-72 md:h-80) ensuring vehicles are clearly visible on mobile
  - **Adaptive Icon Sizing**: 
    - Service and feature icons scaled up to 32px (size={32}) on mobile for better visibility
    - CTA icons increased to 22px for thumb-friendly recognition
    - Footer and contact icons at 22px for easy tappability
  - **Viewport-Optimized Animations**: Animation triggers use reduced margins for mobile (-50px) to activate sooner in smaller viewports
  - **WhatsApp Float Button**: Enhanced mobile sizing (w-[72px] h-[72px]) with border-4 for better visibility and tap accuracy
  - **Full-Width CTAs on Mobile**: Primary action buttons expand to full width (w-full sm:w-auto) with consistent h-[60px] for easy thumb access
  - **Scroll Indicator**: Hidden on mobile (hidden sm:block) where space is premium
  - **Badge Text Scaling**: Vehicle badges use consistent text-sm for legibility without overwhelming on small screens
  - **Footer Columns**: Adapt from single column on mobile to 4-column grid on desktop with increased spacing (gap-12) for better touch accuracy
  - **Card Padding**: Increased mobile padding (p-7) for better breathing room and easier content scanning on small screens
  - **Location Cards**: Enhanced mobile sizing (p-5, gap-3) with larger icons (size={20}) for better scannability
