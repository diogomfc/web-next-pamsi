'use client';

import { LogOut, MessageCircleMore } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import { Separator } from '../ui/separator';
import { AccountMenu } from './account-menu';
import { HubMenu } from './hub-menu';

export function Header() {
  const pathname = usePathname();
  const { signOut } = useContext(AuthContext);

  return (
    <header className="col-span-full flex h-[80px] items-center border border-transparent border-b-[#10bed5] bg-[#1D3150] pl-4 text-[rgb(177,199,223)] lg:h-[80px] lg:pr-8">
      <div className="flex items-center flex-shrink-0 mr-auto lg:gap-4">
        <div className="flex w-[222px] flex-col items-center">
          <HubMenu />
        </div>
        <Separator orientation="vertical" className="h-16 bg-[#20A6B9]/10" />
        <button className="transition-colors duration-300 hover:text-white">
          <div className="flex h-[40px] items-center gap-2">
            {pathname.includes('/averiguacao360') && (
              <>
                <Image
                  src="/img/averiguacao360/icons/icon-averiguacao360.svg"
                  alt="Averiguação360"
                  width={32}
                  height={32}
                />
                {/* <img src={iconAveriguacao360} alt="Averiguação360" /> */}
                <p className="text-sm font-normal text-muted- text-muted-foreground">
                  Averiguação360{' '}
                </p>
              </>
            )}
          </div>
        </button>
      </div>

      <div className="flex items-center gap-3 ml-auto lg:gap-4">
        <AccountMenu />

        {/* Notificações */}
        <button className='relative box-border flex h-[40px] items-center gap-2 rounded border  border-[#20A6B9]/10 bg-[#22385B] px-3 transition-colors duration-300  before:absolute before:-right-1   before:-top-1 before:h-[10px] before:w-[10px] before:rounded-full before:border before:border-solid before:border-[#72d9fb] before:bg-[#20A6B9] before:content-[""] hover:border-[#20A6B9] hover:text-white'>
          <MessageCircleMore size={24} strokeWidth={1.5} />
          <p className="flex items-center justify-center w-5 h-12 text-base font-bold leading-none text-grey-100">
            10
          </p>
        </button>

        {/* logoff */}
        <button
          onClick={signOut}
          className="relative flex h-[40px] w-[40px] items-center justify-center rounded border border-[#20A6B9]/10 bg-[#22385B] transition-colors duration-300 hover:border-[#20A6B9] hover:text-white"
        >
          <LogOut size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
