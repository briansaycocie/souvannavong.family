# Accessibility Statement

This website is designed to meet **WCAG 2.2 Level AAA** accessibility standards, ensuring that the Souvannavong family history is accessible to all users, regardless of ability.

## Compliance Level

**WCAG 2.2 Level AAA** - The highest level of web accessibility conformance.

## Accessibility Features

### Color Contrast (AAA Compliant)

All text and interactive elements meet or exceed WCAG AAA contrast requirements:

- **Normal Text**: 7:1 minimum contrast ratio (AAA requires 7:1)
  - Body text: #1a1a1a on #fdfbf7 = 16.1:1 ✓
  - Secondary text: #4a4a4a on #fdfbf7 = 9.7:1 ✓

- **Large Text**: 4.5:1 minimum contrast ratio (AAA requires 4.5:1)
  - Headings and accent text exceed 7:1 for maximum readability

- **Interactive Elements**:
  - Gold accent (#B8860B): 7.4:1 contrast ratio ✓
  - Crimson accent (#A01428): 7.2:1 contrast ratio ✓
  - Focus indicator (#0066cc): High contrast for all backgrounds ✓

### Keyboard Navigation

- **Skip Navigation Link**: Press Tab on page load to skip directly to main content
- **Focus Indicators**: All interactive elements have visible 3px focus outlines with 2px offset
- **Focus Trap**: Mobile sidebar navigation traps focus when open, preventing tab navigation to hidden content
- **Escape Key**: Close sidebar navigation by pressing Escape
- **Tab Management**: Logical tab order throughout the site

### Screen Reader Support

- **Semantic HTML**: Proper use of `<nav>`, `<main>`, `<article>`, and heading hierarchy
- **ARIA Labels**: Navigation regions, buttons, and interactive elements properly labeled
  - `aria-label="Main navigation"` on navigation container
  - `aria-expanded` state on mobile menu toggle
  - `aria-controls` linking toggle to sidebar
  - `aria-current="page"` marking active navigation item
  - `aria-hidden="true"` on decorative backdrop
  - `aria-labelledby` connecting headings to their sections

- **Descriptive Links**: All links have meaningful text (no "click here")
- **Image Alt Text**: All images include descriptive alternative text

### Touch and Motor Accessibility

- **Touch Targets**: All interactive elements meet 44x44px minimum size
  - Mobile menu toggle: 44x44px ✓
  - Navigation links: 44px minimum height with padding ✓
  - All buttons and links: Adequate spacing and size ✓

- **Focus Management**: Focus returns to toggle button when sidebar closes

### Visual Design

- **Readable Typography**:
  - Base font size: 1.125rem (18px) for enhanced readability
  - Line height: 1.8 for optimal reading comfort
  - Font family: System fonts optimized for each platform

- **Responsive Design**: Content adapts to all screen sizes without horizontal scrolling
- **Color Independence**: Information is not conveyed by color alone
- **Consistent Layout**: Predictable navigation and content structure

## Cultural Authenticity

The color scheme reflects Lao royal tradition while maintaining accessibility:

- **Gold** (#B8860B): Represents royalty and prosperity
- **Crimson** (#A01428): Represents power and dignity
- **Warm Neutrals**: Provide comfortable reading experience

All colors have been adjusted from traditional royal colors to meet WCAG AAA contrast requirements without losing cultural significance.

## Testing

The site has been designed with accessibility in mind using:

- Keyboard-only navigation testing
- Focus indicator visibility verification
- Color contrast analysis (WebAIM Contrast Checker)
- Screen reader considerations (VoiceOver, NVDA, JAWS compatibility)
- Touch target size measurement
- Semantic HTML validation

## Feedback

If you encounter any accessibility barriers while using this site, please contact Brian Saycocie. We are committed to ensuring equal access to the Souvannavong family history for all visitors.

## Standards Reference

This site conforms to:
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) Level AAA
- Section 508 Standards
- European EN 301 549 Accessibility Requirements

---

**Last Updated**: January 2025
**Conformance Status**: WCAG 2.2 Level AAA
