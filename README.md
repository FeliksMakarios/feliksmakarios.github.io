# feliksmakarios.github.io

Personal academic site of **Feliks Victor Parningotan Samosir**, Full-time Lecturer of Informatics, Faculty of AI and Data Science, Universitas Pelita Harapan.

Live at <https://feliksmakarios.github.io>. Built with Jekyll and served by GitHub Pages; bilingual (English / Bahasa Indonesia); content editable through Decap CMS at `/admin/`.

## Stack

- **Jekyll** via the `github-pages` gem. GitHub Pages builds on every push to `main`; there is no CI or custom build step.
- **Custom layout**, no external theme. System fonts on the main pages, light/dark theme toggle, responsive down to ~360px with a collapsible menu on phones.
- **Decap CMS** (`admin/`) for editing news, publications, students, demos, community service, teaching and blog posts from the browser.
- **Plugins:** `jekyll-sitemap` only.

## Structure

```
.
├── _config.yml            # site metadata, author links (email, ORCID, Scholar, CV...), collections
├── _layouts/
│   ├── default.html       # all regular pages
│   ├── research-area.html # the four research-area detail pages
│   └── blog-post.html     # Markdown blog posts written in the CMS
├── _includes/
│   ├── head.html          # <head> for regular pages (wraps head-meta.html + main.css)
│   ├── head-meta.html     # shared meta: description, Open Graph, hreflang, favicons, theme init
│   ├── person-jsonld.html # schema.org Person data on the home pages
│   ├── pubs-jsonld.html   # schema.org ScholarlyArticle data on the publications pages
│   ├── pub-extras.html    # BibTeX / PDF / Open Access row under each publication
│   ├── hero-links.html    # contact links on the home pages (read from _config.yml)
│   ├── nav.html           # header, menu, theme toggle, EN/ID switch
│   └── footer.html
├── _sass/
│   ├── _tokens.scss       # colour, font and spacing variables (light + dark)
│   └── _chrome.scss       # header, navigation, mobile menu, footer
├── assets/css/
│   ├── main.scss          # styles for regular pages
│   └── article.scss       # site chrome + dark theme for the hand-built blog articles
├── _news/  _publications/  _students/  _demos/  _community_service/   # collections (one file per item)
├── _data/
│   ├── research.yml       # research areas, sub-areas, projects, open thesis topics
│   └── teaching.yml       # courses and supervision text
├── _posts/                # every blog article (see "Blog" below)
├── blog/<slug>/img/       # images and videos used by the blog articles
├── en/  id/               # page sources, one per language
├── demos/                 # static demo apps (Teachable Machine, NLP visualisations)
└── admin/                 # Decap CMS (config.yml) and an optional OAuth worker
```

## Editing content

The easiest route is the CMS at <https://feliksmakarios.github.io/admin/>. Every change it saves is a commit on `main`.

You can also edit the files directly:

| What | Where |
| --- | --- |
| Name, title, email, social links, CV path | `_config.yml` → `author` |
| About text, home page | `en/index.md`, `id/index.md` |
| News | `_news/*.md` (`date_str`, bilingual `title` and `body`) |
| Publications | `_publications/*.md` (see fields below) |
| Students | `_students/*.md` (`status: current` or `alumni`) |
| Research areas and open thesis topics | `_data/research.yml` |
| Courses | `_data/teaching.yml` |
| Demos | `_demos/*.md` |

### Publication fields

```yaml
slug: absa-ecom-2026          # also the BibTeX key
title: ...
authors: [F.V.P. Samosir, G.L. Tumanggor]
venue: Journal of Soft Computing Exploration, Vol. 7 No. 1, pp. 147-156
venue_type: journal           # journal | conference | seminar
year: 2026
link: https://doi.org/...     # DOI or publisher page (a doi.org link also fills the BibTeX doi field)
pdf: /assets/papers/...pdf    # optional: author copy
open_access: true             # optional: shows an "Open Access" badge
area: domain-specific-nlp
sub_area: ecommerce-reviews
```

Use `link`, not `url`. Jekyll reserves `url` on collection items, so a `url` field is silently replaced by an internal path. For the same reason, demos use `demo_url`.

## Blog

All articles live in `_posts/` and appear on `/en/blog/` and `/id/blog/`, newest first. There are two kinds:

1. **Markdown posts** written in the CMS (`layout: blog-post`). They support LaTeX through MathJax, code blocks and embedded video.
2. **Hand-built HTML articles** (`_posts/*.html`, `layout: null`). Each one is a full HTML document with its own typography. It pulls in the shared `<head>` (`head-meta.html`), the site header and footer, and `assets/css/article.css` for the dark theme. The article body is wrapped in `{% raw %}` so that LaTeX such as `{{NLP}}` is not treated as Liquid. Their images stay in `blog/<slug>/img/`.

Useful front matter for both: `title`, `description`, `image` (social preview), `type` (`original` or `translation`), `original_title` / `original_author` / `original_url` / `original_date` for translations, `inspirations` for original work, `summary_id`, and `tags`. Posts are published at `/blog/<slug>/`.

## Bilingual pages

There is no i18n plugin. Each page exists twice, in `en/` and `id/`, with the same `slug:` in its front matter. The EN/ID switch uses `slug` to jump between the two, and `head-meta.html` uses it for the `hreflang` tags. When you add a page, add it in both folders. Blog articles are only in Indonesian; they set `switch_slug: blog`, so the switch opens the blog index instead.

## Local preview

You need Ruby 3.x and Bundler.

```bash
bundle install
LANG=C.UTF-8 bundle exec jekyll serve
```

Open <http://localhost:4000>. Without a UTF-8 locale, Sass may fail with `Invalid US-ASCII character`.

## CMS login

`admin/config.yml` signs in through the OAuth provider at `base_url` (a Vercel deployment) and asks for the `public_repo` scope, which is enough for a public repository. `admin/worker.js` is an alternative provider for Cloudflare Workers; see `admin/SETUP-OAUTH.md`. That file is excluded from the published site.

## Design tokens

Colours, fonts and widths are CSS variables in `_sass/_tokens.scss`, with a dark-theme set underneath. To rebrand, change `--color-accent`, `--font-serif` or `--measure`; everything else follows.
