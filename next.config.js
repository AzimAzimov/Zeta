/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,

  output: "export",

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
