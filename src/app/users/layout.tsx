import MainLayout from "@/components/MainLayout";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users Section",
  description: "User Section",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout thirdColumn={true}>{children}</MainLayout>;
}

