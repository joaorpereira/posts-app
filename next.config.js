/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = withBundleAnalyzer({});
