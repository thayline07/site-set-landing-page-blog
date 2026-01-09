import { Metadata } from "next";
import { Layout } from "@/components/layout/layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-set-landing-page-blog-3uu1.vercel.app"),
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar.",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar.",
    url: "https://site-set-landing-page-blog-3uu1.vercel.app/",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://site-set-landing-page-blog-3uu1.vercel.app/og-image.jpg",
        width: 880,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
