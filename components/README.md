# Components Directory

This directory contains all reusable React components for the application.

## Structure

```
components/
├── layouts/    # Layout components
└── ui/         # UI components
```

## Subdirectories

### `/layouts`

Currently empty. This directory is intended for layout components such as:

- Header/Footer components
- Navigation components
- Page-specific layouts
- Section wrappers

### `/ui`

Currently empty. This directory is intended for reusable UI components such as:

- Buttons
- Forms
- Cards
- Modals
- Input fields
- Data display components

## Usage Guidelines

1. Place layout-related components in the `layouts/` directory
2. Place reusable UI elements in the `ui/` directory
3. Follow the existing naming conventions (PascalCase)
4. Include TypeScript props interfaces for type safety
5. Add JSDoc comments for complex components

## Component Structure Example

```typescript
// Example UI component structure
interface ComponentProps {
  // Define props here
}

export function ComponentName({ prop }: ComponentProps) {
  return (
    // Component JSX
  );
}
```

## Styling

Components should use Tailwind CSS classes for styling. For complex styling needs, consider using CSS modules or styled-components, but maintain consistency with the existing theme system defined in `app/globals.css`.
