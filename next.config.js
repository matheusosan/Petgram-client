/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "icons.veryicon.com",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
