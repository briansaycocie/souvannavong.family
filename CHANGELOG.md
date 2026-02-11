# Changelog

All notable changes to the Souvannavong Family History website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-02-11

### Changes
- feat: integrate Plausible analytics for privacy-friendly visitor tracking

## [1.1.1] - 2026-02-11

### Changes
- fix: prevent invisible sidebar backdrop from blocking footer links on mobile

## [1.1.0] - 2026-02-11

### Changes
- fix: remove sudo commands that require password authentication
- fix: use double quotes for remote command variable expansion
- fix: close single quote in remote mkdir command
- fix: use shell concatenation for remote path expansion
- fix: properly escape deployment path in SSH commands
- fix: add SSH connection test and ensure deployment directory exists
- fix: use environment variables for secrets in deploy workflow
- fix: include package-lock.json for reproducible builds and GitHub Actions caching
- feat: initial v1.0.0 release with complete family history documentation

## [1.0.0] - 2026-02-10

### Added
- Initial public release of the Souvannavong Family History website
- Complete documentation of four generations (1898-Present)
- 12 main content sections with detailed historical narrative
- 1 child page (Captain Oukham Souvannavong)
- 4 comprehensive appendices (Timeline, Photographs, Glossary, Sources)
- 13 historical photographs with detailed annotations
- SEO optimization with meta descriptions on all 17 pages
- Page-specific keyword targeting on 13 key pages
- Open Graph social media sharing with custom og-default.jpg image
- humans.txt crediting team and technology
- XML sitemap generation with priority levels
- robots.txt for search engine crawling
- Structured data (JSON-LD Schema.org) for rich snippets
- WCAG 2.2 Level AAA accessibility compliance
- Responsive design with mobile-first approach
- CSS/JS minification (28-61% file size reduction)
- Cache busting with version query parameters
- Parent-child page hierarchy for Family Lineage section
- Visual navigation indicators for child pages (indent + arrow)
- Email obfuscation for contact protection
- JavaScript-based mobile sidebar navigation
- Automatic git-based "Last Updated" timestamps
- BEM CSS methodology for maintainable styles
- Lao royal color palette (AAA compliant crimson and gold)

### Technical Stack
- Eleventy 2.0.1 static site generator
- Nunjucks templating engine
- Vanilla JavaScript (ES5+)
- Custom CSS with BEM naming
- clean-css for CSS minification
- terser for JavaScript minification
- GitHub Actions deployment workflow
- SSH/rsync deployment to production server

### Documentation
- Comprehensive README.md with setup instructions
- CONTRIBUTING.md with development guidelines
- AGENTS.md with AI agent development guidelines
- ACCESSIBILITY.md with WCAG compliance details
- SECURITY-PERFORMANCE.md with best practices

### Content Coverage
- Early Life and Formation (1898-1945)
- National Leadership and Ministerial Service (1946-1964)
- Ambassador to Japan (c.1960-1964)
- President of the King's Council (1965-1975)
- The 1970 Royal State Visit to Japan
- Collapse of the Kingdom and Exile (1975)
- Diaspora Across Three Continents
- Family Lineage spanning four generations
- Historical Significance and legacy preservation
- 150-year chronological timeline
- Annotated photographic record with detailed analysis
- Glossary of Lao royal, government, and military terminology
- Comprehensive source notes and archival references

[1.0.0]: https://github.com/[owner]/souvannavong.family/releases/tag/v1.0.0

[1.1.0]: https://github.com/\briansaycocie/souvannavong.family/releases/tag/v1.1.0

[1.1.1]: https://github.com/\briansaycocie/souvannavong.family/releases/tag/v1.1.1

[1.2.0]: https://github.com/\briansaycocie/souvannavong.family/releases/tag/v1.2.0
