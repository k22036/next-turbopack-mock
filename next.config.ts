import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: process.env.USE_MOCK
    ? {
        resolveAlias: {
          "@/lib/fetcher": "@/lib/fetcher.mock",
        },
      }
    : {},
};

export default nextConfig;
