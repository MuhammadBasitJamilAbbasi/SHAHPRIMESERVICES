# SHAH PRIME SERVICES PTY LTD Website

A modern, professional business website for a security and delivery services company based in Victoria, Australia.

## Features

- **4 Pages**: Home, About, Services, Contact
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Contact Form**: Sends emails via Node.js backend
- **Professional Design**: Clean, corporate look with dark blue color scheme
- **Font Awesome Icons**: For visual appeal
- **Smooth Navigation**: Mobile-friendly hamburger menu

## Project Structure

```
shahzad/
├── index.html          # Home page
├── about.html          # About us page
├── services.html       # Services page
├── contact.html        # Contact page with form
├── styles.css          # All styles
├── script.js           # Frontend JavaScript
├── server.js           # Node.js backend for email
├── package.json        # Node dependencies
└── SPEC.md            # Project specification
```

## Running the Website

### Option 1: With Backend (Contact Form)
```bash
# Install dependencies
npm install

# Start the server
npm start

# Open browser: http://localhost:3000
```

**Note**: For the contact form to work with Gmail:
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account > Security > App passwords
3. Generate an app password
4. Replace `your-app-password` in server.js with the generated password

### Option 2: Static Files Only
If you just want to view the frontend without the backend:
- Open `index.html` directly in a browser
- Note: Contact form will show an error (no backend)

## Design

- **Colors**: Dark Navy Blue (#1a365d), Red accent (#e53e3e), Light grey background
- **Fonts**: Playfair Display (headings), Source Sans Pro (body)
- **Responsive breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

## Services Offered

**Security Services:**
- Static guarding
- Mobile patrols
- Event security

**Delivery Services:**
- Parcel delivery services
- Business deliveries
- Fast and reliable delivery across Victoria

## Contact Info

- Address: 17 Hawkesbury Road, Mickleham VIC 3064
- Email: shahprimeservices@gmail.com
- ABN: 41688175626