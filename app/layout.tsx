import "tailwindcss/tailwind.css";

import { Inter, Lora } from "next/font/google";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const heading = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  );
}
