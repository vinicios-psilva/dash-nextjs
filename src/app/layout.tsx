import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// 1. Imports do Bootstrap e CSS Global (Sempre no topo)
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// 2. Import do seu componente Canvas
import DataBackground from "@/components/DataBackground";

// 3. Configuração das Fontes (Padrão Next.js 16)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinicios Silva | Analytics Data",
  description: "Portfólio de Analista de Dados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Ícones do Bootstrap via CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" 
        />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* O Canvas roda no fundo de todas as páginas */}
        <DataBackground />
        
        {/* O conteúdo do site entra aqui */}
        {children}
      </body>
    </html>
  );
}