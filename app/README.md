# App Directory

This directory contains all the pages and layouts for the Next.js application using the App Router.

## Structure

```
app/
├── about-us/          # About Us page
├── contact-us/        # Contact Us page
├── favicon.ico        # Site favicon
├── globals.css        # Global styles and CSS variables
├── layout.tsx         # Root layout component
├── page.tsx           # Home page component
├── portfolio/         # Portfolio pages
│   └── [slug]/        # Dynamic portfolio item pages
└── services/          # Services page
```

## Route Directories

### `/about-us`

Placeholder for the About Us page. Currently empty but intended to contain:

- Company information
- Team details
- Mission and vision
- Company history

### `/contact-us`

Placeholder for the Contact Us page. Currently empty but intended to contain:

- Contact form
- Contact information
- Map integration
- Social media links

### `/portfolio`

Portfolio section with dynamic routing:

- Main portfolio page (to be created as `page.tsx`)
- Dynamic portfolio item pages in `[slug]/` directory

#### `/portfolio/[slug]`

Dynamic route for individual portfolio items. Currently empty but intended to:

- Display detailed portfolio information
- Show project images and descriptions
- Include links to live projects and repositories

### `/services`

Placeholder for the Services page. Currently empty but intended to contain:

- List of services offered
- Service descriptions
- Pricing information
- Service request forms
