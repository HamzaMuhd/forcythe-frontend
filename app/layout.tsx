import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from 'next/font/google';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Forcythe - Your Partner in Scalable Business Growth | Digital Solutions Expert",
  description: "Your Partner in Scalable Business Growth | Digital Solutions Expert",
  
};

const lexend = Lexend({
  subsets: ['latin'], 
  display: 'swap',    
  variable: '--font-lexend', 
});
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={lexend.variable}>
      <body className="bg-primaryBackground ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
