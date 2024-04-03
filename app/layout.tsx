import { GeistSans } from "geist/font/sans";
import "./globals.css";
import {Providers} from "./providers";

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
    <html lang="en" className={GeistSans.className + " dark"}>
      <body className="bg-background text-foreground flex items-center justify-center w-full">
        <main className="min-h-screen flex flex-col items-center max-w-screen-2xl w-full">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}