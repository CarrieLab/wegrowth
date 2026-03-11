import type { NextConfig } from "next";

const showDevIndicator = process.env.NEXT_SHOW_DEV_INDICATOR === "1";

const nextConfig: NextConfig = {
  devIndicators: showDevIndicator ? { position: "bottom-left" } : false,
};

export default nextConfig;
