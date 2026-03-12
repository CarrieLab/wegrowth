import type { NextConfig } from "next";

const showDevIndicator = process.env.NEXT_SHOW_DEV_INDICATOR === "1";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const nextConfig: NextConfig = {
  devIndicators: showDevIndicator ? { position: "bottom-left" } : false,
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
