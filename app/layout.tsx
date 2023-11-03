import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Husky Hire",
  description: "A Co-Op Review Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
