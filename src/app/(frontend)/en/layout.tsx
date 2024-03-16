import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { englishMetadata } from "../UI/utils/constant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = englishMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mahathugbandhan.com/" />
        <link
          rel="icon"
          href="https://mahathugbandhan.com/img/english_logo.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
