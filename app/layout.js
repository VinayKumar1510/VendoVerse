import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from '@/components/CartContext';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VendorVerse - Discover a thriving community of local vendors",
  description: "Discover a thriving community of local vendors offering handpicked, unique products. Shop with confidence, support small businesses, and find treasures you won't get anywhere else.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <CartProvider>
          {children}

          <Toaster
            position="top-right"
            containerStyle={{
              top: '80px', // Push down below navbar
            }}
            toastOptions={{
              success: {
                duration: 3000,
                style: {
                  background: '#22c55e', // Tailwind green-500
                  color: '#fff',
                  fontWeight: 'bold',
                  borderRadius: '9999px', // fully rounded
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                },
                icon: (
                  <div
                    style={{
                      backgroundColor: '#16a34a',
                      color: 'white',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    ✓
                  </div>
                ),
              },
            }}
          />


        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
