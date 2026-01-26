import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import WhatsAppFloating from "@/components/shared/whatsAppFloating.tsx/WhatsAppFloating";


export const metadata: Metadata = {
  title: "Ts Tour and Travels",
  description: "Main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <main className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloating/>
      </main>
    </SessionProvider>
  );
}
