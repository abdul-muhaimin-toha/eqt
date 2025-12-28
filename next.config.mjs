/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.eqtbd.com',
      },
    ],
  },
};

export default nextConfig;
