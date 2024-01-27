'use client';

import { HelpCircle, LayoutGrid, Lock, Settings } from 'lucide-react';
import Image from 'next/image';

import { NavItemSheet } from '../navigation/nav-item-sheet';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from '../ui/sheet';

export function HubMenuSheet() {
  return (
    <>
      <div className="">
        {/* Logo */}
        <Sheet>
          {/* Header logo - Open */}
          <div className="flex items-center gap-2">
            <SheetTrigger asChild className="cursor-pointer">
              {/* Icon Open */}
              <div className=" flex  h-[40px] w-[40px] border border-transparent rounded-sm items-center justify-center bg-[#22385B] py-2 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                <Image
                  src="/img/navigation/icons/icon-open-sheet.svg"
                  alt="icon-open-sheet"
                  width={16}
                  height={16}
                />
              </div>
            </SheetTrigger>
            {/* Logo */}
            <div className="overflow-hidden ">
              <Image
                src="/img/logo-pam-shub-header.svg"
                width={205}
                height={28}
                alt="logo"
              />
            </div>
          </div>
          <SheetContent side="left" className="p-0 w-[318px] no-underline ">
            <SheetHeader className="bg-[#1D3150]">
              {/* Header Logo - Close */}
              <div className="overflow-hidden h-[60px] flex items-center gap-2 pl-8">
                <SheetClose asChild className="cursor-pointer ">
                  <div className=" flex  h-[40px] w-[40px] border border-transparent rounded-sm items-center justify-center bg-[#22385B] py-2 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                    <Image
                      src="/img/navigation/icons/icon-close-sheet.svg"
                      alt="icon-open-sheet"
                      width={16}
                      height={16}
                    />
                  </div>
                </SheetClose>
                {/* Logo */}
                <Image
                  src="/img/logo-pam-shub-header.svg"
                  width={205}
                  height={28}
                  alt="logo"
                />
              </div>
            </SheetHeader>
            <div className="grid pt-2 pb-1">
              <NavItemSheet href="/hub">
                <div className="flex items-center gap-2 text-lightMode-colors-blue-700 hover:font-semibold">
                  <div className="flex items-center justify-center px-2">
                    <LayoutGrid size={24} strokeWidth={1.5} className="" />
                  </div>
                  <div>Smart Hub</div>
                </div>
              </NavItemSheet>
              <NavItemSheet href="/settings">
                <div className="flex items-center gap-2 text-lightMode-colors-blue-700 hover:font-semibold">
                  <div className="flex items-center justify-center px-2 ">
                    <Settings size={24} strokeWidth={1.5} className="" />
                  </div>
                  <div>Configurações</div>
                </div>
              </NavItemSheet>
              <NavItemSheet href="/help">
                <div className="flex items-center gap-2 text-lightMode-colors-blue-700 hover:font-semibold">
                  <div className="flex items-center justify-center px-2 ">
                    <HelpCircle size={24} strokeWidth={1.5} className="" />
                  </div>
                  <div>Ajuda</div>
                </div>
              </NavItemSheet>
            </div>
            <div className="grid w-full py-2 ">
              <div className="flex items-center gap-4 pb-2 pl-6 text-lightMode-colors-blue-700">
                <div className="font-bold ">Aplicativos</div>
              </div>

              <div className="flex flex-col gap-1 ">
                <NavItemSheet href="/averiguacao360/dashboard">
                  <div className="flex items-center gap-2 text-lightMode-colors-blue-700 data-[state=close]">
                    <div className=" flex  border border-lightMode-colors-blue-200 rounded-full bg-[#CFE5F6] items-center justify-center  h-9 w-9 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                      <Image
                        src="/img/navigation/icons/icon-link-averiguacao360.svg"
                        alt="icon-apps"
                        width={25}
                        height={25}
                        className="relative right-0.5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-[#0059A2]">
                        Averiguação360
                      </span>
                      <span className="text-[11.63px] text-muted-foreground">
                        Gestão inteligente de averiguação
                      </span>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet href="/#">
                  <div className="flex items-center gap-2 text-lightMode-colors-blue-700">
                    <div className=" flex  border border-lightMode-colors-blue-200 rounded-full bg-[#CFE5F6] items-center justify-center  h-9 w-9 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                      <Image
                        src="/img/navigation/icons/icon-link-seach-pro.svg"
                        alt="icon-apps"
                        width={22}
                        height={22}
                        className="relative left-0.4 top-0.5"
                      />
                    </div>

                    <div className="flex justify-between gap-1 ">
                      <div className="flex">
                        <div className="flex flex-col ">
                          <span className="text-xs font-semibold text-[#0059A2]">
                            SeachPro
                          </span>
                          <span className="text-[11.63px] text-muted-foreground w-[210px]">
                            Pesquisa Inteligente
                          </span>
                        </div>
                        <div className="flex items-center text-[#CFE5F6]">
                          <Lock size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet href="/#">
                  <div className="flex items-center gap-2 text-lightMode-colors-blue-700">
                    <div className=" flex  border border-lightMode-colors-blue-200 rounded-full bg-[#CFE5F6] items-center justify-center  h-9 w-9 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                      <Image
                        src="/img/navigation/icons/icon-link-carga-safe.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="relative left-0.5"
                      />
                    </div>
                    <div className="flex ">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#0059A2]">
                          CargaSafe
                        </span>
                        <span className="text-[11.63px]  w-[210px] text-muted-foreground">
                          Mapeamento Inteligente
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet href="/#">
                  <div className="flex items-center gap-2 text-lightMode-colors-blue-700">
                    <div className=" flex  border border-lightMode-colors-blue-200 rounded-full bg-[#CFE5F6] items-center justify-center  h-9 w-9 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                      <Image
                        src="/img/navigation/icons/icon-link-map-link.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="relative left-0.5"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#0059A2]">
                          MapLink
                        </span>
                        <span className="text-[11.63px] text-muted-foreground w-[210px]">
                          Integração Estratégica de Dados
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet href="/#">
                  <div className="flex items-center gap-2 text-lightMode-colors-blue-700">
                    <div className=" flex  border border-lightMode-colors-blue-200 rounded-full bg-[#CFE5F6] items-center justify-center  h-9 w-9 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                      <Image
                        src="/img/navigation/icons/icon-link-client-base2.svg"
                        alt="icon-apps"
                        width={23}
                        height={23}
                        className="relative left-0.4"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#0059A2]">
                          ClientBase
                        </span>
                        <span className="text-[11.63px] text-muted-foreground w-[210px]">
                          Gestão de Clientes Simplificada
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet href="/#">
                  <div className="flex items-center gap-2 text-lightMode-colors-blue-700">
                    <div className=" flex  border border-lightMode-colors-blue-200 rounded-full bg-[#CFE5F6] items-center justify-center  h-9 w-9 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                      <Image
                        src="/img/navigation/icons/icon-link-safe-logix.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="relative left-0.5"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#0059A2]">
                          SafeLogix
                        </span>
                        <span className="text-[11.63px] text-muted-foreground w-[210px]">
                          Registro de Motoristas e Ajudantes
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
                <NavItemSheet href="/#">
                  <div className="flex items-center gap-2 text-lightMode-colors-blue-700">
                    <div className=" flex  border border-lightMode-colors-blue-200 rounded-full bg-[#CFE5F6] items-center justify-center  h-9 w-9 hover:border-[#51A6E3]/20  transition-colors  hover:text-white duration-300 ">
                      <Image
                        src="/img/navigation/icons/icon-link-cargo-guardian.svg"
                        alt="icon-apps"
                        width={24}
                        height={24}
                        className="relative left-0.4"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#0059A2]">
                          CargoGuardian
                        </span>
                        <span className="text-[11.63px] text-muted-foreground w-[210px]">
                          Inteligência na Recuperação de Cargas
                        </span>
                      </div>
                      <div className="flex items-center text-[#CFE5F6]">
                        <Lock size={16} />
                      </div>
                    </div>
                  </div>
                </NavItemSheet>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
