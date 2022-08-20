/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  images: {
    domains: ["hubitnep.herokuapp.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
