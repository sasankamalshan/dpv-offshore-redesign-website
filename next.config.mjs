/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // <--- ADD THIS LINE
  
  // Optional: The workflow handles image optimization automatically, 
  // but if you see image errors, you can force it here:
  images: {
    unoptimized: true,
  }
};

export default nextConfig;