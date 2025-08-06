import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furqan Khan - Portfolio",
  description: "Ancient book-themed portfolio of Furqan Khan - Software Engineer & AI Enthusiast",
  keywords: "Furqan Khan, Software Engineer, AI, Machine Learning, Full Stack Developer, Portfolio",
  authors: [{ name: "Furqan Khan" }],
  openGraph: {
    title: "Furqan Khan - Portfolio",
    description: "Ancient book-themed portfolio of Furqan Khan - Software Engineer & AI Enthusiast",
    type: "website",
  },
};

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
