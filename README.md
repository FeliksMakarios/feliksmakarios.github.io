# feliksmakarios.github.io

Personal academic site for **Feliks Victor Parningotan Samosir** — Department Chair of Informatics, Faculty of AI and Data Science, Universitas Pelita Harapan.

Built with Jekyll, hosted on GitHub Pages, bilingual (EN / ID).

---

## Stack

- **Jekyll** (via `github-pages` gem — no custom build needed)
- **Custom layout** (no external theme; ~15 files total)
- **System fonts** (no external font requests; fast load)
- **Auto dark mode** via `prefers-color-scheme`
- **Responsive** down to ~360px

No JavaScript framework. No build step beyond what GitHub Pages runs automatically on push.

## Structure

```
.
├── _config.yml              # site metadata, languages, author info
├── Gemfile                  # github-pages gem
├── .gitignore
├── index.html               # root → redirects to /en/ or /id/ based on browser
├── _layouts/
│   └── default.html         # single layout used by all pages
├── _includes/
│   ├── head.html            # <head> + meta + hreflang
│   ├── nav.html             # nav bar + EN/ID switcher
│   └── footer.html
├── assets/
│   ├── css/
│   │   └── main.scss        # all styles (compiled to main.css by Jekyll)
│   └── img/
│       └── feliks.jpg       # profile photo (add this yourself)
├── en/                      # English pages
│   ├── index.md             # Home + About
│   ├── research.md          # Research areas, projects, open thesis topics
│   ├── teaching.md          # Courses
│   └── demos.md             # Outreach demos
├── id/                      # Indonesian mirror
│   ├── index.md
│   ├── research.md
│   ├── teaching.md
│   └── demos.md
└── demos/                   # static web apps (Teachable Machine exports)
    ├── superheroes/
    └── hairtype/
```

## Setup (one-time)

### 1. Backup the existing repo

Before nuking the current `main`, archive it:

```bash
cd feliksmakarios.github.io
git checkout -b legacy
git push origin legacy
git checkout main
```

You can always view the old site by checking out the `legacy` branch.

### 2. Preserve the existing demo apps

```bash
mv superheroes /tmp/superheroes-backup
mv hairtype   /tmp/hairtype-backup
```

### 3. Wipe the current `main` and drop in this scaffold

```bash
git rm -rf .
# copy this scaffold's files into the repo root
mkdir -p demos
mv /tmp/superheroes-backup demos/superheroes
mv /tmp/hairtype-backup    demos/hairtype
```

### 4. Add your profile photo

Drop a square photo (~400×400px is fine) at:

```
assets/img/feliks.jpg
```

If you skip this, the photo `<img>` is set to hide on error — the page will still render cleanly without it.

### 5. Local preview (recommended before pushing)

You need Ruby (3.0+) and Bundler installed.

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` — the root will redirect to `/en/` (or `/id/` if your browser is set to Indonesian).

### 6. Push to GitHub

```bash
git add .
git commit -m "Rebuild site: bilingual academic template"
git push origin main
```

GitHub Pages will rebuild automatically. Live in ~1–2 minutes at `https://feliksmakarios.github.io`.

## Editing content

### Update text content

All page text lives in `en/*.md` and `id/*.md`. Plain Markdown — edit and push.

### Update site-wide info

Edit `_config.yml`. Things to fill in / verify:

- `author.orcid` — currently empty
- `author.scholar` — verify the URL
- Any other social profiles you want added (just append to the YAML and update `_includes/footer.html` to render them)

### Add a new open thesis topic

In `en/research.md` and `id/research.md`, find the **Open thesis topics** section. Each topic is one `<div class="card">…</div>`. Copy an existing card, edit, done. Three statuses to use as the `<span class="tag">`:

- `Open` / `Terbuka`
- `In discussion` / `Dalam diskusi`
- `Taken` / `Diambil`

### Add a new section (e.g., Publications, Students)

1. Create `en/publications.md` and `id/publications.md` with the same front-matter pattern as existing pages (set `permalink`, `lang`, `slug`, `title`).
2. Add a nav link in `_includes/nav.html` (the EN/ID label block at the top, plus a new `<a>` in `<nav class="site-nav">`).

That's it. No theme override or plugin to wrestle with.

## Bilingual: how it works

There's no i18n plugin. Each page exists twice — once in `en/`, once in `id/` — with matching `slug:` front-matter. The language switcher in the navbar uses `page.slug` to jump between the two. When you add a new page, **add it in both `en/` and `id/`** so the switcher works.

This is intentional: zero plugins, fully transparent, easy for any future maintainer (or template-fork by other UPH faculty) to understand.

## Design tokens

All colors, fonts, spacing live as CSS variables at the top of `assets/css/main.scss`. To rebrand for the prodi-wide template later:

- Change `--color-accent` (currently `#0f4c75` deep blue)
- Change `--font-serif` if you want a different heading typeface
- Change `--measure` (reading column width)

Everything else cascades.

## License & reuse

If you want to release this as a template for the UPH Informatics prodi site or for other faculty, consider adding an MIT or CC-BY license file. The structure is small enough to fork cleanly — content sits in `_config.yml` + `*.md`, layout in `_includes/` + `_layouts/`.

## Roadmap

Phase 1 (this scaffold): Home + About, Research, Teaching, Demos.

Phase 2 (next):
- **Publications** page generated from a `_data/publications.yml` (or BibTeX with a small Liquid loop)
- **News / blog** section with `_posts/`
- **Students/Mentees** page with current and alumni thesis advisees
- **CV PDF** linked from header

Phase 3 (eventual prodi site):
- Extract `_layouts/`, `_includes/`, `assets/css/` as a shared template repo
- Each faculty member's content lives in their own repo, builds against the shared template
