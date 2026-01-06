import Header from "@/app/components/header/Header";
import "./globals.css";
import Footer from "@/app/components/footer/Footer";

export const metadata = {
  title: "International Steels Limited",
  description: "International Steels Limited is the largest flat steel manufacturer and exporter in Pakistan. Company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
       <Header />
         <main className="min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
