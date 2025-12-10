# Types Directory

This directory contains TypeScript type definitions and interfaces used throughout the application.

## Purpose

The `types` directory is used for:

- TypeScript interfaces and type definitions
- Shared types across components
- Data model definitions
- Utility types

## Common Type Files

### Data Types

- API response structures
- Database model types
- Form data types
- Configuration types

### Component Types

- Props interfaces for components
- Event handler types
- State management types

### Utility Types

- Helper type functions
- Generic type definitions
- Type guards

## Usage Guidelines

1. Export types from individual files
2. Re-export commonly used types from `index.ts`
3. Use descriptive names for types
4. Document complex types with JSDoc comments
5. Keep types focused and reusable

## Example Type Definitions

```typescript
// types/portfolio.ts
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string;
}
```
