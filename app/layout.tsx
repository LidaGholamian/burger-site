import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

const vazirmatn = localFont({
  src: [
    {
      path: "./fonts/vazirmatn/Vazirmatn-FD-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn/Vazirmatn-FD-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn/Vazirmatn-FD-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn/Vazirmatn-FD-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn/Vazirmatn-FD-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn/Vazirmatn-FD-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`${vazirmatn.variable} ${figtree.variable}`}>
      <body
        className={`min-h-screen grid grid-rows-[80px_1fr_auto] container ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
