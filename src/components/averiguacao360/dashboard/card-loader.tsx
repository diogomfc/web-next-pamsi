import { MoonLoader } from 'react-spinners';

export interface CardLoaderProps {}

export function CardLoader() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center border-8 rounded-xl border-lightMode-colors-blue-100 bg-[#000000]/25">
        <div className="flex items-center justify-center">
          <MoonLoader color="#DFECF8" />
        </div>
      </div>
    </>
  );
}
