/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || "https://hubit.com.np",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  images: {
    domains: [
      "hubitnep.herokuapp.com",
      "firebasestorage.googleapis.com",
      "www.derby-college.ac.uk",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
