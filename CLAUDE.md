# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Jekyll-based GitHub Pages personal academic website. To develop locally:

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload
```

## Architecture and Structure

This is a personal academic website built with Jekyll and GitHub Pages. The site was modernized from table-based layouts to semantic HTML with modern CSS (Flexbox), while preserving the original visual design and data-driven content structure:

- **Data-driven content**: Publications and personal info are stored in `_data/` YAML files:
  - `_data/papers.yml` - Featured publications with images and detailed metadata
  - `_data/other_papers.yml` - Other publications in text-only format
  - `_data/intro.yml` - Personal introduction and bio information
  - `_data/teaching.yml` - Teaching experience and courses
  - `_data/footer.yml` - Footer attribution text

- **Template system**: Uses Jekyll includes for modular components:
  - `_includes/intro_block.html` - Personal introduction section
  - `_includes/paper_row.html` - Featured publication display with images
  - `_includes/paper_text.html` - Text-only publication listings
  - `_includes/analytics.html` - Analytics tracking code

- **Theming system**: Custom theme support via:
  - Base styles in `stylesheet.css`
  - Custom themes in `themes/` directory (e.g., `themes/panorama.css`)
  - Theme selection via `site_theme` in `_config.yml` or `theme` in page frontmatter

- **Layout structure**: 
  - Main layout `_layouts/site.html` with theme switching logic
  - Semantic HTML structure using `<main>`, `<section>`, `<article>`, `<header>` elements
  - Modern CSS with Flexbox layouts and responsive design
  - Preserved visual design (rounded boxes, shadows, spacing) from original table-based layout

## Key Configuration

- **_config.yml**: Contains site metadata and theme configuration
- **Gemfile**: Uses `github-pages` gem for GitHub Pages compatibility
- **index.md**: Main page that renders publications using Jekyll includes and data files

## Content Management

All content is separated from presentation and stored in YAML files:
- **Publications**: Edit `_data/papers.yml` (featured with images) or `_data/other_papers.yml` (text-only)
- **Personal info**: Update `_data/intro.yml` for bio, name, social links, headshot images
- **Teaching**: Modify `_data/teaching.yml` for course listings
- **Footer**: Change `_data/footer.yml` for attribution text

## Important CSS Notes

The site uses a two-tier styling system:
1. **Base styles**: `stylesheet.css` - core typography, layout, and responsive design
2. **Theme overrides**: `themes/panorama.css` - theme-specific styling with `!important` declarations

**CRITICAL: The Panorama theme controls almost everything!**
- The Panorama theme (`themes/panorama.css`) uses `!important` declarations that override ALL base styles
- Font sizes, colors, spacing, and layout are primarily controlled by the theme, not the base stylesheet
- Many theme selectors use legacy table-based CSS (`table:has(.name)`, `tr[bgcolor]`) that may not match the modern HTML structure
- **When making style changes**: Always modify `themes/panorama.css` first, not `stylesheet.css`
- The theme CSS loads after base CSS and completely overrides it with `!important`

**Key Panorama theme overrides:**
- `.name`: 36px font size
- `h2`: 24px font size  
- `table:has(.name) p:not(.name)`: 18px font size (may not match actual HTML)
- `.intro-social a`: 16px font size
- `.papertitle`: 20px font size