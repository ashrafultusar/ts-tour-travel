import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ts Tour and Travels",
  description: "Main page",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>  
    <main className={` antialiased`}>
      <Navbar   />
        {children}
      <Footer/>
    </main></SessionProvider>
  );
}
