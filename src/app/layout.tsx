// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import SideNav from "@/components/SideNav";
import SideLinks from "@/components/SideLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiyu Park | Portfolio",
  description:
    "Senior Software Engineer specializing in building exceptional digital experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-slate`}>
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen gap-8 lg:gap-12">
            {/* Left side - sticky */}
            <div className="lg:col-span-5 xl:col-span-4 lg:h-screen lg:sticky lg:top-0 flex flex-col lg:justify-between lg:py-16">
              <SideNav />
              <div className="hidden lg:block">
                <SideLinks />
              </div>
            </div>

            {/* Right side - scrollable content */}
            <main className="lg:col-span-7 xl:col-span-8 py-24 lg:py-16 flex justify-center">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
