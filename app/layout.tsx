import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Poppins } from "next/font/google";
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "BENCHMAARK",
  description:
    "Leading supplier of sustainable fashion innovation. Full-service textile manufacturing from concept and design to production and global logistics.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/1.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/1.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/1.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className="font-sans antialiased"> */}
      <body  className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
