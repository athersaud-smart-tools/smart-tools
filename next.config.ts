import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/ads.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ads.txt",
        destination: "/api/ads",
      },
    ];
  },
};

export default nextConfig;