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
    description: 'Relatórios personalizados para decisões eficientes.'
  },
  {
    image: '/img/banners/logo-cargasafe1.svg',
    title: 'CargaSafe',
    description:
      'Transformando dados em rotas seguras. Sua aliada contra roubos de carga.'
  },
  {
    image: '/img/banners/logo-cargoguardian1.svg',
    title: 'CargoGuardian',
    description:
      'A inteligência artificial a serviço da recuperação eficiente de cargas.'
  },
  {
    image: '/img/banners/logo-clientbase1.svg',
    title: 'ClientBase',
    description:
      'Armazena de forma segura e organizada informações vitais sobre seus clientes.'
  },
  {
    image: '/img/banners/logo-maplink1.svg',
    title: 'MapLink',
    description: 'A integração que mapeia o caminho para decisões estratégicas.'
  },
  {
    image: '/img/banners/logo-safelogix1.svg',
    title: 'SafeLogix',
    description: 'Cadastro de motorista com históricos detalhados.'
  },
  {
    image: '/img/banners/logo-seachpro1.svg',
    title: 'SearchPro',
    description: 'O seu atalho para informações inteligentes e rápidas.'
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
    <div className="flex flex-col items-center justify-center max-w-md gap-4 py-4 mx-auto text-center 2xl:max-w-[550px]">
      <div className="">
        <h1 className="text-3xl 2xl:text-4xl text-lightMode-colors-blue-600">
          Desvende a eficiência com nossa plataforma
        </h1>
        <h1 className="text-xl font-bold 2xl:text-2xl text-lightMode-colors-blue-700">
          Inteligente!
        </h1>
      </div>

      <div className="">
        <Image
          src={banners[currentBanner].image}
          alt={banners[currentBanner].title}
          width={300}
          height={300}
        />
      </div>

      <div className="h-20">
        <h1 className="text-xl font-bold text-lightMode-colors-blue-700">
          {banners[currentBanner].title}
        </h1>
        <span className="text-base font-medium text-lightMode-colors-blue-700/70">
          {banners[currentBanner].description}
        </span>
      </div>

      {/* Botões dinâmicos */}
      <div className="flex justify-center ">
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
