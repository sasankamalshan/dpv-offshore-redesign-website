/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // IMPORTANT: Replace 'dpv-offshore' with your exact GitHub repository name.
  // If your repo URL is github.com/user/my-site, then this should be '/my-site'
  basePath: '/dpv-offshore-redesign-website', 

  images: {
    unoptimized: true,
  }
};

export default nextConfig;