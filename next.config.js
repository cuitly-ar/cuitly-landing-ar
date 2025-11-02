/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Quitamos output: 'export' para permitir API routes
  // Optimización de imágenes
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


