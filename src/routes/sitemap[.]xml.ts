import { createFileRoute } from "@tanstack/react-router";
import { tools } from "@/lib/data";
const BASE_URL = "https://www.smbsecurityreview.com";
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/reviews", priority: "0.9" },
          { path: "/compare", priority: "0.9" },
          { path: "/resources", priority: "0.7" },
          { path: "/about", priority: "0.5" },
          ...tools.map((t) => ({ path: `/reviews/${t.slug}`, priority: "0.8" })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
