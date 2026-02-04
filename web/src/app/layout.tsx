import type { Metadata } from "next";
import { Puritan } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "./providers";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { cookies } from "next/dist/server/request/cookies";

const puritan = Puritan({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Konvata",
  description: "Convert Files",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en">
      <body>
        {/* <PostHogProvider> */}
          <ThemeProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <main className={`${puritan.className} flex flex-1 flex-col`}>
                <SidebarTrigger className="absolute z-99" />
                {children}
              </main>
            </SidebarProvider>
          </ThemeProvider>
        {/* </PostHogProvider> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
