import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.lawctopus.com",
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
