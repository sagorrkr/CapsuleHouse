import type { NextConfig } from 'next';
import path from 'path';

const securityHeaders = [
  // Prevents the site from being embedded in iframes on other domains (clickjacking)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Stops browsers from guessing file types — prevents MIME-sniffing attacks
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Controls how much referrer info is sent — hides full URL from third parties
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disables browser features the site doesn't use
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Legacy XSS protection for older browsers
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Prevents DNS prefetch leaking visited sub-resources to third parties
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
