# The Souvannavong Family History Website

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)

This is an [Eleventy](https://www.11ty.dev/) static site documenting the history of the Souvannavong family of Laos.

## Latest Release

**v1.0.0** - February 10, 2026

See [CHANGELOG.md](CHANGELOG.md) for detailed release notes and version history.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Start the development server with live reload:

```bash
npm start
```

The site will be available at `http://localhost:8080`

### Build

Build the static site for production:

```bash
npm run build
```

The output will be in the `_site` directory.

### Clean

Remove the build directory:

```bash
npm run clean
```

## Project Structure

```
souvannavong.family/
├── _layouts/               # Nunjucks templates
│   └── base.njk            # Main layout with sidebar navigation
├── _data/                  # Global data files
│   ├── navigation.json     # Navigation menu structure
│   └── helpers.js          # Template helper functions
├── sections/               # Main content sections (12 pages)
│   ├── introduction.md
│   ├── early-life.md
│   ├── national-leadership.md
│   ├── ambassador-to-japan.md
│   ├── kings-council.md
│   ├── japan-visit.md
│   ├── delegation-role.md
│   ├── collapse-and-exile.md
│   ├── diaspora.md
│   ├── family-lineage.md
│   ├── family-lineage/     # Child pages
│   │   └── captain-oukham-souvannavong.md
│   ├── significance.md
│   └── conclusion.md
├── appendices/             # Appendices (4 pages)
│   ├── photographs.md      # Annotated photo record from 1970
│   ├── timeline.md         # Chronological timeline 1898-present
│   ├── glossary.md         # Lao royal & military terms
│   └── sources.md          # Archival references
├── assets/                 # Static assets
│   ├── css/                # Stylesheets
│   │   └── style.css       # Main styles with sidebar layout
│   ├── js/                 # JavaScript
│   │   ├── navigation.js   # Mobile sidebar toggle
│   │   └── email.js        # Email obfuscation
│   ├── images/             # Historical photographs
│   └── templates/          # Build-time templates
│       ├── css.11ty.js     # CSS minification
│       ├── email-js.11ty.js
│       └── navigation-js.11ty.js
├── docs/                   # Technical documentation
│   └── ACCESSIBILITY.md    # WCAG 2.2 AAA compliance statement
├── index.md                # Home page with navigation overview
├── .eleventy.js            # Eleventy configuration
├── .eleventyignore         # Files excluded from build
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # MIT License
├── README.md               # Project documentation
└── package.json            # Project dependencies
```

## Content Organization

The historical content has been organized into **12 main sections** and **4 appendices**, each as a separate page:

### Main Sections (Sections I-XII)
1. Introduction and Purpose
2. Early Life and Formation (1898-1945)
3. National Leadership and Ministerial Service (1946-1964)
4. Ambassador to Japan and International Diplomacy
5. President of the King's Council and Royal Advisor (1965-1975)
6. The 1970 Royal State Visit to Japan
7. Outhong Souvannavong's Role in the Japan Visit
8. Collapse of the Kingdom and Exile (1975)
9. Diaspora Across Three Continents
10. Family Lineage - Visual Family Tree
    - Captain Oukham Souvannavong - Royal Lao Air Force (child page)
11. Historical Significance
12. Conclusion

### Appendices (A-D)
- **A**: Annotated Photographic Record - The 1970 Royal Visit to Japan
- **B**: Chronological Timeline - 1898 to Present
- **C**: Glossary of Terms - Lao Royal, Government, and Military Titles
- **D**: Source Notes and Archival References

## Features

- **Sidebar Navigation** - Easy access to all sections and appendices
- **Responsive Design** - Sidebar collapses on mobile with toggle button
- **Live Reload** - Development server auto-refreshes on file changes
- **Clean URLs** - `/sections/early-life/` instead of `/sections/early-life.html`
- **Markdown-based** - All content in easy-to-edit markdown files
- **WCAG 2.2 Level AAA Accessible** - Meets the highest web accessibility standards
- **Privacy-Respecting Analytics** - Plausible Analytics framework ready (cookieless, no personal data)

## Accessibility

This website conforms to **WCAG 2.2 Level AAA** accessibility standards, ensuring the Souvannavong family history is accessible to all users.

**Key Accessibility Features:**
- 7:1+ contrast ratios for all text (AAA compliant)
- Skip navigation link for keyboard users
- Full keyboard navigation with visible focus indicators
- ARIA labels and semantic HTML for screen readers
- 44x44px minimum touch targets for all interactive elements
- Focus trap in mobile sidebar navigation
- Culturally authentic Lao royal colors (gold/crimson) adjusted for accessibility

See our full [Accessibility Statement](docs/ACCESSIBILITY.md) for complete details.

## Deployment

The built site in `_site/` can be deployed to any static hosting service:

- Your own server
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront

This project uses automated deployment via GitHub Actions. Deployment configuration is managed by project maintainers.

## Versioning

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for breaking changes or significant restructuring
- **MINOR** version for new features or content sections
- **PATCH** version for bug fixes, typos, and minor updates

### Automated Version Bumping

After each successful deployment, a GitHub Action automatically:
1. Analyzes commit messages to determine version bump type
2. Updates `package.json` version
3. Updates `CHANGELOG.md` with changes
4. Updates `humans.txt` with current date
5. Creates a git tag (e.g., `v1.0.1`)
6. Pushes changes back to the repository
7. Creates a GitHub Release

### Commit Message Format

To control version bumps, use these commit prefixes:
- `major:` or `BREAKING CHANGE:` - Bumps major version (1.0.0 → 2.0.0)
- `feat:` or `feature:` or `add:` or `new:` - Bumps minor version (1.0.0 → 1.1.0)
- Any other message - Bumps patch version (1.0.0 → 1.0.1)

**Examples:**
```bash
git commit -m "feat: add new historical photograph section"  # → 1.1.0
git commit -m "fix: correct date in timeline"                # → 1.0.1
git commit -m "major: restructure navigation hierarchy"      # → 2.0.0
```

The version bump workflow includes `[skip ci]` in its commit to prevent recursive builds.

## Editing Content

To edit the family history:

1. Navigate to the appropriate markdown file in `sections/` or `appendices/`
2. Edit the content using standard Markdown syntax
3. Save the file - the dev server will automatically rebuild and refresh
4. Images should be placed in `assets/images/` and referenced as `/assets/images/filename.jpg` (absolute paths)

## Navigation

The navigation menu is controlled by `_data/navigation.json`. To add or reorder sections, edit this file.

## Contributing

We welcome contributions that improve accessibility, fix bugs, or enhance documentation. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Code standards (BEM, WCAG AAA, pixel units)
- Development setup and workflow
- Submitting pull requests
- Historical content guidelines

For historical corrections or additions, please provide archival sources.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

When using content from this project, please provide attribution by linking to https://souvannavong.family

Example: "Historical content sourced from the Souvannavong Family Archive (https://souvannavong.family)"

## About

This website preserves the history of the Souvannavong family across four generations:
1. **Royal governance and diplomacy** - Outhong Souvannavong (1898-1996)
2. **Military service during national crisis** - Captain Oukham Souvannavong
3. **Exile and resettlement** - Ouladay Saycocie (Souvannavong)
4. **Historical recovery and preservation** - Brian Saycocie

Compiled from family-held artifacts, photographs, oral history, and international archival sources.

© 2026 Souvannavong Family
