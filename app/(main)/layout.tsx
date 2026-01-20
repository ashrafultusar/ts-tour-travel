import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ts tour and travels",
  description: "Main page",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={` antialiased`}>
      <Navbar />
      {children}
    </main>
  );
}
