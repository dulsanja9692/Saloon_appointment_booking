import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Velora salon - Where Style Meets Elegance",
  description: "Professional Salon services with a modern touch. Book your appointment online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-velora-prmary text-white
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
