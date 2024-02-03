import Layout from "../components/Layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greencal Foundation - Empowering Lives for a Brighter Future",
  description:
    "Empowering lives through education, food outreach, and scholarships. Join Greencal Foundation in creating positive change in Abakaliki, Ebonyi State, Nigeria.",
  keywords:
    "Greencal Foundation, charity, education, outreach, scholarships, Abakaliki, Ebonyi State, Nigeria",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
          <Script
            src="https://kit.fontawesome.com/4ef8c63dd7.js"
            crossOrigin="anonymous"
          />
        </Layout>
      </body>
    </html>
  );
}
