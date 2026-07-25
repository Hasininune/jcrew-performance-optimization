# J.Crew Web Performance Optimization

A frontend performance optimization project focused on analyzing the J.Crew India website, identifying performance bottlenecks using Google PageSpeed Insights / Lighthouse, and building a lightweight React-based recreation that applies modern web performance best practices.

## Project Overview

This project was created as part of a Web Development performance optimization task.

The selected website for analysis was the J.Crew India storefront.

The original website was evaluated using Google PageSpeed Insights in mobile mode. During testing, Lighthouse was unable to reliably complete the page load and reported:

```text
net::ERR_TIMED_OUT
```

As a result, metrics such as FCP, LCP, TBT, CLS, and Speed Index were returned as errors instead of valid numerical measurements.

Rather than treating these errors as performance scores, the project uses them as diagnostic evidence and focuses on building a simpler, faster, and more performance-conscious recreation of the storefront experience.

---

## Objectives

The main objectives of this project are to:

- Analyze the performance behavior of the selected website
- Identify potential performance bottlenecks
- Prioritize fixes based on their expected impact
- Recreate the important storefront experience using React
- Reduce unnecessary initial page workload
- Optimize image loading and rendering
- Improve mobile responsiveness
- Improve layout stability
- Follow semantic HTML and accessibility practices
- Build a production-ready optimized frontend
- Compare the optimized implementation using Lighthouse/PageSpeed Insights

---

## Original Website Analysis

The J.Crew India homepage contains a visually rich e-commerce experience with:

- Large promotional imagery
- Extensive navigation
- Search functionality
- Account and cart controls
- Multiple product/category sections
- Promotional content
- Third-party resources and storefront functionality

During the mobile PageSpeed Insights test, Lighthouse reported a page-load timeout.

### Observed Lighthouse Result

```text
First Contentful Paint       Error
Largest Contentful Paint     Error
Total Blocking Time          Error
Cumulative Layout Shift      Error
Speed Index                  Error

Details: net::ERR_TIMED_OUT
```

Because the test did not complete successfully, these results are not interpreted as zero scores.

They indicate that Lighthouse could not obtain reliable measurements during that test session.

---

## Performance Diagnosis

Based on the Lighthouse evidence and analysis of the page structure, the optimization work was prioritized around the following areas.

### P0 — Critical

**Reliable page loading**

The initial page should remain lightweight enough to load successfully under constrained mobile and network conditions.

**Hero / LCP optimization**

The main hero image is a likely Largest Contentful Paint candidate and should be delivered efficiently.

### P1 — High Priority

- Lazy loading below-the-fold images
- Explicit image dimensions
- Reduced unnecessary JavaScript
- Simplified critical rendering path
- Reduced initial network workload
- Layout stability improvements

### P2 — Medium Priority

- Responsive mobile navigation
- Third-party resource optimization
- Semantic HTML
- Accessibility improvements
- Agent-oriented accessibility improvements

### P3 — Production Optimization

- Static asset caching
- Compression
- CDN delivery
- Production deployment optimization

---

## Optimized Implementation

The optimized version was developed using React and Vite.

Instead of reproducing every feature of the production J.Crew storefront, the implementation focuses on recreating the important visual and structural elements while keeping the frontend lightweight.

The application is divided into reusable components such as:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── Collections.jsx
│   ├── Collections.css
│   ├── Footer.jsx
│   └── Footer.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
├── hero.webp
├── women.webp
├── men.webp
├── kids.webp
└── ...
```

The exact asset list may vary depending on the final project version.

---

## Performance Optimizations

### 1. Image Optimization

Images are served using efficient formats such as WebP where appropriate.

Below-the-fold images use lazy loading:

```jsx
<img
  src={item.image}
  alt={`${item.title} collection`}
  loading="lazy"
  decoding="async"
  width="600"
  height="750"
