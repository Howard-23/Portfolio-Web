/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Prevent dev/build cache collisions (e.g. missing chunk files like ./819.js).
  distDir: process.env.NODE_ENV === "production" ? ".next-prod" : ".next",
};

module.exports = nextConfig;
