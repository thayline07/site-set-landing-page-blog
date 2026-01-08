import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
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

export default function Page() {
  return <LandingPage />;
}
