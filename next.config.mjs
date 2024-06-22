/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    BaseURL: 'http://127.0.0.1:8000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.sinaimg.cn',
        port: '',
      },
    ],
  },
};

export default nextConfig;
