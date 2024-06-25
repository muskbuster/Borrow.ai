import type { Metadata } from "next";
import { ThirdwebProvider } from "thirdweb/react";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borrow.Ai",
  description: "A web3 Payment Generate app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThirdwebProvider>
          {" "}
          <NextUIProvider>{children} </NextUIProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
