import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google"; // Corrected font name to Fredoka
import "./globals.css";

// Configure Inter for body text
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

// Configure Fredoka for headings
const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: "400", // Fredoka has various weights, using 400 for consistency
  variable: '--font-fredoka' 
});

export const metadata: Metadata = {
  title: "MEG PET Store - Petshop e Banho e Tosa na Vila das Mercês",
  description: "MEG PET Store: Tudo para seu pet na Vila das Mercês! Rações, acessórios, farmácia veterinária, banho e tosa com amor e segurança. Oferecemos leva e trás e entrega.",
  keywords: "petshop, banho e tosa, MEG PET Store, Vila das Mercês, São Paulo, ração, acessórios pet, farmácia veterinária, vacinas pet, leva e trás, entrega de ração, pet shop zona sul sp",
  authors: [{ name: "MEG PET Store" }],
  openGraph: {
    title: "MEG PET Store - Petshop e Banho e Tosa na Vila das Mercês",
    description: "Cuidamos do seu pet com o mesmo amor que cuidamos da nossa Meg! Rações, acessórios, banho e tosa, farmácia e mais.",
    url: "https://megpetstore.com.br", // Placeholder URL, update if domain is registered
    siteName: "MEG PET Store",
    images: [
      {
        url: "/images/logo-meg-pet-store.jpeg", // Path to logo in public folder
        width: 200,
        height: 200,
        alt: "Logo MEG PET Store",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MEG PET Store - Petshop e Banho e Tosa na Vila das Mercês",
    description: "Tudo para seu pet na Vila das Mercês! Rações, acessórios, farmácia veterinária, banho e tosa com amor.",
    // Add twitter handle if available
    images: ["/images/logo-meg-pet-store.jpeg"], // Path to logo in public folder
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply both font variables to the html tag
    <html lang="pt-BR" className={`${inter.variable} ${fredoka.variable} scroll-smooth`}>
      {/* Inter is applied by default via globals.css or directly here if needed */}
      <body className="font-sans">{/* Use var(--font-inter) as default */} 
        {children}
      </body>
    </html>
  );
}

