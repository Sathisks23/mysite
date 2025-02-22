import { Connect } from "@/lib/Connection";
import Blog from "@/models/Blog";

export async function GET() {
  await Connect();
  const blogs = await Blog.find().select("slug");

  const urls = [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}`, priority: 1.0 },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`, priority: 0.8 },
    ...blogs.map((blog) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
      priority: 0.7,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          ({ url, priority }) => `
          <url>
            <loc>${url}</loc>
            <priority>${priority}</priority>
          </url>`
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
