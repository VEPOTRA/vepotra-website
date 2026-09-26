import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vepotra — Engineering scalable systems",
  description:
    "Vepotra builds software systems, platforms, and developer tools for modern startups.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}