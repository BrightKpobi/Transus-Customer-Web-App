import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { FavoritesProvider } from "@/components/shared/car-carousel/FavoritesContext";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <FavoritesProvider>
              {children}
            </FavoritesProvider>
            <Toaster position="top-center" richColors closeButton expand={true} />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
