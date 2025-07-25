import type { Metadata } from "next";
import { Poppins, Francois_One } from "next/font/google";
import "./globals.css";

// Primary font: Poppins
const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights as needed
  display: "swap",
});

// Secondary font: Francois One
const francoisOne = Francois_One({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: "400", // Francois One only has 400 weight
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${francoisOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
