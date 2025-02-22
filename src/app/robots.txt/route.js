import { NextResponse } from "next/server";

export async function GET() {
  const robots = `User-agent: *
Disallow: /api/
Allow: /

Sitemap: ${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml
  `;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
