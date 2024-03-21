// import withBundleAnalyzer from "next-bundle-analyzer";

// const WBA = require("next-bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const WBA = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

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
  // plugins: [new BundleAnalyzerPlugin()],
};

// module.exports = WBA(nextConfig);
module.exports = nextConfig;
