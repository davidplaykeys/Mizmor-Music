/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deployable to GitHub Pages, Netlify, S3 or Vercel
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
