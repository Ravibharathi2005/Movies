FIXES APPLIED (frontend-only)
----------------------------
Files modified/added:
[
  "Moviewatchlist/movie-watchlist-darklight/postcss.config.js"
]

Removed:
- node_modules folders to force fresh install.

Next steps (run on your machine):
1) Extract this ZIP and cd into the project directory (where package.json is).
2) Remove any existing node_modules & lockfile:
   rm -rf node_modules package-lock.json
3) Clean npm cache (optional):
   npm cache clean --force
4) Install:
   npm install
   If tailwind errors persist, change tailwindcss dependency to "latest" in package.json.
5) Start dev server:
   npm run dev

If you receive errors after running these steps, copy-paste the terminal output here and I'll fix them.

