// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AquaPlumb Innovations",
  description:
    "Professional solar installation, plumbing services, borehole drilling, and irrigation design & installation. Expert water and energy solutions in Kenya.",
  keywords:
    "solar installation, plumbing services, borehole drilling, irrigation systems, water solutions, renewable energy, Kenya",
  authors: [{ name: "AquaPlumb Innovations Limited" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
