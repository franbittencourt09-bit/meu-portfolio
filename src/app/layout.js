import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas"
});

export const metadata = {
  title: "Francisco Bittencourt | Portfolio",
  description: "Desenvolvedor Front-end & Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${bebas.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}