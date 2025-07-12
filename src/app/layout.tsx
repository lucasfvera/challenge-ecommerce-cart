import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/Molecules/NavigationBar/NavigationBar";
import { Footer } from "@/components/Molecules/Footer/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} flex flex-col h-screen`}>
        <NavigationBar />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
