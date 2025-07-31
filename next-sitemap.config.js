/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://rhswaidhan.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/themes"],
  additionalPaths: async (config) => [
    await config.transform(config, "/home"),
    await config.transform(config, "/about"),
    await config.transform(config, "/academics"),
    await config.transform(config, "/portal"),
    await config.transform(config, "/admissions"),
    await config.transform(config, "/contact"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
}
