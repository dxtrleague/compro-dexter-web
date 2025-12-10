# UI Components

This directory contains reusable UI components that can be used throughout the application.

## Purpose

UI components are:

- Small, focused components with specific functionality
- Reusable across different parts of the application
- Styled consistently with the design system
- Built with accessibility in mind

## Common UI Components

### Form Components

- Input fields
- Buttons
- Select dropdowns
- Checkboxes and radio buttons
- Text areas

### Display Components

- Cards
- Badges
- Avatars
- Progress indicators
- Tables

### Feedback Components

- Modals
- Tooltips
- Alerts/Notifications
- Loading spinners

### Navigation Components

- Tabs
- Breadcrumbs
- Pagination
- Menus

## Usage Guidelines

1. Keep components small and focused on a single responsibility
2. Use TypeScript interfaces for props
3. Implement proper accessibility features
4. Follow the established design system
5. Include proper documentation for complex components

## Styling

UI components should:

- Use Tailwind CSS classes for styling
- Leverage the CSS variables defined in `app/globals.css`
- Support both light and dark themes
- Be responsive by default

## Testing

Each UI component should have:

- Unit tests for functionality
- Accessibility tests
- Visual regression tests (if applicable)
