/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/medlemskab",
        destination: "/abonnement",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
