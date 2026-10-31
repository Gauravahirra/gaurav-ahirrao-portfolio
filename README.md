# Gaurav Ahirrao — Portfolio

A cinematic, streaming-inspired portfolio for Gaurav Ahirrao. The project is configured for GitHub Pages using GitHub Actions.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Publish to GitHub Pages

1. Create a **public** GitHub repository named `gaurav-ahirrao-portfolio` (or choose another name and update `base` in `vite.config.ts` to `/<repository-name>/`).
2. From this extracted project folder, open a terminal and run:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/Gauravahirra/gaurav-ahirrao-portfolio.git
   git push -u origin main
   ```

   Your GitHub username is `Gauravahirra`. If `git remote add origin` says the remote already exists, use `git remote set-url origin https://github.com/Gauravahirra/gaurav-ahirrao-portfolio.git`.
3. On GitHub, open **Repository → Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for both build and deploy to succeed. The site should then be available at `https://gauravahirra.github.io/gaurav-ahirrao-portfolio/`.

Every push to `main` triggers a new deployment automatically.

## Personal details and assets

Portfolio content: `src/data/portfolio.ts`

Portrait: `public/assets/gaurav-ahirrao.webp`

Resume PDF: `public/assets/Gaurav_Ahirrao_Resume.pdf`

Only publish contact information and files you are comfortable making public.
