import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Banner {
  image: string;
  title: string;
  description: string;
}

const banners: Banner[] = [
  {
    image: '/img/banners/logo-averiguação360.svg',
    title: 'Averiguação360',
    description: 'Relatórios Personalizados para Decisões Eficientes.'
  },
  {
    image: '/img/banners/logo-cargasafe.svg',
    title: 'CargaSafe',
    description:
      'Transformando Dados em Rotas Seguras. Sua Aliada Contra Roubos de Carga.'
  },
  {
    image: '/img/banners/logo-cargoguardian.svg',
    title: 'CargoGuardian',
    description:
      'A Inteligência Artificial a Serviço da Recuperação Eficiente de Cargas'
  },
  {
    image: '/img/banners/logo-clientbase.svg',
    title: 'ClientBase',
    description:
      'Armazena de forma segura e organizada informações vitais sobre seus clientes'
  },
  {
    image: '/img/banners/logo-maplink.svg',
    title: 'MapLink',
    description: 'A Integração que Mapeia o Caminho para Decisões Estratégicas.'
  },
  {
    image: '/img/banners/logo-safelogix.svg',
    title: 'SafeLogix',
    description: 'Mapeando a Segurança com Históricos Detalhados.'
  },
  {
    image: '/img/banners/logo-seachpro.svg',
    title: 'SearchPro',
    description: 'O Seu Atalho para Informações Inteligentes e Rápidas.'
  }
];

export default function BannerCarousel() {
  const [currentBanner, setCurrentBanner] = useState<number>(0);

  const goToNextBanner = () => {
    setCurrentBanner((prevBanner) =>
      prevBanner === banners.length - 1 ? 0 : prevBanner + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextBanner, 5000); // 5000ms = 5 segundos

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, [currentBanner]);

  return (
    <div className="w-[500px] flex flex-col items-center text-center pt-10">
      <h1 className="text-[40px]  text-lightMode-colors-blue-600">
        Desvende a Eficiência com Nossa Plataforma
      </h1>
      <h1 className="text-[40px] text-lightMode-colors-blue-700">
        Inteligente!
      </h1>

      <div className="relative">
        <Image
          src={banners[currentBanner].image}
          alt={banners[currentBanner].title}
          width={500}
          height={300}
        />

        <div className="absolute bottom-0 left-0 w-full">
          <h1 className="text-xl font-bold text-lightMode-colors-blue-700">
            {banners[currentBanner].title}
          </h1>
          <span className="text-base font-medium text-lightMode-colors-blue-700/70">
            {banners[currentBanner].description}
          </span>
        </div>
      </div>

      {/* Botões dinâmicos */}
      <div className="flex justify-center pt-40">
        {banners.map((banner, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 mx-2 rounded-full ${
              index === currentBanner
                ? 'bg-lightMode-colors-blue-400'
                : 'bg-lightMode-colors-blue-200'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
