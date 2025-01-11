import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Forcythe - Your Partner in Scalable Business Growth | Digital Solutions Expert",
  description: "Your Partner in Scalable Business Growth | Digital Solutions Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
