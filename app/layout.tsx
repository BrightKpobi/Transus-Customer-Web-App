import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { FavoritesProvider } from "@/components/shared/car-carousel/FavoritesContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TransUs Web",
  description: "Web application for TransUs App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
