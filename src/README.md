# Professional Folder Structure

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups
│   │   ├── about/               # About page
│   │   ├── our-projects/        # Projects page
│   │   └── product-category/    # Product category pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
│
├── components/                   # React Components
│   ├── ui/                      # Reusable UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Input/
│   │
│   ├── layout/                  # Layout components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Navigation/
│   │   └── HeroMainSection/
│   │
│   ├── features/                # Feature-specific components
│   │   ├── ImageGrid/
│   │   ├── ProjectGallery/
│   │   ├── AboutSection/
│   │   └── AwardsSection/
│   │
│   ├── animations/              # Animation components
│   │   ├── AnimatedLetters/
│   │   ├── AnimatedLines/
│   │   ├── AnimatedWords/
│   │   └── SlidingText/
│   │
│   └── modals/                  # Modal components
│       ├── SearchModal/
│       ├── SharesModal/
│       └── SharesMenuContent/
│
├── lib/                         # Utility libraries
│   ├── utils/                   # Utility functions
│   │   ├── animations.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollAnimation.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useParallax.ts
│   │
│   └── constants/               # Application constants
│       ├── routes.ts
│       ├── images.ts
│       └── categories.ts
│
├── types/                       # TypeScript type definitions
│   ├── components.ts
│   ├── api.ts
│   └── global.ts
│
└── styles/                      # Global styles and themes
    ├── theme.ts
    ├── animations.css
    └── variables.css
```

## 🎯 Organization Principles

### **Components Structure:**
- **UI Components**: Reusable, generic components (buttons, inputs, cards)
- **Layout Components**: Page structure components (header, footer, navigation)
- **Feature Components**: Business logic components (image grids, galleries)
- **Animation Components**: Motion and transition components
- **Modal Components**: Overlay and dialog components

### **File Naming Conventions:**
- **PascalCase**: Component files (e.g., `HeroMainSection.tsx`)
- **camelCase**: Utility files (e.g., `useScrollAnimation.ts`)
- **kebab-case**: CSS files (e.g., `global-styles.css`)

### **Import Structure:**
```typescript
// Absolute imports from src
import { Button } from '@/components/ui/Button'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { ROUTES } from '@/lib/constants/routes'
```

## 🚀 Benefits

1. **Scalability**: Easy to add new features without cluttering
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Components are organized by purpose
4. **Team Collaboration**: Consistent structure for team members
5. **Performance**: Better code splitting and lazy loading
6. **Type Safety**: Centralized type definitions

## 📋 Migration Checklist

- [ ] Move all components to appropriate folders
- [ ] Update all import statements
- [ ] Create index files for easy imports
- [ ] Add TypeScript interfaces
- [ ] Create utility functions
- [ ] Set up custom hooks
- [ ] Add constants files
- [ ] Update documentation 