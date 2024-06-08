/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    baseURL: 'http://127.0.0.1:8000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p3-sign.toutiaoimg.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
