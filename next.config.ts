/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 빌드 시 타입 에러가 있어도 무시하고 강제로 배포를 완료시킵니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // 문법 경고나 에러가 있어도 무시하고 강제로 배포를 완료시킵니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;