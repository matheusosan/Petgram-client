/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["matheus-nodebucket.s3.us-east-2.amazonaws.com"],
    remotePatterns: [
      {
        hostname: "icons.veryicon.com",
        hostname: "source.unsplash.com",
        hostname: "matheus-nodebucket.s3.us-east-2.amazonaws.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-auth-token, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
