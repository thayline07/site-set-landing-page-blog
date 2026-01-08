import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo/logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row nm:justify-start gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row gap-4 text-sm text-blue-100">
            <Link href="/termos-de-uso" className="hover:text-blue-200">
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-blue-200"
            >
              Política de Privacidade
            </Link>
            <Link href="/feedback" className="hover:text-blue-200">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
