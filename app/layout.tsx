import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.css";

export const metadata: Metadata = {
  title: "D.N.A. - Dancing Nurses Association",
  description: "Official page of Central Philippine University - College of Nursing's Dancing Nurses Association.",
  keywords: "Dancing Nurses Association, D.N.A., CPU, Central Philippine University, College of Nursing, Dance Organization",
  authors: [{ name: "Dancing Nurses Association" }],
  openGraph: {
    title: "D.N.A. - Dancing Nurses Association",
    description: "Official page of Central Philippine University - College of Nursing's Dancing Nurses Association.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
}
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}