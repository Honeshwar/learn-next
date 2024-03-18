import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { hindiMetadata } from "./UI/utils/constant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = hindiMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <head>
        <link rel="canonical" href="https://mahathugbandhan.com/" />

        {/* <link
          rel="preload"
          href="/assets/teaser/teaser_hm.mp4"
          type="video/mp4"
        />

        <link
          rel="preload"
          href="/assets/teaser/teaser_hd.mp4"
          type="video/mp4"
        /> */}
      </head>
      <body className={inter.className}>
        {children}

        {/* <script defer src="/swipper.js"></script> */}
        {/* <script defer src="./slider.js"></script> */}
      </body>
    </html>
  );
}
