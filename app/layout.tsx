import type { Metadata } from "next";
import { Geist, Geist_Mono, Puritan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const puritan = Puritan({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Konvata | FREE File converter",
  description:
    "Convert Files for free, in your browser. Your files never leave your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main className={`${puritan.className} flex flex-1 flex-col`}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
