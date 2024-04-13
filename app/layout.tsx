import "tailwindcss/tailwind.css";
import '@/styles/index.css'

import {Poppins, Great_Vibes } from "next/font/google";
import Navbar from "./components/Navbar";
import { Suspense } from "react";

const sans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const heading = Great_Vibes({
  variable: "--great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${heading.variable}`}>
      <body>
        <Suspense>
          <Navbar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
