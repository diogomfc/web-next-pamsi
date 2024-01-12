'use client';

import { LayoutGrid, Settings } from 'lucide-react';
import Image from 'next/image';

import { DrawerClose } from '@/components/ui/drawer';

import { Separator } from '../ui/separator';
import { NavLink } from './nav-item';

export function Navigation() {
  return (
    <nav className="flex flex-col gap-0.5">
      <div className="flex items-center justify-center w-full ">
        <Image
          src="/img/logo-pamcary.png"
          alt="Logo Cliente Pamcary"
          width={128}
          height={24}
        />
      </div>
      <div className="py-4">
        <Separator orientation="horizontal" className="" />
      </div>
      <NavLink href="/hub">
        <DrawerClose>
          <div className="flex items-center gap-4">
            <LayoutGrid className="w-6 h-6" />
            Hub
          </div>
        </DrawerClose>
      </NavLink>

      <NavLink href="/config">
        <Settings className="w-6 h-6" />
        Configurações
      </NavLink>
      <div className="py-4">
        <Separator orientation="horizontal" className="" />
      </div>

      <NavLink href="/hub/averiguacao360">
        <DrawerClose>
          <div className="flex items-center gap-4">
            <Image
              src="/img/navigation/icons/icon-link-averiguacao360.svg"
              alt="Averiguação 360"
              width={32}
              height={32}
            />
            Averiguação360
          </div>
        </DrawerClose>
      </NavLink>

      <NavLink href="/seach-pro">
        <Image
          src="/img/navigation/icons/icon-link-seach-pro.svg"
          alt="Seach Pro"
          width={32}
          height={32}
        />
        Seach Pro
      </NavLink>
      <NavLink href="/carga-safe">
        <Image
          src="/img/navigation/icons/icon-link-carga-safe.svg"
          alt="Carga Safe"
          width={32}
          height={32}
        />
        Carga Safe
      </NavLink>
      <NavLink href="/map-link">
        <Image
          src="/img/navigation/icons/icon-link-map-link.svg"
          alt="Map Link"
          width={32}
          height={32}
        />
        Map Link
      </NavLink>
      <NavLink href="/safe-logix">
        <Image
          src="/img/navigation/icons/icon-link-safe-logix.svg"
          alt="Safe Logix"
          width={32}
          height={32}
        />
        Safe Logix
      </NavLink>
      <NavLink href="/cargo-guardian">
        <Image
          src="/img/navigation/icons/icon-link-cargo-guardian.svg"
          alt="Cargo Guardian"
          width={32}
          height={32}
        />
        Cargo Guardian
      </NavLink>
      <NavLink href="/client-base">
        <Image
          src="/img/navigation/icons/icon-link-client-base.svg"
          alt="Client Base"
          width={32}
          height={32}
        />
        Client Base
      </NavLink>
    </nav>
  );
}
