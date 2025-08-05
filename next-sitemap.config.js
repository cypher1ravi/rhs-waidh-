/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://rhswaidhan.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/themes"],
  additionalPaths: async (config) => [
    await config.transform(config, "/", {
      changefreq: "daily",
      priority: 1.0,
    }),
    await config.transform(config, "/home", {
      changefreq: "weekly",
      priority: 0.9,
    }),
    await config.transform(config, "/about", {
      changefreq: "monthly",
      priority: 0.8,
    }),
    await config.transform(config, "/academics", {
      changefreq: "monthly",
      priority: 0.8,
    }),
    await config.transform(config, "/portal", {
      changefreq: "weekly",
      priority: 0.7,
    }),
    await config.transform(config, "/admissions", {
      changefreq: "monthly",
      priority: 0.9,
    }),
    await config.transform(config, "/contact", {
      changefreq: "monthly",
      priority: 0.8,
    }),
    await config.transform(config, "/gallery", {
      changefreq: "monthly",
      priority: 0.6,
    }),
    await config.transform(config, "/faculty", {
      changefreq: "monthly",
      priority: 0.6,
    }),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/themes", "/api"],
      },
    ],
    additionalSitemaps: ["https://rhswaidhan.com/sitemap.xml"],
  },
}
