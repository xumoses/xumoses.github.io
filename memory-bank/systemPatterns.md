# System Patterns

## High-level Architecture
- **Frontend Framework**: React 19 (using Vite as the build tool).
- **Styling**: Tailwind CSS (v4) for utility-first styling.
- **Routing**: React Router (v7) for handling client-side navigation.
- **Deployment**: Static site hosting on GitHub Pages.

## Design Patterns
- **Component-based Architecture**: UI is broken down into reusable React components (e.g., `Navigation.jsx`).
- **Page-based Routing**: Different features are organized into page components located in `src/pages/`.
- **CSS-in-JS/Utility-first**: Heavy reliance on Tailwind CSS for consistent styling without large CSS files.

## Technical Decisions
- **Vite**: Chosen for fast development start-up and optimized builds.
- **React Router 7**: Utilizing the latest features for routing and data loading.
- **Biome**: Used for linting and formatting to ensure code quality and consistency.
- **GitHub Pages**: Chosen for free and reliable hosting for a personal portfolio.
