import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";
import FadingLine from "@/components/parts/FadingLine";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "eDuuka",
  description: "The fastest and easiest way to buy and sell online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen">
          <div className="flex flex-col gap-3">
            <Navbar />
            {/* use mt-12 to escape the navbar */}
            <div className="mt-20">
              {children}
            </div>
            <FadingLine />
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}