# Aniket Deotale — Portfolio

A retro-arcade-inspired, minimal portfolio built with React + Vite + Tailwind CSS + Framer Motion.
The whole site revolves around one glowing power cable running down the center of the page — it
charges as you scroll, and branches off to power each card as it enters the viewport.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Hero.jsx              hero section, transformer, "Press Start"
    HighwayLine.jsx        the central highway median/timeline (desktop only)
    ExitLane.jsx           the curved exit lane + road stud that connects median -> card
    BranchRow.jsx          layout helper: card + its exit lane, alternating sides
    HighwayBackdrop.jsx    aerial highway background video layer, timeline section only
    MilestoneMarker.jsx    small "KM" marker badge between sections
    PixelIcon.jsx          tiny 8x8 bitmap icons used as project thumbnails
    ProjectCard.jsx
    CertificationCard.jsx
    EducationCard.jsx      includes the small animated CGPA bar graph
    ActivityCard.jsx
    SectionTitle.jsx
    Footer.jsx             timeline fades out, closing message
  data/
    content.js             all copy — name, projects, certs, education, activities
  App.jsx
  main.jsx
  index.css                CSS variables (colors), fonts, keyframes
```

## Editing content

Everything text-based (projects, certifications, education, activities, links) lives in
`src/data/content.js` — update that file and the whole site follows.

## Colors & fonts

All colors are CSS variables defined in `src/index.css` (`--wire`, `--cyan`, `--pink`, `--green`,
`--purple`, `--gold`) and mirrored into `tailwind.config.js` so utilities like `text-cyan` or
`border-pink/30` work with alpha. Headings use "Press Start 2P", small labels use "VT323", and
body copy uses Inter — loaded via Google Fonts in `index.html`.

## Highway background video

`HighwayBackdrop.jsx` looks for an aerial highway loop at `public/highway-loop.mp4`. Drop your
video file into the `public/` folder with that exact name and it'll show through at low opacity
behind the timeline (Projects → Extra Curricular only, faded out before the Hero and Footer). If
the file isn't there, or fails to load, it quietly falls back to a plain dark tone — the layout
never breaks. To use a different filename, pass `<HighwayBackdrop src="/your-file.mp4" />` in
`App.jsx`.

## Notes

- The highway median and its exit lanes are hidden below the `md` breakpoint in favor of a
  simpler stacked layout with small road-stud stubs, per the responsive requirement.
- `prefers-reduced-motion` is respected globally (see the bottom of `index.css`).
- Project thumbnails are hand-drawn 8-bit bitmap icons (`PixelIcon.jsx`) rather than photos, to
  keep everything in one consistent pixel-art register — swap in real screenshots any time by
  replacing the `<PixelIcon />` in `ProjectCard.jsx` with an `<img />`.
