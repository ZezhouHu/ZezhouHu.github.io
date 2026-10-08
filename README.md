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
9 October 2026: 16 papers, 457 citations, and h-index 10.

Research content lives in `app/research-content.ts` and follows the October
2026 research statement. Each area introduces its broader motivation before
describing results, work in preparation, and concrete next steps. QFT in Klein
space and with multiple time directions is included under holography beyond
AdS/CFT. Black hole imaging appears last as earlier work.

Education, teaching, academic activities, honors, and personal interests live
in `app/academic-profile.ts`, following the academic CV updated on 8 October
2026. The homepage retains the existing approved public contact details.
