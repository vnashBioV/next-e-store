import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-poppins'
});

export const metadata = {
  title: "Bikes",
  description: "The e-store that provides you with the best bikes in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <CartProvider>
          <Header/>
          {children}
          <Toaster/>
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
