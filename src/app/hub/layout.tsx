import { Metadata } from 'next';

import { Header } from '@/components/header/header';

export const metadata: Metadata = {
  title: 'Hub'
};

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="grid min-h-screen antialiased bg-cover grid-rows-app bg-hero-pattern">
      <Header />

      <main className="mx-auto w-full max-w-[1600px] text-[#042F6C] mt-16 mb-10 ">
        {children}
      </main>

      <footer className="fixed bottom-0 z-10 w-full px-4 mt-8 bg-white">
        <div className="flex justify-between text-xs text-[#042F6C] opacity-50">
          <div className="flex gap-1">
            <strong>SmartHub</strong>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] hover:text-[#10bed5] transition-colors duration-300"
            >
              © 2024 GPS Pamcary
            </a>
          </div>

          <div>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] hover:text-[#10bed5] transition-colors duration-300"
            >
              Sobre
            </a>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] hover:text-[#10bed5] transition-colors duration-300"
            >
              Contato
            </a>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] hover:text-[#10bed5] transition-colors duration-300"
            >
              Termos de uso
            </a>
            <span className="mx-1">•</span>
            <a
              href="https://www.pamcary.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#042F6C] hover:text-[#10bed5] transition-colors duration-300"
            >
              Política de privacidade
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
}
