# Accessibility guide

This portfolio targets WCAG 2.2 Level AA. Accessibility is treated as part of
the design and implementation, not as a collection of labels added afterward.

## Native HTML before ARIA

Semantic HTML already communicates behavior to browsers and assistive
technology. A native `<button>` is focusable, works with Enter and Space, and
announces itself as a button. A `<div role="button">` does none of that behavior
automatically and would require custom keyboard and focus code.

Use ARIA only to provide information that native HTML cannot express:

- `aria-label` gives an accessible name when there is no useful visible label.
  The mobile icon button needs one; a text link such as “Projects” does not.
- `aria-labelledby` connects an element to visible text elsewhere. Each section
  uses its visible heading as the section’s accessible name.
- `aria-expanded` reports whether the mobile navigation is open.
- `aria-controls` identifies the region controlled by the mobile menu button.
- `aria-current="location"` identifies the navigation link for the section
  currently in view.
- `aria-hidden="true"` removes purely decorative marks from the accessibility
  tree. It must never be placed on meaningful or focusable content.

An ARIA label overrides an element’s visible text in the accessibility tree.
Unnecessary or inaccurate labels can therefore make an interface harder to
understand. The rule of thumb is: if native HTML and visible text already say
the right thing, do not add ARIA.

## Implemented patterns

### Page structure

- One `<h1>` describes the page.
- Heading levels form a logical outline.
- `<nav>`, `<main>`, `<section>`, and `<footer>` create landmarks.
- A skip link lets keyboard users bypass repeated navigation.
- Navigation and repeated content use semantic lists.

Screen-reader users commonly navigate by headings and landmarks, so this
structure functions like a table of contents even when the visual layout is
unchanged.

### Keyboard and focus

- All actions use native links and buttons.
- Every interactive element has a visible `:focus-visible` outline.
- The mobile navigation opens with Enter or Space and closes with Escape.
- Closing with Escape returns focus to the menu button.
- In-page navigation moves focus to the destination section heading.

Keyboard access matters for people using screen readers, switch devices,
speech control, or keyboards because using a pointer is difficult or
impossible.

### Images

- Informative images have concise alt text describing their purpose in context.
- Decorative or redundant images use `alt=""` so screen readers skip them.
- Photography uses `<figure>` and `<figcaption>` to connect images with their
  titles and descriptions.

Alt text should communicate what the user would miss if the image did not
load. It should not repeat nearby text or begin with “image of.”

### Visual presentation

- Text colors meet automated WCAG AA contrast checks.
- Information is not available only on hover or only through color.
- Content reflows at a 320 CSS-pixel viewport.
- Touch targets are enlarged for primary controls.
- `prefers-reduced-motion` disables smooth scrolling and transitions.
- Forced-colors mode retains visible focus indicators and boundaries.

## Testing

Run the automated checks with:

```bash
npm run lint
npm run test:a11y
```

The Playwright suite runs Axe WCAG checks and verifies the skip link, heading
structure, mobile keyboard behavior, visible photography descriptions, narrow
reflow, reduced motion, and forced-colors focus.

Automation cannot decide whether writing is understandable or alt text is
useful. Before a release, also test:

1. The entire page using only Tab, Shift+Tab, Enter, Space, and Escape.
2. Chrome or Firefox with NVDA on Windows.
3. Safari with VoiceOver on macOS or iOS when available.
4. Browser zoom at 200% and 400%.
5. Windows High Contrast mode and reduced-motion settings.

Useful standards and references:

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WAI accessibility testing guidance](https://www.w3.org/WAI/test-evaluate/)
