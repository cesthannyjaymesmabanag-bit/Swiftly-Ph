import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wigs.com",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "thewildsvenue.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "symptomsweb.com",
        pathname: "/logo.png",
      },
    ],
  },
};

export default nextConfig;
