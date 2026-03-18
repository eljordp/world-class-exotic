import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exotic-car-sparkle.lovable.app",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
