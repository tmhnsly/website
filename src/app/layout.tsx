import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar/NavBar";
import classNames from "classnames";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tom Hinsley",
  description: "Tom Hinsley's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classNames(manrope.variable, inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Theme accentColor="blue" panelBackground="translucent">
            <NavBar />
            {children}
            <Footer />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
