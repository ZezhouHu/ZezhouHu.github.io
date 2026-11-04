# Zezhou Hu — Academic Homepage

A one-page academic homepage prepared for GitHub Pages.

## Content policy

The public page includes academic information only. The explicitly approved
contact details are `z.z.hu@pku.edu.cn`, `zezhouhu2000@gmail.com`, and the
author's Bilibili profile. The academic profile also names Prof. Bin Chen as the
advisor. No phone number, address, identity document, or certificate scan is
included.

## Local preview

```bash
npm install
npm run dev
```

## GitHub Pages

Create a repository named `<username>.github.io`, push this project to its
`main` branch, then enable GitHub Pages with **GitHub Actions** as the source.
The included workflow builds and publishes the page automatically.

## Updating publications

Publication data lives in `app/page.tsx`. The publication count is derived from
the complete list. Citation metrics were checked against INSPIRE-HEP on
5 November 2026: 16 papers, 469 citations, and h-index 10. These are the
all-papers totals, including preprints and self-citations, from the official
[citation summary](https://inspirehep.net/api/literature/facets?facet_name=citation-summary&q=a%20Zezhou.Hu.1).

Research content lives in `app/research-content.ts` and follows the October
2026 research statement. Each area introduces its broader motivation before
describing results, work in preparation, and concrete next steps. QFT in Klein
space and with multiple time directions is included under holography beyond
AdS/CFT. Black hole imaging appears last as earlier work.

The flat-space holography section also incorporates the November 2026 note on
Type I Hilbert-space duality and Type II amplitude duality. The distinction is
introduced through two comparison cards, followed by a statement of the
Type II construction program and its relation to the concrete research projects.
The initial view is concise; native disclosures keep each type's detailed
discussion, equations, and figure inside its card. Pairing conventions are
included with their respective types, and the Mellin dictionary belongs to
Type II. Each figure has its own expandable coordinate explanation. A concrete Type I
reconstruction map is not assumed to be unitary: its domain, normalization,
pairing, and possible Hilbert-space realization require separate analysis.
The framework includes the note's original vector cutoff diagrams and KaTeX
equations with bilingual definitions. Formula and figure data are maintained in
`app/holography-visuals.ts`; the math component is `app/research-math.tsx`.
The renderer, styles, fonts, and figures are served with the site.

Education, teaching, academic activities, honors, and personal interests live
in `app/academic-profile.ts`, following the academic CV updated on 8 October
2026. The homepage retains the existing approved public contact details.
