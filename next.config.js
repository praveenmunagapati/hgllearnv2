/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || 'https://hubit.com.np',
  generateRobotsTxt: true,
  images: {
    domains: ["hubitnep.herokuapp.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
