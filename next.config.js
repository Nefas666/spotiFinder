/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@tremor/react"],
  },
};

module.exports = {
  nextConfig,
  env: {
    SPOTIFY_CLIENT_ID:'80679421247947519530146409c7d888',
    SPOTIFY_CLIENT_SECRET:'4a685ec9cae846c59e1b867c04c2e04c'
  },
};
