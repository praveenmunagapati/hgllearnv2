/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["hubitnep.herokuapp.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
