import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crm.zoho.com",
      },
    ],
  },
};

export default nextConfig;
