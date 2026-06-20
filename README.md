# wchengad.github.io

Personal academic homepage of **Wei Cheng (程巍)**, built on the [Lumina](https://github.com/YY-GX/Lumina) template (Astro 5 + Tailwind CSS 4).

## Edit content

| What | File |
|---|---|
| Name, social links, page toggles, theme | `site.config.yml` |
| Bio & research interests (homepage) | `src/content/about.md` |
| Education & Experience (homepage + /cv) | `src/content/cv/cv.yml` |
| Publications | `src/content/publications/papers.bib` |
| Projects | `src/content/projects/<slug>/index.md` |
| News (year-grouped) | `src/content/news/*.md` |
| Photo / PDFs / images | `public/images/`, `public/files/` |

### Publication link fields
The BibTeX parser supports: `pdf`, `code`, `video`, `slides`, `doi`, `url`, and (custom)
`project`, `data`, `demo`, `model`, `benchmark`. For arXiv papers, put the abs URL in `pdf`.
The author whose name matches `publications.author_name` in `site.config.yml` is auto-bolded
(write it as `Cheng, Wei`).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (GitHub Pages)

This repo ships `.github/workflows/deploy.yml`. To go live:

1. Push `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` rebuilds and deploys automatically.

## Backup of the previous site

The old hand-written vCard site is preserved on the **`legacy-vcard-backup`** branch
(and tag `legacy-vcard-v1`). To restore it: `git checkout legacy-vcard-backup`.

---

Based on [Lumina](https://github.com/YY-GX/Lumina) (MIT). See `docs/` for full template documentation.
