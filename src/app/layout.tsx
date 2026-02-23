import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Classification — Aieutics",
  description:
    "Your AI initiative was approved as one thing but may actually require another. This diagnostic surfaces the gap between what your organisation set up and what the initiative needs to succeed.",
  openGraph: {
    title: "AI Classification — Aieutics",
    description:
      "Surface the gap between what your organisation approved and what your AI initiative actually requires. A misclassification diagnostic for enterprise AI.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Almarai:wght@300;400;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
