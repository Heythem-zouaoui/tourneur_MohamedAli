import { createFileRoute } from "@tanstack/react-router";

import { Index } from "./index";

// Catch-all route. A static build can be opened from a subdirectory (a GitHub
// Pages project site lives under /<repo>/), so any path must still render the
// site. The exact "/" route always wins over this one.
export const Route = createFileRoute("/$")({
  component: Index,
});
