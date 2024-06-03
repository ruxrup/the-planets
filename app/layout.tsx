import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Background from "./Background";

const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "The Planets | Solar System's planet fact site",
  description:
    "A planet facts site which contains information about all of the planets of solar system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background>
          <NavBar />
          <main>{children}</main>
        </Background>
      </body>
    </html>
  );
}
