import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AzulKitchen | Nutrition personnalisée, cabinet & visio",
  description: "Retrouvez votre énergie sans frustration grâce à un accompagnement nutritionnel personnalisé, scientifique et adapté à votre quotidien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${sourceSans.variable} ${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
