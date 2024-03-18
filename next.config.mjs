/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://mp-pledge.s3.ap-south-1.amazonaws.com/mtb/4601.jpg
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mp-pledge.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/mtb/**",
      },
    ],
  },
};

export default nextConfig;
