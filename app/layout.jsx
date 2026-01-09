import "./globals.css";

import Footer from "@/app/components/footer/Footer";
import Header from "./components/header/Header";
import { Oswald, Lato } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "International Steels Limited",
  description:
    "International Steels Limited is the largest flat steel manufacturer and exporter in Pakistan.",
  icons: {
    icon: [
      { url: "/ISL-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/ISL-logo.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/ISL-logo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`}>
      <body className="font-lato">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
