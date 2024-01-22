'use client';

import { ChevronDownIcon, Lock } from 'lucide-react';
import Image from 'next/image';

import { NavLink } from '../navigation/nav-item';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';

export function HubMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" flex bg-transparent border-0 rounded-none hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent  m-0 p-0 w-full h-12 cursor-pointer">
            <div className="flex flex-col items-center w-[222px] h-[60px] justify-end mb-[2px]">
              {/* Logo */}
              <div className="flex flex-col gap-1">
                <div className="overflow-hidden ">
                  <Image
                    src="/img/smarthub.svg"
                    width={205}
                    height={28}
                    alt="logo"
                  />
                </div>
                <div className=" flex h-3 w-full items-center justify-center bg-gradient-to-r  from-[#1D3150] via-[#28426a] to-[#1D3150] py-2 text-[rgb(177,199,223,0.5)] transition-colors  duration-300  hover:text-[#51A6E3]">
                  {/* <MoreHorizontal size={20} /> */}
                  <ChevronDownIcon
                    className="relative  ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <NavLink href="/averiguacao360">
                <div className="flex items-center gap-2 ">
                  <div>
                    <Image
                      src="/img/navigation/icons/icon-link-averiguacao360.svg"
                      alt="Averiguação 360"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-base font-semibold">Averiguação360</h1>
                    <p className="text-xs leading-tight text-muted-foreground">
                      Gestão Inteligente de Averiguações
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink href="#">
                <div>
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image
                        src="/img/navigation/icons/icon-link-seach-pro.svg"
                        alt="seach-pro"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <div className="flex justify-between w-[220px] ">
                        <h1 className="text-base font-semibold">SearchPro</h1>
                        <div className="flex items-center gap-1 text-xs text-center text-lightMode-colors-blue-100">
                          <Lock size={16} fill="rgba(223, 236, 248, .11)" />
                        </div>
                      </div>
                      <p className="text-xs leading-tight text-muted-foreground">
                        Pesquisa Inteligente
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink href="#">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/img/navigation/icons/icon-link-carga-safe.svg"
                      alt="carga-safe"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between w-[220px] ">
                      <h1 className="text-base font-semibold">CargaSafe</h1>
                      <div className="flex items-center gap-1 text-xs text-center text-lightMode-colors-blue-100">
                        <Lock size={16} fill="rgba(223, 236, 248, .11)" />
                      </div>
                    </div>
                    <p className="text-xs leading-tight text-muted-foreground">
                      Mapeamento Inteligente contra Roubos
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink href="#">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/img/navigation/icons/icon-link-map-link.svg"
                      alt="map-link"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between w-[220px] ">
                      <h1 className="text-base font-semibold">MapLink</h1>
                      <div className="flex items-center gap-1 text-xs text-center text-lightMode-colors-blue-100">
                        <Lock size={16} fill="rgba(223, 236, 248, .11)" />
                      </div>
                    </div>
                    <p className="text-xs leading-tight text-muted-foreground">
                      Integração Estratégica de Dados
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink href="">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/img/navigation/icons/icon-link-safe-logix.svg"
                      alt="safe-logix"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between w-[220px] ">
                      <h1 className="text-base font-semibold">SafeLogix</h1>
                      <div className="flex items-center gap-1 text-xs text-center text-lightMode-colors-blue-100">
                        <Lock size={16} fill="rgba(223, 236, 248, .11)" />
                      </div>
                    </div>
                    <p className="text-xs leading-tight text-muted-foreground">
                      Registro Seguro de Motoristas e Ajudantes em Sinistros
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink href="#">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/img/navigation/icons/icon-link-cargo-guardian.svg"
                      alt="cargo-guardian"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between w-[220px] ">
                      <h1 className="text-base font-semibold">CargoGuardian</h1>
                      <div className="flex items-center gap-1 text-xs text-center text-lightMode-colors-blue-100">
                        <Lock size={16} fill="rgba(223, 236, 248, .11)" />
                      </div>
                    </div>
                    <p className="text-xs leading-tight text-muted-foreground">
                      Inteligência na Recuperação de Carga
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink href="#">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/img/navigation/icons/icon-link-client-base.svg"
                      alt="client-base"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-between w-[220px] ">
                      <h1 className="text-base font-semibold">ClientBase</h1>
                      <div className="flex items-center gap-1 text-xs text-center text-lightMode-colors-blue-100">
                        <Lock size={16} fill="rgba(223, 236, 248, .11)" />
                      </div>
                    </div>
                    <p className="text-xs leading-tight text-muted-foreground">
                      Gestão de Clientes Simplificada
                    </p>
                  </div>
                </div>
              </NavLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
