// next.config.mjs
import path from "path";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Force a single copy of three everywhere
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      three: path.resolve(process.cwd(), "node_modules/three"),
    };
    return config;
  },
};

// Enable Sentry only when properly configured
const SENTRY_ENABLED =
  !!process.env.SENTRY_AUTH_TOKEN &&
  !!process.env.SENTRY_ORG &&
  !!process.env.SENTRY_PROJECT;

const sentryWebpackPluginOptions = {
  // Use env so local + Vercel match
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  // Only print upload logs in CI
  silent: !process.env.CI,
};

const sentryNextJsOptions = {
  // Keep these if you want nicer stack traces & smaller bundles
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  // Optional: route requests through your app to avoid ad blockers
  // tunnelRoute: "/monitoring",
};

export default SENTRY_ENABLED
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions, sentryNextJsOptions)
  : nextConfig;