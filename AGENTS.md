<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Static hosting (GitHub Pages) deploys run `bun run build:pages` — the normal Vite build plus `scripts/prerender.mjs`, which writes the HTML the SSR build does not emit — and the mount point is passed as `PAGES_BASE`; the `/$` catch-all route exists so client-side routing still matches when the site is served from a subdirectory. Why: the app builds for a server, but Pages serves files only, and project sites live under `/<repo>/`.
