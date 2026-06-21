## Your Recipe Book
---
A simple, responsive recipe browsing website built with plain HTML, CSS, and JavaScript. No frameworks, no dependencies — everything runs directly in the browser.


## Project Structure

```
recipe-book/
├── index.html
├── style.css
├── script.js
├── blank.html
└── assets/
     └──|── logo.png
        ├── search-icon-2-614x460.png
        └── [recipe images].png
```

### File Overview

**index.html** — Main page. Contains the header, navigation, hero section, recipe grid, favorites section, categories, and footer with the contact form.

**style.css** — All styling. Uses CSS custom properties (variables) for the color palette and spacing. Fully responsive with breakpoints at 960px and 700px.

**script.js** — Handles interactivity: hamburger menu toggle, recipe filtering, favorites saving, search highlighting, and contact form validation. No libraries required.

**blank.html** — Placeholder page that individual recipe links currently point to. Replace with real recipe detail pages as the project grows.

---

## Features

- Sticky header with integrated search bar
- Responsive navigation with a slide-in hamburger menu on mobile
- Hero banner with a call-to-action link
- Recipe card grid with image zoom on hover, category badges, and cook-time labels
- Filter chips to narrow recipes by type: All, Savory, Sweet, or Vegan
- Save to Favorites — saved recipes appear in the Favorites section without a page reload
- Search highlights matching cards and scrolls to them
- Category browser with six recipe types
- Contact form with basic validation
- Toast notifications replace browser alerts throughout

---

## Getting Started

No build step or server is required. To run the project locally:

1. Download or clone all files into a single folder.
2. Make sure the image files are in the same folder as `index.html`.
3. Open `index.html` in any modern browser.

That is all. The site works entirely from the file system.

---

## Color Palette

| Name         | Hex       | Used for                          |
|--------------|-----------|-----------------------------------|
| Brown        | `#573E3C` | Primary text, nav background, CTA |
| Brown Light  | `#A0827F` | Secondary text, borders           |
| Brown Pale   | `#C0A895` | Accents, dessert badge            |
| Green        | `#758B7C` | Buttons, vegan badge, accents     |
| Green Dark   | `#566960` | Button hover states               |
| Cream        | `#F8F6F4` | Card backgrounds, section fills   |
| Cream Dark   | `#EDE8E3` | Borders, filter chip backgrounds  |

---

## Adding a New Recipe

1. Add the recipe image to the project folder.
2. Copy an existing `<article>` block in `index.html`.
3. Update the `data-category` attribute with the relevant tags (`savory`, `sweet`, `vegan`).
4. Update the `data-title` attribute with the recipe name.
5. Replace the `<img>` `src` and `alt` values.
6. Update the `<h3>` title and `.card-desc` description.
7. Point the links to the recipe detail page instead of `blank.html`.

Valid category values for filtering: `savory`, `sweet`, `vegan`. Multiple values are space-separated.

---

## Responsive Behaviour

| Breakpoint   | Layout                                      |
|--------------|---------------------------------------------|
| Above 960px  | 3-column recipe grid, 2-column footer       |
| 700px–960px  | 2-column recipe grid, stacked footer        |
| Below 700px  | Single-column grid, hamburger nav only      |

---

## Known Limitations

- Favorites are not persisted. Refreshing the page clears the saved list.
- Search only matches recipe titles, not descriptions or categories.
- Recipe detail pages are not yet built; all card links go to `blank.html`.
- The contact form does not send data anywhere. Backend integration would be needed for real submissions.

---

## Credits
Built as an HTML/CSS/JavaScript assignment project.
