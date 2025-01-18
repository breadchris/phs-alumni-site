/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/phs-alumni-site",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { unoptimized: true }
};

module.exports = nextConfig;
