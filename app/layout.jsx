import "./globals.css";

import Footer from "@/app/components/footer/Footer";
import { Poppins } from 'next/font/google';
import Header from "./components/header/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // jo weights chahiye
  display: 'swap',
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
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
