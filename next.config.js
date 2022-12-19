/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://10.0.1.78:8080/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
