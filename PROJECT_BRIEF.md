# Julia Lizak — Personal Portfolio Website
## Project Brief & Build Instructions

---

## 1. Goal
Build a polished, hand-coded personal portfolio site that:
- Shows up as the top search result for "Julia Lizak"
- Showcases who I am, interests, career goals/aspirations, and projects
- Has a dedicated Golf page (career/involvement in golf)
- Reads as professional and design-forward — impressive to recruiters, coaches, and peers
- Is fully coded by me (with Claude Code assistance), not built in a no-code tool
- Lives at a custom domain (target: juliazizak.com or similar — TBD based on availability)

**Design reference:** sarahmcarthurdesign.com — minimal/editorial style: generous white space,
one consistent image-crop ratio, restrained type-driven hierarchy, smooth scroll/hover motion,
simple nav (Home / Work / About / Contact), project grid linking to case-study pages.

---

## 2. Tech Stack
- **Hand-coded HTML/CSS/JS** as the foundation (upgrade path: light framework like Astro if the
  site grows past a handful of pages and static-site tooling becomes worth it)
- **Git + GitHub** — public repo, real commit history
- **Hosting:** Netlify or Vercel (free tier, auto-deploys from GitHub) or GitHub Pages
- **Domain:** custom domain purchased separately (Namecheap, Google Domains successor, etc.) and
  pointed at the host
- **Built with Claude Code** in a local project folder (NOT inside Google Drive — this project
  is going in a folder directly on the Desktop)

---

## 3. Sitemap
- **Home** — headline/intro, personality + photo, snapshot of what I do, links into Work/Golf/About
- **About** — bio, interests, career goals & aspirations, career development story
- **Work / Projects** — grid of project cards → individual case-study pages
- **Golf** — dedicated page: golf background, achievements, career-relevant golf experience
  (adjust structure once content is gathered — could be part of About/Work nav or its own top-level tab)
- **Contact** — simple contact form or direct contact info (email/LinkedIn)
- *(Optional)* Resume page or downloadable PDF resume link

---

## 4. Content to Prep Before/During Build
- [ ] Professional headshot + a few personality/lifestyle photos
- [ ] Short bio (2–3 versions: 1-liner for hero, short paragraph for About, longer version if needed)
- [ ] List of projects with: title, 1-line description, role, images/screenshots, outcome, link (if any)
- [ ] Golf content: achievements, stats, photos, relevant experience/career angle
- [ ] Career goals/aspirations written out in your own words (this becomes About page copy)
- [ ] Resume (PDF)
- [ ] Contact preferences (form vs. direct email vs. LinkedIn link)
- [ ] Color/font preferences or reference sites/moodboard images (beyond Sarah's site)
- [ ] Desired domain name options (2–3 backups in case first choice is taken)

---

## 5. Design Direction
- Minimal/editorial aesthetic — modeled after sarahmcarthurdesign.com's restraint and grid discipline
- Consistent image aspect ratios across project cards
- Type-led hierarchy (strong headline type, quiet body type)
- Subtle scroll/hover motion — nothing gimmicky
- Palette: TBD — likely a neutral base with one accent color (open to a subtle golf-course-green
  accent given the Golf page, without making the whole site golf-themed)

---

## 6. Environment Setup (Claude Code on Desktop)
1. Install Claude Code (desktop app) if not already installed
2. Create a project folder directly on the Desktop, e.g. `~/Desktop/julia-portfolio`
   (explicitly outside any Google Drive–synced folder)
3. `cd` into that folder, run `git init`
4. Open the folder in Claude Code and paste this brief in as the starting context
5. Build iteratively: scaffold → Home page → About → Work/Projects → Golf → Contact → polish/motion
6. Commit as you go with real commit messages
7. Once ready: push to GitHub → connect to Netlify/Vercel → connect custom domain

---

## 7. Open Decisions (fill in as we go)
- Final domain name:
- Hosting choice:
- Golf page: top-level nav item or folded into About/Work?
- Contact method: form vs. mailto vs. LinkedIn only
