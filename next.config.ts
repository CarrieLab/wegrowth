import type { NextConfig } from "next";

const showDevIndicator = process.env.NEXT_SHOW_DEV_INDICATOR === "1";

const nextConfig: NextConfig = {
  devIndicators: showDevIndicator ? { position: "bottom-left" } : false,
  output: "export",
  basePath: "/wegrowth",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
