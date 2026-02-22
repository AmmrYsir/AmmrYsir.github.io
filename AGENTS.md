# AGENTS.md

This file contains guidelines for AI agents operating in this repository.

## Project Overview

- **Project**: Ammr Yasir - Personal Portfolio
- **Type**: Static HTML/CSS/JS Website
- **Stack**: Plain HTML, CSS, JavaScript (no frameworks)
- **Target**: Desktop and mobile browsers

---

## Build / Lint / Test Commands

### Development

```bash
# No build step required - static files served directly
# Use any local server:
npx serve .
python -m http.server 8000
php -S localhost:8000
```

### HTML Validation

```bash
# Validate HTML (requires w3c-validator or html-validate)
npx html-validate index.html

# Or use W3C online validator via CLI
npx w3c-validator-cli index.html
```

### CSS Linting

```bash
# Install stylelint
npm install --save-dev stylelint stylelint-config-standard

# Run stylelint
npx stylelint "css/*.css"
```

### JavaScript Linting

```bash
# Install ESLint
npm install --save-dev eslint

# Run ESLint
npx eslint js/*.js
```

### Format Code

```bash
# Install prettier
npm install --save-dev prettier

# Format HTML
npx prettier --write index.html

# Format CSS
npx prettier --write css/*.css

# Format JS
npx prettier --write js/*.js
```

### Single Test (if using Vitest/Jest)

```bash
# If tests are added later with Vitest
npx vitest run --reporter=verbose

# Run a specific test file
npx vitest run tests/example.test.js

# Run tests in watch mode
npx vitest
```

---

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Include `lang="en"` attribute on `<html>`
- Include meta viewport for mobile responsiveness
- Include CSP meta tag for security
- Use lowercase for tags and attributes
- Quote all attribute values
- Order: `id`, `class`, `src`/`href`, `alt`/`title`, `aria-*`
- Include `alt` text for all images
- Use `rel="noopener noreferrer"` on external links

### CSS

- Use CSS custom properties in `variables.css` for colors, fonts, spacing
- Follow BEM naming convention: `.block__element--modifier`
- Use mobile-first approach with `@media (min-width: ...)`
- Use `clamp()` for fluid typography
- Use `rem` for sizing, not `px`
- Include `prefers-reduced-motion` media query
- Group properties: positioning → box model → visual → typography → misc
- Use logical properties (`margin-inline` instead of `margin-left/right`)

### JavaScript

- Use ES6+ syntax (const/let, arrow functions, template literals, async/await)
- Use `const` by default, `let` only when reassignment needed, never `var`
- Use strict mode
- Handle errors with try/catch for async operations
- Use event delegation for multiple similar elements
- Cache DOM queries
- Use semantic variable names (camelCase)
- Keep functions small and focused (single responsibility)
- Add JSDoc comments for functions

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `main.js`, `variables.css` |
| Classes | BEM | `.card__title--highlighted` |
| IDs | camelCase | `heroSection`, `mainNav` |
| Variables | camelCase | `isVisible`, `userData` |
| Constants | UPPER_SNAKE | `MAX_ITEMS`, `API_URL` |
| Functions | camelCase + verb | `getUserData()`, `toggleMenu()` |

### Import Ordering

CSS imports order:
1. CSS custom properties (`@import './variables.css';`)
2. Reset/normalize
3. Base styles
4. Components
5. Utilities

---

## Security Guidelines

### Content Security Policy

Always include CSP meta tag:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://github.com; frame-ancestors 'none';">
```

### Input Handling

- Never use `innerHTML` with user input - use `textContent`
- Sanitize all form inputs
- Validate data on client AND server side
- Use `DOMPurify` if HTML sanitization needed

### Dependencies

- Audit dependencies regularly: `npm audit`
- Use `npm audit fix` to patch vulnerabilities
- Prefer vanilla JS over npm packages when possible

### HTTPS

- Always use HTTPS for production
- Include HSTS header
- Use secure cookies (`Secure`, `HttpOnly`, `SameSite`)

---

## Accessibility Guidelines

- Use semantic HTML (landmarks, headings in order)
- Include `alt` text for all images
- Ensure color contrast ratio minimum 4.5:1
- Make all interactive elements keyboard accessible
- Include `aria-label` for icon-only buttons
- Use `prefers-reduced-motion` for animations
- Test with screen readers (NVDA, VoiceOver)

---

## Performance Guidelines

- Minimize CSS/JS in production
- Use `defer` for scripts
- Use `preload` for critical fonts
- Optimize images (WebP, lazy loading)
- Include `width` and `height` on images
- Use CSS `content-visibility` for long pages
- Avoid layout shifts (CLS)

---

## File Organization

```
├── index.html          # Main HTML file
├── css/
│   ├── variables.css  # CSS custom properties
│   └── style.css      # Main styles
├── js/
│   └── main.js        # JavaScript
├── assets/
│   └── (images)
├── security.txt       # Security policy
└── AGENTS.md          # This file
```

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Tools & Extensions

Recommended VS Code extensions:
- ESLint
- Prettier
- stylelint
- HTML CSS Support
- Live Server

---

For questions, contact: ammar Yasir03062000@gmail.com
