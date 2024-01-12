import { Header } from '@/components/header/header';

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="grid min-h-screen antialiased grid-rows-app bg-hero-pattern ">
      <header className="fixed top-0 z-10 w-full">
        <Header />
      </header>

      <main className="mx-auto w-full max-w-[1600px] px-4 text-[#042F6C] mt-20 mb-0 overflow-y-auto">
        {children}
      </main>

      <footer className="fixed bottom-0 z-10 w-full px-4 mt-8 bg-white opacity-60">
        <div className="flex items-center justify-between text-sm text-[#042F6C]">
          <div className="flex gap-1 mb-2">
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
