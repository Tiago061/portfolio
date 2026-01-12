import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-08f4197c0606490b93ebe64b7203e96f.r2.dev",
      },
    ],
  },
};

export default nextConfig;
