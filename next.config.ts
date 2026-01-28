/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fmnl8-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fceb6-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fceb6-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fmnl8-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;