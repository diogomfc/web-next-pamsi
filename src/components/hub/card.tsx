import { Info } from '@phosphor-icons/react';
import Image from 'next/image';

type CardProps = {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export function Card({ title, description, buttonLabel, image }: CardProps) {
  return (
    <div className="relative flex flex-col items-center justify-center h-64 p-4 border-8 border-solid rounded-md shadow-lg w-[340px] border-lightMode-colors-blue-100 bg-lightMode-colors-white bg-form-login-texture cursor-pointer">
      <button title="Informações" className="absolute top-0 right-0 p-2">
        <Info size={24} color="#BDD7F1" />
      </button>

      <div className="absolute top-0">
        <Image src={image} alt={title} width={141} height={141} />
      </div>

      <div className="absolute bottom-2">
        <h2 className="text-xl font-bold text-center font text-lightMode-colors-blue-700">
          {title}
        </h2>

        <div className="flex items-center justify-center h-10 mx-4 mb-2">
          <p className="text-sm text-center text-lightMode-colors-blue-700/70">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <button className="px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300/50 bg-lightMode-colors-white ">
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
