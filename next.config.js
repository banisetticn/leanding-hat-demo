/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dev81.developer24x7.com',
        port: '',
        pathname: '/cnp1845/**',
      },
    ],
  },
};

module.exports = nextConfig;
