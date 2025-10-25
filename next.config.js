/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Optimización de imágenes
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


