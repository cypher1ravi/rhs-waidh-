import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = process.env.SITE_URL || "https://rhswaidhan.com"

  const robots = `User-agent: *
Allow: /
Disallow: /themes/
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
