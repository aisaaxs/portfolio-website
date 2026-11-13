# Portfolio repository guidance

These instructions apply to all development and maintenance work in this
repository. Keep them concise, durable, and specific to this project.

## Project identity

- Preserve the waterfall-illustration color system defined in
  `src/app/globals.css`.
- Keep the complete About narrative and waterfall fact unless explicitly asked
  to revise or remove them.
- Keep the section name "Projects".
- Preserve the restrained comic-inspired visual language: strong ink borders,
  paper-like backgrounds, offset shadows, and limited illustration-derived
  accent colors.
- Favor clear professional storytelling without removing the personal voice of
  the portfolio.

## Architecture and content

- Keep route and metadata files in `src/app`.
- Keep site-wide components in `src/components/layout` and page sections in
  `src/components/sections`.
- Keep reusable configuration, content data, and shared models in `src/config`,
  `src/data`, and `src/types` respectively.
- Prefer data-driven repeated content over hard-coded duplicate markup.
- Do not add abstractions, state-management libraries, or dependencies unless
  they solve a demonstrated need.
- Do not invent professional accomplishments, metrics, employers, credentials,
  or project outcomes. Use verified content or ask for clarification.
- Treat personal documents and portfolio media as user-owned assets. Do not
  replace or remove them without explicit direction.

## Accessibility

- Target WCAG 2.2 Level AA.
- Prefer semantic HTML and native controls over custom ARIA widgets.
- Add ARIA only when native semantics do not communicate the required name,
  relationship, state, or behavior.
- Do not make essential information available only through hover, animation,
  color, or pointer input.
- Preserve keyboard navigation, visible focus, logical headings and landmarks,
  reduced-motion support, forced-colors support, meaningful image alternatives,
  and narrow-screen reflow.
- Run `npm run test:a11y` after interface, content, navigation, or color changes.
- Update `docs/accessibility.md` when introducing a new accessibility pattern or
  changing an existing one.

## Styling and responsive behavior

- Reuse the color tokens in `src/app/globals.css`; do not introduce arbitrary
  near-duplicate brand colors.
- Verify new foreground/background combinations meet WCAG contrast targets.
- Design mobile-first and verify layouts at a 320 CSS-pixel viewport.
- Avoid fixed heights for text-bearing components and allow content to reflow.
- Keep interactive targets comfortably usable on touch screens.
- Respect `prefers-reduced-motion` for animation and smooth scrolling.

## Next.js and TypeScript

- This project uses the Next.js App Router, TypeScript, Tailwind CSS, Cache
  Components, and Partial Prefetching.
- Read the relevant guide in `node_modules/next/dist/docs/` before changing
  Next.js-specific APIs, caching, routing, metadata, or configuration.
- Preserve the sitemap, robots, manifest, canonical metadata, Open Graph data,
  and structured data unless a task explicitly changes them.
- Keep server components as the default. Add `"use client"` only when browser
  APIs, client state, effects, or event handlers require it.
- Use explicit shared types for structured content and avoid `any`.

## Dependencies and package management

- Use npm and keep `package-lock.json` synchronized with `package.json`.
- Add runtime packages to `dependencies` and development-only tooling to
  `devDependencies`.
- Avoid dependency additions when the platform or existing stack already
  provides the capability.
- Run `npm run deps:check` after dependency changes.

## Git and releases

- Perform normal development work on `development` unless explicitly directed
  to use another branch.
- Treat `production` as the release branch; do not switch, merge, tag, push, or
  publish a release without explicit direction.
- Do not overwrite, discard, or reformat unrelated user changes.
- Keep releases compatible with semantic versioning.

## Verification

Before handing off code changes, run the checks relevant to the task. For a
normal interface or application change, run all of the following:

```bash
npm run lint
npm run test:a11y
npm run build
npm run deps:check
```

- Also run `git diff --check` before handoff.
- Report any check that could not be run and explain why.
- Automated accessibility tests do not replace manual keyboard, zoom, and
  screen-reader review for significant interface changes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may
all differ from training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing Next.js-specific code. Heed
deprecation notices.

This block is managed by Next.js development tooling. Preserve it so running
the development server does not need to recreate it.

<!-- END:nextjs-agent-rules -->
