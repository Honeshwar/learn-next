import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DATA from "./UI/utils/constant";
import { AppContextProvider } from "./UI/context/appContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = DATA.hi.Metadata;

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
        <AppContextProvider>{children}</AppContextProvider>

        {/* <script defer src="/swipper.js"></script> */}
        {/* <script defer src="./slider.js"></script> */}
      </body>
    </html>
  );
}
