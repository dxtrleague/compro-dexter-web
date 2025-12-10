# Dynamic Portfolio Item Page

This directory contains the dynamic route for individual portfolio items.

## Purpose

The dynamic portfolio item page is intended to display:

- Detailed project information
- Project images and screenshots
- Technologies used
- Live demo and source code links
- Project challenges and solutions

## Dynamic Routing

This directory uses Next.js dynamic routing with the `[slug]` parameter:

- The slug is extracted from the URL
- Used to fetch the corresponding portfolio item data
- Allows for clean, SEO-friendly URLs

## File Structure

```
[slug]/
├── page.tsx          # Portfolio item page component
├── loading.tsx       # (Optional) Loading state
└── error.tsx         # (Optional) Error page for invalid slugs
```
