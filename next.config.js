/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
}
