/** @type {import('next').NextCo
 * nfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || "https://hubit.com.np",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  env:{
  // "NEXT_APP":"https://hubitbackend.onrender.com"
  "NEXT_APP":"https://fullel-backend.adaptable.app"
  },
  images: {
    domains: [
      // "https://storage.googleapis.com/",
      "storage.googleapis.com",
      "images.unsplash.com"
    ],
  },
};

module.exports = nextConfig;
