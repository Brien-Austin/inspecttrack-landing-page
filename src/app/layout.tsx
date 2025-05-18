import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers/posthog";

export const metadata: Metadata = {
  title: "Inspect Track",
  description: "A Field visiting App for Indian Government Officials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="preload"
        href="/fonts/Satoshi-Black.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <body className={` `}>
        <div className="lg:px-24 sm:px-5">{children}</div>
      </body>
    </html>
  );
}
