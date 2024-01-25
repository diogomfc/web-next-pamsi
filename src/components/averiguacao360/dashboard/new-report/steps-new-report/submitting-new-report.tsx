import { Controls, Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';

import animationData from '@/components/averiguacao360/animation-lottie-files/animation-submitting-new-report1.json';
import { Separator } from '@/components/ui/separator';

export function SubmittingNewReport() {
  return (
    <>
      <div className="bg-white">
        <header>
          <div className="flex items-center justify-between gap-2 px-8 py-4 bg-lightMode-colors-blue-50">
            <div className="flex items-center gap-2">
              <Image
                src="/img/averiguacao360/icons/icon-relatorio.svg"
                width={20}
                height={20}
                alt=""
              />
              <h1 className="text-lg text-lightMode-colors-blue-700">
                Novo relatório de averiguação
              </h1>
            </div>
          </div>
          <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
        </header>

        <main className="px-8 py-1">
          <div className="flex flex-col items-center ">
            <div className="">
              <Player
                autoplay
                loop
                src={animationData}
                style={{ height: '300px', width: '300px' }}
              >
                <Controls
                  visible={false}
                  buttons={['play', 'repeat', 'frame', 'debug']}
                />
              </Player>
            </div>

            <h1 className="relative text-xl font-bold opacity-70 bottom-8 animate-pulse">
              Preparando o relatório, por favor aguarde…
            </h1>
          </div>
        </main>

        {/* Footer Buttons */}
        <footer className="flex flex-col ">
          <div className="flex items-center justify-between gap-2 px-8 h-[50px] bg-lightMode-colors-blue-50"></div>
        </footer>
      </div>
    </>
  );
}
