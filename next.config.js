/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-domain.com', // Replace with your actual domain
        port: '',
        pathname: '/**',
      },
    ],
  },
  i18n: {
    locales: ['vi'],
    defaultLocale: 'vi',
  },
}

module.exports = nextConfig
