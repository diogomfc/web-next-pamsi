'use client';

import { ChevronRight, LogOut, MessageCircleMore } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import { Separator } from '../ui/separator';
import { AccountMenu } from './account-menu';
//import { HubMenu } from './hub-menu';
import { HubMenuSheet } from './hub-menu-sheet';

export function Header() {
  const pathname = usePathname();
  const { signOut } = useContext(AuthContext);

  return (
    <header className="col-span-full flex h-[60px] px-4 items-center border border-transparent border-b-[#51A6E3] bg-[#1D3150]  fixed top-0 z-50 w-full text-[rgb(177,199,223)] lg:h-[60px] lg:px-4">
      <div className="flex items-center flex-shrink-0 mr-auto lg:gap-4">
        {pathname.includes('/hub') ? (
          <>
            {/* Logo */}
            <div className="pl-8 overflow-hidden">
              <Image
                src="/img/logo-pam-shub-header.svg"
                width={205}
                height={28}
                alt="logo"
              />
            </div>
          </>
        ) : (
          <>
            <div className="pl-4 ">
              {/* <HubMenu /> */}
              <HubMenuSheet />
            </div>
            <Separator
              orientation="vertical"
              className="h-12 bg-[#51A6E3]/10"
            />
          </>
        )}

        <div className="flex h-[40px] items-center gap-2 ">
          {pathname.includes('/averiguacao360') && (
            <>
              <Link
                href="/averiguacao360/dashboard"
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="duration-300 rounded-full group-hover:transition-colors group-hover:bg-gradient-to-r from-transparent via-[#51A6E3]/10 to-transparent">
                  <Image
                    src="/img/averiguacao360/icons/icon-averiguacao360.svg"
                    alt="Averiguação360"
                    width={22}
                    height={22}
                  />
                </div>
                <p className="text-xs font-normal duration-300 group-hover:transition-colors group-hover:text-lightMode-colors-blue-200/80 text-muted-foreground">
                  Averiguação360
                </p>
              </Link>
              {pathname.includes('/averiguacao360/list-reports') && (
                <div className="flex items-center gap-2">
                  <ChevronRight
                    className="text-[#51A6E3] "
                    size={16}
                    strokeWidth={1}
                  />
                  <p className="text-xs font-normal text-muted- text-text-lightMode-colors-blue-200/80 ">
                    Meus relatórios
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 pr-4 ml-auto lg:gap-4">
        <AccountMenu />

        {/* Notificações */}
        <button className='relative box-border flex h-[40px] items-center gap-2 rounded border  border-transparent bg-[#22385B] px-3 transition-colors duration-300  before:absolute before:-right-1   before:-top-1 before:h-[10px] before:w-[10px] before:rounded-full before:border before:border-solid before:border-[#72d9fb] before:bg-[#51A6E3] before:content-[""] hover:border-[#51A6E3]/20   hover:text-white'>
          <MessageCircleMore size={24} strokeWidth={1.5} />
          <p className="flex items-center justify-center w-5 h-12 text-base font-bold leading-none text-grey-100">
            10
          </p>
        </button>

        {/* logoff */}
        <button
          onClick={signOut}
          className="relative flex h-[40px] w-[40px] items-center justify-center rounded border border-transparent bg-[#22385B] transition-colors duration-300 hover:border-[#51A6E3]/20  hover:text-white"
        >
          <LogOut size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
