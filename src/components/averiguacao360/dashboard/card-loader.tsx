import { MoonLoader } from 'react-spinners';

export interface CardLoaderProps {}

export function CardLoader() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center border-8 rounded-md border-lightMode-colors-blue-100 bg-[#3392ff]/10">
        <div className="flex items-center justify-center">
          <MoonLoader color="#b6dafb" />
        </div>
      </div>
    </>
  );
}
