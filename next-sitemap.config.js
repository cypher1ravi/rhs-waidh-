// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rhswaidhan.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtTransformer: async (robotsTxt) => {
    // Remove Host line manually if present
    return robotsTxt
      .split('\n')
      .filter(line => !line.toLowerCase().startsWith('host:'))
      .join('\n');
  },
};
