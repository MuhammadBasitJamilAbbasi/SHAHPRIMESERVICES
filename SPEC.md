# SHAH PRIME SERVICES PTY LTD - Website Specification

## 1. Project Overview

- **Project Name**: SHAH PRIME SERVICES PTY LTD Website
- **Type**: Multi-page business website with backend
- **Core Functionality**: Corporate website for security and delivery services company in Victoria, Australia
- **Target Users**: Business clients seeking security and delivery services

## 2. UI/UX Specification

### Layout Structure

**Pages:**
1. index.html - Home
2. about.html - About Us  
3. services.html - Services
4. contact.html - Contact Us

**Common Elements:**
- Fixed navigation header
- Full-width footer with company info

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary: #1a365d (Dark Navy Blue)
- Secondary: #2d3748 (Dark Grey)
- Accent: #e53e3e (Red accent for CTAs)
- Background: #f7fafc (Light grey)
- White: #ffffff
- Text: #1a202c (Almost black)

**Typography:**
- Headings: 'Playfair Display', serif (bold, professional)
- Body: 'Source Sans Pro', sans-serif
- Font sizes: H1: 48px, H2: 36px, H3: 24px, Body: 16px

**Spacing:**
- Section padding: 80px vertical
- Container max-width: 1200px
- Standard margin: 20px

**Visual Effects:**
- Box shadows on cards: 0 4px 6px rgba(0,0,0,0.1)
- Smooth hover transitions: 0.3s ease
- Hero gradient overlay

### Components

**Navigation:**
- Logo on left
- Nav links on right (Home, About, Services, Contact)
- Mobile hamburger menu

**Hero Section:**
- Full-width background image with dark overlay
- Centered text with tagline
- Two CTA buttons

**Service Cards:**
- Icon + title + description
- Hover effect with slight lift

**Contact Form:**
- Input fields with labels
- Submit button
- Success/error message display

**Footer:**
- Three columns: Address, Contact, ABN
- Dark background

## 3. Functionality Specification

### Core Features

1. **Responsive Navigation** - Works on all devices
2. **Smooth Scrolling** - Anchor links scroll smoothly
3. **Contact Form** - Validates and sends email via backend
4. **Service Display** - Grid layout with icons

### Contact Form Requirements

- Fields: Full Name, Email, Phone, Message
- Validation: All fields required, email format validation
- Backend: Node.js + Express + Nodemailer
- Email to: shahprimeservices@gmail.com
- Shows success/error message

### Data Handling

- Form submission via POST /api/contact
- Server-side validation
- Nodemailer SMTP configuration

## 4. Acceptance Criteria

- [ ] All 4 pages load without errors
- [ ] Navigation works between all pages
- [ ] Contact form validates inputs
- [ ] Contact form submits and shows success message
- [ ] Responsive on mobile/tablet/desktop
- [ ] Footer displays correct company info
- [ ] Services display correctly with icons