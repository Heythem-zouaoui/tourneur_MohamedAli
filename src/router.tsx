import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    basepath: readBasepath(),
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

// The static build (GitHub Pages project sites) is served from a subdirectory.
// scripts/prerender.mjs writes the mount point into a <meta name="app-base"> tag.
function readBasepath(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const value = document.querySelector('meta[name="app-base"]')?.getAttribute("content");
  if (!value || value === "/") return undefined;
  return value.replace(/\/$/, "");
}
