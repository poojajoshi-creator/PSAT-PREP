# PSAT Prep Portal

A static study portal built for one student's path: **PSAT 10 (spring 2027)
&rarr; PSAT/NMSQT (fall 2027, National Merit qualifying test)**.

No build step, no dependencies — plain HTML/CSS/JS, deployable straight from
GitHub Pages.

## Structure

```
index.html              Home page, with countdowns to both tests
css/style.css            Shared design system (colors, type, components)
js/nav.js                 Injects header/footer nav on every page
js/countdown.js            Countdown logic (always computed in US Eastern time)
english/
  index.html             English section hub (4 domain cards)
  information-and-ideas.html
  craft-and-structure.html
  expression-of-ideas.html
  standard-english-conventions.html
math/
  index.html             Placeholder — math learning pages come next
```

## Deploying to GitHub Pages

1. Create a new GitHub repo and push everything in this folder to it (as the
   repo root, not in a subfolder), e.g.:
   ```
   git init
   git add .
   git commit -m "Initial PSAT prep portal"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In the repo on GitHub: **Settings → Pages → Source → Deploy from a
   branch → main / (root)** → Save.
3. GitHub gives you a URL like `https://<username>.github.io/<repo-name>/`
   within a minute or two.

## Things to update once known

- `js/countdown.js` — both test dates are marked `confirmed: false`. Update
  the exact PSAT 10 date and PSAT/NMSQT date once the school announces them,
  and flip `confirmed` to `true`.

## What's next

- Math learning pages (same concept / watch-for / mistakes format)
- Practice question drills per skill, with scoring
- Progress tracking (likely saved in the browser via `localStorage`)
