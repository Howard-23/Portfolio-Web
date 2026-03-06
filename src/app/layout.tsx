import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Howard Garcia - Fullstack & Mobile Developer",
  description: "Portfolio of John Howard Garcia, a Fullstack and Mobile Developer based in the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black-clover-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}
