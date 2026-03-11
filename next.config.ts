import type { NextConfig } from "next";

const showDevIndicator = process.env.NEXT_SHOW_DEV_INDICATOR === "1";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  devIndicators: showDevIndicator ? { position: "bottom-left" } : false,
  output: "export",
  basePath: isProd ? "/wegrowth" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