/>
```

This prevents unnecessary images from competing with critical resources during the initial page load.

---

### 2. Layout Stability

Image dimensions are explicitly defined so that the browser can reserve space before the images finish loading.

This helps reduce unexpected layout movement and improves Cumulative Layout Shift behavior.

---

### 3. Hero Optimization

The hero section is treated as critical above-the-fold content.

The implementation avoids lazy loading the primary hero image and keeps the hero structure lightweight.

The goal is to allow the likely LCP element to become visible as early as possible.

---

### 4. Reduced JavaScript Work

The recreation avoids unnecessary heavy dependencies and excessive client-side functionality.

Only the functionality required for the demonstration is included.

This helps reduce:

- JavaScript parsing
- JavaScript execution
- Main-thread workload
- Initial bundle complexity

---

### 5. Component-Based Architecture

The interface is divided into focused React components instead of building the entire page inside one large component.

Examples include:

- Navbar
- Hero
- Collections
- Footer

This improves maintainability while keeping the UI structure understandable.

---

### 6. Responsive Design

The layout is designed to adapt across desktop and mobile screen sizes.

Responsive CSS is used to:

- Adjust navigation
- Resize typography
- Reorganize layouts
- Prevent horizontal overflow
- Maintain readable spacing
- Adapt collection cards

---

### 7. Semantic HTML

Semantic elements are used where appropriate:

```html
<header>
<nav>
<main>
<section>
<footer>
```

This improves document structure for browsers, accessibility tools, search engines, and automated agents.

---

### 8. Accessibility

Accessibility considerations include:

- Descriptive image alt text
- Semantic page structure
- Accessible buttons and links
- Clear heading hierarchy
- Responsive text
- Keyboard-friendly controls

---

## Technology Stack

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Google Chrome DevTools
- Lighthouse
- Google PageSpeed Insights
- Git
- GitHub

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone <YOUR-REPOSITORY-URL>
```

### 2. Open the project

```bash
cd <PROJECT-FOLDER>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

For example:

```text
http://localhost:5173/
```

---

## Production Build

Create an optimized production build using:

```bash
npm run build
```

The generated production files will be available inside:

```text
dist/
```

To test the production build locally:

```bash
npm run preview
```

---

## Performance Testing

Performance should be tested against the **deployed production build**, rather than relying only on the development server.

Testing tools:

- Google PageSpeed Insights
- Lighthouse
- Chrome DevTools

Important metrics include:

| Metric | Optimization Goal |
|---|---|
| FCP | Faster initial content rendering |
| LCP | Fast loading of the main visible content |
| CLS | Stable page layout |
| TBT | Reduced main-thread blocking |
| Speed Index | Faster visible page completion |

Performance scores can vary between test runs because Lighthouse uses simulated network and device conditions.

---

## Before vs. After Approach

### Before

The original J.Crew mobile PageSpeed test returned:

```text
net::ERR_TIMED_OUT
```

Therefore reliable Core Web Vitals measurements were unavailable from that test.

### After

The optimized recreation is designed to:

- Reduce initial page complexity
- Prioritize critical content
- Optimize image delivery
- Lazy-load non-critical media
- Reduce unnecessary JavaScript
- Maintain stable layouts
- Improve mobile rendering
- Improve semantic structure and accessibility

Final numerical results should be recorded after the optimized application is deployed and tested using PageSpeed Insights.

---

## Project Deliverables

The project includes:

- Optimized React storefront recreation
- Original performance analysis
- Diagnosis report
- Prioritized performance fixes
- Lighthouse/PageSpeed evidence
- Responsive implementation
- Production build
- Project documentation

---

## Key Learning

This project demonstrates that web performance optimization is not simply about obtaining a high Lighthouse score.

The process involves identifying what blocks or delays the user experience, prioritizing critical resources, reducing unnecessary work, improving asset delivery, maintaining layout stability, and validating the result under realistic mobile conditions.

It also demonstrates the importance of interpreting Lighthouse results correctly. A failed or timed-out audit should not be presented as a numerical performance score.

---

## Disclaimer

This project is an independent educational performance optimization exercise inspired by the public J.Crew storefront.

It is not affiliated with, endorsed by, or an official implementation of J.Crew.

Brand names and trademarks belong to their respective owners.

---

## Author

**Hasini**

Web Development Performance Optimization Project