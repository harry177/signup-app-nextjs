/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.BUILD_TYPE ?? "standalone",
};

export default nextConfig;
