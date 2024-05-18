/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.portfolio.samapps.xyz',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
