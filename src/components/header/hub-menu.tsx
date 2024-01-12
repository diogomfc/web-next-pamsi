'use client';

import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

import { Navigation } from '../navigation';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger
} from '../ui/drawer';
import { Separator } from '../ui/separator';

export function HubMenu() {
  return (
    <Drawer>
      <DrawerTrigger>
        {/* Logo */}
        <div className="">
          <div className="relative top-[8px] overflow-hidden">
            <Image src="/img/smarthub.svg" width={205} height={28} alt="logo" />
          </div>
          <div className="relative top-4 flex h-3 w-full items-center justify-center bg-gradient-to-r  from-[#1D3150] via-[#28426a] to-[#1D3150] py-2 text-[rgb(177,199,223,0.5)] transition-colors  duration-300  hover:text-[#51A6E3]">
            <MoreHorizontal size={20} />
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="top-0 mt-20 w-[256px] bg-[#EDF6FF] px-0">
        <DrawerHeader>
          <Navigation />
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex flex-col items-center justify-center">
            <Separator orientation="horizontal" className="" />
            <span className="pt-2 text-xs text-muted-foreground">
              smart-hub
            </span>
            <span className="ext-muted-foreground font-mono text-[10px]">
              v0001
            </span>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
