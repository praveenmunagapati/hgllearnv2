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
      "https://www.cnet.com/a/img/resize/4e82f3a17554a5aff8089194237de5a3acfce3b4/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200"
    ],
  },
};

module.exports = nextConfig;
