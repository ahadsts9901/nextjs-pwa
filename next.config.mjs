import withPWA from 'next-pwa';

const nextConfig = {};

const withPWAConfig = withPWA({
    dest: 'public'
})(nextConfig);

export default withPWAConfig;