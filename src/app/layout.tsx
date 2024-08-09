import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type PropType = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<PropType>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HeaderComponent/>
      {children}

      </body>
    </html>
  );
}
