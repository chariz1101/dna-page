/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
        hostname: 'scontent.fceb6-4.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '*.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;