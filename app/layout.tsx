import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from 'next/font/google';
import Header from "../components/Header";
import Footer from "@/components/Footer";


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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
