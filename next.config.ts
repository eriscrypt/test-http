// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/twitter/:path*",
        destination:
          "http://ec2-98-83-26-176.compute-1.amazonaws.com:8010/v1/twitter/:path*",
      },
    ];
  },
};

export default nextConfig;
