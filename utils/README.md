# Utils Directory

This directory contains utility functions and helper modules used throughout the application.

## Purpose

The `utils` directory is used for:

- Reusable utility functions
- Helper functions for common operations
- Data transformation utilities
- Validation functions
- Formatting utilities

## Common Utility Functions

### Data Manipulation

- Array operations
- Object manipulation
- Data filtering and sorting
- Data transformation

### Validation

- Form validation
- Input sanitization
- Data type checking
- Format validation

### Formatting

- Date formatting
- Number formatting
- String manipulation
- Currency formatting

### API Utilities

- Request helpers
- Response handling
- Error handling
- Data fetching

## Usage Guidelines

1. Keep functions pure and focused on a single responsibility
2. Add JSDoc comments for complex functions
3. Include TypeScript types for parameters and return values
4. Write unit tests for utility functions
5. Export functions individually for tree-shaking

## Example Utility Functions

```typescript
// utils/format.ts
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
```
