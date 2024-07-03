import MainLayout from "@/components/MainLayout";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIMO Admin Panel",
  description: "MIMO Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout thirdColumn={true}>{children}</MainLayout>;
}
