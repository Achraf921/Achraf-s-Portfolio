import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Achraf's Portfolio",
  description: "Achraf Bayi's Animated Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // 👇 allow client to mutate <html> (class/style) without hydration errors
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}