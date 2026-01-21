import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ts Tour and Travels",
  description: "Main page",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={` antialiased`}>
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
}
