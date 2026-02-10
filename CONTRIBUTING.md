# Contributing to the Souvannavong Family History Project

Thank you for your interest in contributing to this historical preservation project. This website documents four generations of the Souvannavong family of Laos, from royal governance through exile and resettlement.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Submitting Changes](#submitting-changes)
- [Versioning and Releases](#versioning-and-releases)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project is committed to providing a welcoming and inclusive environment. We expect all contributors to:

- **Respect historical accuracy** - This is a documentary project based on archival research
- **Honor cultural sensitivity** - Content relates to Lao royal history, exile, and diaspora
- **Maintain accessibility** - WCAG 2.2 Level AAA compliance is mandatory
- **Preserve privacy** - No personal information about living individuals
- **Communicate respectfully** - Constructive feedback and collaboration

## How Can I Contribute?

### 🎯 Welcome Contributions

**Technical Improvements:**
- Accessibility enhancements (WCAG AAA compliance)
- Performance optimizations
- Security improvements
- Bug fixes
- Mobile responsiveness improvements
- Browser compatibility fixes
- Documentation improvements

**Content Corrections:**
- Typographical errors
- Broken links
- Formatting issues
- Image alt text improvements
- Citation corrections (with sources)

**Translation:**
- Lao language glossary terms
- Historical term definitions
- Transliteration corrections

**Design:**
- Accessibility contrast improvements
- Focus indicator enhancements
- Print stylesheet improvements
- **Must maintain WCAG AAA compliance**

### ❌ Contributions We Cannot Accept

**Historical Content Changes:**
- Factual claims without archival sources
- Personal interpretations or opinions
- Speculative historical narratives
- Content contradicting family records

**Breaking Changes:**
- Accessibility regressions (below WCAG AAA)
- Introduction of JavaScript frameworks
- CSS preprocessors or non-BEM naming
- rem/em units (pixels only)
- External dependencies without justification

**Privacy Violations:**
- Personal information about living individuals
- Contact information
- Server details or credentials
- Unpublished family photographs

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** (comes with Node.js)
- **Git**
- Basic understanding of HTML, CSS, and Markdown

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/souvannavong.family.git
   cd souvannavong.family
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm start
   ```
   Site available at `http://localhost:8080`

5. **Build for production:**
   ```bash
   npm run build
   ```

### Project Structure

```
souvannavong.family/
├── sections/          # 12 main historical sections + child pages
├── appendices/        # 4 supplementary pages
├── assets/            # Static assets
│   ├── images/        # Historical photographs
│   ├── css/           # Stylesheets (BEM methodology)
│   ├── js/            # Vanilla JavaScript
│   └── templates/     # Build-time minification templates
├── _layouts/          # Nunjucks templates
├── _data/             # Site configuration
└── docs/              # Technical documentation
```

See [README.md](README.md) for complete project structure.

## Development Guidelines

### Accessibility Requirements

**WCAG 2.2 Level AAA compliance is mandatory.**

- **Color contrast:** 7:1 minimum for normal text
- **Touch targets:** 44x44px minimum
- **Keyboard navigation:** All features accessible via keyboard
- **Focus indicators:** 3px solid outline with 2px offset
- **ARIA labels:** Proper semantic HTML and ARIA attributes
- **Screen readers:** Test with VoiceOver, NVDA, or JAWS

See [docs/ACCESSIBILITY.md](docs/ACCESSIBILITY.md) for complete standards.

### Code Standards

**CSS:**
- **Methodology:** BEM (Block Element Modifier)
- **Units:** Pixels only (no rem, em, or other relative units)
- **Variables:** Use CSS custom properties in `:root`
- **Example:** `.sidebar__nav-list`, `.sidebar--active`

**JavaScript:**
- **Style:** Vanilla ES5+ (no frameworks)
- **Pattern:** IIFE encapsulation
- **DOM Ready:** Always check `document.readyState`
- **Accessibility:** Focus management, ARIA state updates

**HTML/Nunjucks:**
- **Semantic HTML:** Proper use of `<nav>`, `<main>`, `<article>`
- **Heading hierarchy:** h1 → h2 → h3 (no skipping)
- **ARIA:** `aria-label`, `aria-expanded`, `aria-current="page"`

**Markdown:**
- **Headers:** ATX-style (`#` syntax)
- **Images:** Absolute paths (`/assets/images/filename.jpg`)
- **Alt text:** Descriptive alternative text for all images
- **Links:** Meaningful link text (no "click here")

See this document for comprehensive guidelines on contributing.

### Security Requirements

**Never commit:**
- SSH keys, passwords, or credentials
- Personal information (names, addresses, emails of living individuals)
- Server paths, IP addresses, or hostnames
- Environment variables (.env files)

All sensitive deployment information must be stored in GitHub Secrets.

All deployment and operational security is managed by project maintainers.

## Submitting Changes

### Branch Naming

Use descriptive branch names:
- `fix/broken-navigation-link`
- `feat/improve-mobile-menu`
- `docs/update-accessibility-statement`
- `a11y/increase-contrast-ratio`

### Commit Messages

Write clear, descriptive commit messages:

```
Fix mobile navigation toggle on iOS Safari

- Added explicit click event handler
- Prevented default touch behavior
- Tested on iOS 15+ Safari

Fixes #123
```

**Format:**
- First line: Imperative summary (50 chars or less)
- Blank line
- Detailed explanation (wrap at 72 characters)
- Reference issues with `Fixes #123` or `Closes #456`

### Pull Request Process

1. **Create a feature branch:**
   ```bash
   git checkout -b fix/accessibility-contrast
   ```

2. **Make your changes** following style guidelines

3. **Test your changes:**
   ```bash
   npm run build  # Ensure build succeeds
   npm start      # Test in browser
   ```

4. **Check accessibility:**
   - Test keyboard navigation (Tab, Enter, Escape)
   - Verify focus indicators are visible
   - Check color contrast (WebAIM Contrast Checker)
   - Test with screen reader (if possible)

5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Improve focus indicators for AAA compliance"
   ```

6. **Push to your fork:**
   ```bash
   git push origin fix/accessibility-contrast
   ```

7. **Open a Pull Request** on GitHub

### Pull Request Guidelines

**Your PR should:**
- Have a clear, descriptive title
- Reference any related issues
- Include screenshots (for visual changes)
- Pass all accessibility checks
- Not break existing functionality
- Include updated documentation (if needed)

**PR Description Template:**

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Accessibility improvement
- [ ] Documentation update
- [ ] Performance optimization

## Testing
- [ ] Tested on Chrome/Edge
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested keyboard navigation
- [ ] Tested mobile responsive
- [ ] Verified WCAG AAA compliance

## Screenshots (if applicable)
[Add screenshots here]

## Related Issues
Fixes #123
```

### Review Process

1. **Automated checks** must pass (build, if configured)
2. **Maintainer review** for code quality and standards
3. **Accessibility review** for WCAG AAA compliance
4. **Historical accuracy review** (for content changes)
5. **Approval and merge** by maintainer

**Please be patient** - this is a historical preservation project requiring careful review.

## Versioning and Releases

### Semantic Versioning

This project follows [Semantic Versioning](https://semver.org/) (SemVer):

- **MAJOR** version (e.g., 1.0.0 → 2.0.0)
  - Breaking changes or significant restructuring
  - Major redesigns or navigation changes
  - Removal of features or sections

- **MINOR** version (e.g., 1.0.0 → 1.1.0)
  - New features or content sections
  - New photographs or documentation
  - Significant enhancements

- **PATCH** version (e.g., 1.0.0 → 1.0.1)
  - Bug fixes and corrections
  - Typo fixes
  - Minor improvements
  - Accessibility fixes

### Automated Version Bumping

After each successful deployment to production, a GitHub Action automatically:

1. **Analyzes commit messages** since the last release
2. **Determines version bump type** based on commit prefixes
3. **Updates version** in `package.json`
4. **Updates CHANGELOG.md** with commit history
5. **Updates humans.txt** with current date
6. **Creates git tag** (e.g., `v1.0.1`)
7. **Pushes changes** back to repository
8. **Creates GitHub Release** with changelog

This workflow runs automatically—**you don't need to manually update versions**.

### Commit Message Format for Versioning

To control how versions are bumped, use these commit message prefixes:

**Major Version Bump:**
```bash
git commit -m "major: restructure entire navigation hierarchy"
git commit -m "BREAKING CHANGE: remove obsolete sections"
```

**Minor Version Bump:**
```bash
git commit -m "feat: add new historical photographs section"
git commit -m "feature: add Timeline appendix"
git commit -m "add: new family lineage documentation"
git commit -m "new: King's Council section"
```

**Patch Version Bump (Default):**
```bash
git commit -m "fix: correct date in timeline"
git commit -m "docs: update README with new structure"
git commit -m "style: improve mobile navigation spacing"
git commit -m "chore: update dependencies"
```

### Commit Message Best Practices

**Format:**
```
<prefix>: <short description>

<optional detailed explanation>

<optional footer>
```

**Examples:**

```bash
# Bug fix (patch bump)
git commit -m "fix: resolve mobile sidebar overlay z-index issue"

# New feature (minor bump)
git commit -m "feat: add page-specific SEO keywords to all sections"

# Breaking change (major bump)
git commit -m "major: migrate to new content structure

Reorganized all sections into parent-child hierarchy.
This changes the URL structure for several pages.

BREAKING CHANGE: URLs for family lineage pages have changed"
```

**Prefix Guidelines:**
- Use `major:` or `BREAKING CHANGE:` sparingly—only for truly breaking changes
- Use `feat:`, `feature:`, `add:`, or `new:` for new content or functionality
- Use `fix:` for bug fixes and corrections
- Use `docs:` for documentation-only changes
- Use `style:` for CSS/formatting changes
- Use `chore:` for maintenance tasks

### Preventing Recursive Builds

The version bump workflow automatically includes `[skip ci]` in its commit message to prevent the deployment workflow from triggering again. **You never need to add `[skip ci]` yourself.**

### CHANGELOG.md

The [CHANGELOG.md](CHANGELOG.md) file tracks all notable changes:

- **Automatically updated** by the version bump workflow
- Follows [Keep a Changelog](https://keepachangelog.com/) format
- Organized by version with dates
- Lists commits since the last release

**You should not manually edit CHANGELOG.md** unless adding historical notes or corrections to existing entries.

### Release Process

The complete release process is **fully automated**:

1. **Developer makes changes** and commits with appropriate prefix
2. **Developer pushes to main branch**
   ```bash
   git push origin main
   ```
3. **Deploy workflow** triggers automatically
   - Builds the static site
   - Deploys to production server
   - If successful, triggers version bump workflow
4. **Version bump workflow** runs
   - Bumps version based on commits
   - Updates package.json, CHANGELOG.md, humans.txt
   - Creates git tag (e.g., `v1.0.1`)
   - Creates GitHub Release
   - Pushes back to repository with `[skip ci]`
5. **Release appears** on GitHub Releases page

**No manual intervention required!**

### Viewing Releases

- **CHANGELOG:** [CHANGELOG.md](CHANGELOG.md) in the repository
- **GitHub Releases:** `https://github.com/[owner]/souvannavong.family/releases`
- **Current Version:** Check `package.json` or the version badge in [README.md](README.md)

### Pre-Release Checklist

Before pushing changes that will trigger a release:

- [ ] All changes tested locally (`npm run build`, `npm start`)
- [ ] Accessibility verified (WCAG AAA compliance)
- [ ] Commit messages use correct prefixes
- [ ] Breaking changes documented in commit message
- [ ] No sensitive information in code
- [ ] Images optimized and have alt text
- [ ] Links tested and working

### Hotfix Releases

For urgent production fixes:

1. **Create fix** in a hotfix branch
   ```bash
   git checkout -b hotfix/critical-navigation-bug
   ```
2. **Test thoroughly**
3. **Commit with `fix:` prefix**
   ```bash
   git commit -m "fix: resolve critical navigation accessibility issue"
   ```
4. **Merge to main** and push
5. **Automatic deployment** and patch version bump will occur

The automated system ensures all releases are properly documented and versioned.

## Style Guidelines

### CSS

```css
/* BEM naming convention */
.block {}
.block__element {}
.block--modifier {}

/* Pixel units only */
font-size: 18px;  /* ✅ Correct */
font-size: 1.125rem;  /* ❌ Wrong */

/* CSS variables */
color: var(--color-primary);  /* ✅ Correct */
```

### JavaScript

```javascript
// IIFE pattern
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Your code here
  }
})();
```

### Markdown

```markdown
# ATX-style headers

![Descriptive alt text](/assets/images/filename.jpg)

[Meaningful link text](https://example.com)
```

### Git Commit Messages

```
Capitalized, short summary (50 chars or less)

More detailed explanatory text, if necessary. Wrap at 72
characters. Explain what and why, not how.

- Bullet points are okay
- Use a hyphen or asterisk

Fixes #123
```

## Community

### Getting Help

- **Documentation:** See [README.md](README.md), [CONTRIBUTING.md](CONTRIBUTING.md), and [docs/ACCESSIBILITY.md](docs/ACCESSIBILITY.md)
- **Questions:** Open a GitHub issue with the `question` label
- **Discussions:** Use GitHub Discussions for general topics

### Recognition

Contributors will be acknowledged in release notes and may be mentioned in documentation. Significant contributions to historical accuracy or accessibility may be highlighted.

### Historical Content Contributions

**For historical corrections or additions:**

1. **Provide primary sources** - Archival documents, photographs, official records
2. **Cite references** - Add to `appendices/sources.md`
3. **Cultural sensitivity** - Use formal titles and respectful language
4. **Family verification** - Content may require approval from family custodians

**This is a living historical document.** We welcome corrections and additions that:
- Are supported by archival evidence
- Correct factual errors
- Add historical context
- Improve citations

## Questions?

If you have questions about contributing, please:
1. Check [README.md](README.md) and [CONTRIBUTING.md](CONTRIBUTING.md)
2. Review existing issues and pull requests
3. Open a new issue with the `question` label

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License. See [LICENSE](LICENSE) for details.

**Attribution:** When using historical content from this project, please provide attribution linking to https://souvannavong.family

---

**Thank you for helping preserve the Souvannavong family history for future generations.**

**Maintainer:** Brian Saycocie
**Last Updated:** February 10, 2026
