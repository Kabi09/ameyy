const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/terms-and-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/cancellation-refund-policy',
        destination: '/refund-policy',
        permanent: true,
      },
      {
        source: '/cancellation-policy',
        destination: '/refund-policy',
        permanent: true,
      },
      {
        source: '/services/e-commerce-development',
        destination: '/services/ecommerce-development',
        permanent: true,
      },
      {
        source: '/services/maintenance-support',
        destination: '/services/maintenance-and-support',
        permanent: true,
      },
      {
        source: '/services/ui-ux-design',
        destination: '/services/ui-ux-development',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
