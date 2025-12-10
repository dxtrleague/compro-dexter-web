# Data Directory

This directory contains static data files, mock data, and data-related configurations for the application.

## Purpose

The `datas` directory is used for:

- Static JSON data files
- Mock data for development and testing
- Configuration data
- Content that doesn't require a database
- Sample data for components

## Common Data Files

### Content Data

- Blog posts or articles
- Product information
- Portfolio items
- Service descriptions
- Team member information

### Configuration Data

- Site configuration
- Navigation menu structure
- Form field definitions
- API endpoint configurations

### Mock Data

- User profiles
- Sample transactions
- Test data for components
- Development data

## Usage Guidelines

1. Use JSON format for structured data
2. Keep data files organized by purpose
3. Validate data structure with TypeScript types
4. Update documentation when adding new data files
5. Consider data size and loading performance

## Example Data Structure

```json
{
  "portfolio": [
    {
      "id": "1",
      "title": "Project Title",
      "description": "Project description",
      "image": "/images/project1.jpg",
      "technologies": ["React", "TypeScript", "Tailwind CSS"],
      "liveUrl": "https://example.com",
      "githubUrl": "https://github.com/example",
      "featured": true,
      "completedAt": "2023-12-01"
    }
  ],
  "services": [
    {
      "id": "1",
      "name": "Web Development",
      "description": "Custom web application development",
      "icon": "web",
      "features": ["Responsive Design", "Performance Optimization", "SEO"]
    }
  ]
}
```

## Data Access

Data files can be imported and used in components:

```typescript
import portfolioData from "@/datas/portfolio.json";

export function PortfolioGrid() {
  return (
    <div>
      {portfolioData.map((item) => (
        <PortfolioCard key={item.id} {...item} />
      ))}
    </div>
  );
}
```
