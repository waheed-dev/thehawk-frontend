/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN || "https://thehawk.in",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_DOMAIN}/server-sitemap-index.xml` ||
        `https://thehawk.in/server-sitemap-index.xml`, // <==== Add here
      
    ],
  },
};