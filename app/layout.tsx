import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], variable: "--font-cormorant", weight: ["400", "500", "600"] });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "ÉLITE Beauty Studio | Piękno w najlepszym wydaniu",
  description: "Kameralne studio beauty w Warszawie. Autorskie rytuały pielęgnacyjne, stylizacja i relaks w luksusowej oprawie.",
  keywords: ["salon beauty", "kosmetologia", "Warszawa", "pielęgnacja twarzy", "manicure"],
  openGraph: { title: "ÉLITE Beauty Studio", description: "Twoje piękno. Nasza sztuka.", type: "website", locale: "pl_PL" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body className={`${cormorant.variable} ${manrope.variable}`}>{children}</body></html>;
}
