import { Info } from '@phosphor-icons/react';
import Image from 'next/image';
import { ReactElement } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';

type CardProps = {
  image: string;
  title: string;
  description: string;
  buttonLabel: ReactElement | string;
  popoverContent?: ReactElement;
};

export function Card({
  title,
  description,
  buttonLabel,
  image,
  popoverContent
}: CardProps) {
  return (
    <div className="border rounded-md border-lightMode-colors-blue-200">
      <div className="relative flex flex-col items-center justify-center h-64 p-4 border-8 border-solid rounded-md shadow-lg cursor-pointer border-lightMode-colors-blue-100 bg-lightMode-colors-white">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              title="Informações"
              className="absolute top-0 right-0 p-2 fill-lightMode-colors-blue-200 hover:fill-blue-500"
            >
              <Info size={24} color="" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[325px] border rounded-md p-8"
          >
            {popoverContent}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="absolute top-0">
          <Image src={image} alt={title} width={141} height={141} />
        </div>

        <div className="absolute bottom-2">
          <h2 className="text-xl font-bold text-center text-lightMode-colors-blue-700">
            {title}
          </h2>

          <div className="flex items-center justify-center h-10 mx-4 mb-2">
            <p className="text-sm text-center text-lightMode-colors-blue-700/70">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            {buttonLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
