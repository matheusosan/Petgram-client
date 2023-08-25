/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "icons.veryicon.com",
      },
    ],
  },
};

module.exports = nextConfig;
