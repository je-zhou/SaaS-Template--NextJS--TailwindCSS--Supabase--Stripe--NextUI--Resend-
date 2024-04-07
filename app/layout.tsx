import { GeistSans } from "geist/font/sans";
import "./globals.css";
import {Providers} from "./providers";

import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <Navbar/>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer/>
          <Toaster />
        </Providers>
      </body>

    </html>
  );
}
