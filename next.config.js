/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["source.unsplash.com", "cdn.pixabay.com", "images.pexels.com"],
  },
}

module.exports = nextConfig
