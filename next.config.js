/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com','i.pinimg.com','w7.pngwing.com'],
  }
}

module.exports = nextConfig
