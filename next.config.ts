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
  // Optimize fonts loading
  optimizeFonts: true,
};

export default nextConfig;
