/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.xml/,
      use: ["@xml2js"],
    });

    return config;
  },
};

module.exports = nextConfig;