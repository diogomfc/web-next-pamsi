'use client';

import {
  Building,
  ChevronDownIcon,
  Mail,
  User,
  UserRoundCog
} from 'lucide-react';
import { useContext } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';

export function AccountMenu() {
  const { usuario } = useContext(AuthContext);
  const avatarName = usuario?.avatar;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" flex bg-transparent border-0 rounded-none hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent  m-0 p-0 w-full h-full cursor-pointer">
            {/* Perfil */}
            <div className="flex group cursor-pointer items-center gap-3 rounded-3xl border border-[#20A6B9]/10 bg-[#22385B] pr-3 transition-colors duration-300 hover:border-[#20A6B9] hover:text-white">
              <Avatar>
                {avatarName && (
                  <AvatarImage
                    src={`${process.env.NEXT_PUBLIC_API_URL_RENDER}/images/avatar/${avatarName}`}
                    alt="Avatar"
                  />
                )}
                <AvatarFallback
                  title={usuario?.nome}
                  className="cursor-pointer group-hover:border-[#20A6B9] border border-[#20A6B9]/10 bg-[#22385B]"
                >
                  {/* {usuario?.nome.charAt(0).toUpperCase()} */}
                  <User size={20} />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col ">
                <span>{usuario?.nome}</span>
                <span className="flex text-xs font-normal text-muted-foreground">
                  {usuario?.funcao}
                </span>
              </div>
              <ChevronDownIcon
                className="relative group-hover:text-[#20A6B9]  ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2  md:w-[200px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
              <li className="">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col items-center justify-center w-full h-full  p-4 no-underline rounded-md outline-none select-none bg-[#22385B] focus:shadow-md"
                    href="/"
                  >
                    <div className="flex flex-col items-center justify-center gap-4 ">
                      <Avatar className="h-[95px] w-[95px]">
                        {avatarName && (
                          <AvatarImage
                            src={`${process.env.NEXT_PUBLIC_API_URL_RENDER}/images/avatar/${avatarName}`}
                            alt="Avatar"
                          />
                        )}
                        <AvatarFallback
                          title={usuario?.nome}
                          className="cursor-pointer border border-[#20A6B9]/10 bg-[#22385B]"
                        >
                          <User
                            size={40}
                            color="rgb(32 166 185 / 0.8)"
                            strokeWidth={1}
                          />
                          {/* {usuario?.nome.charAt(0).toUpperCase()} */}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center justify-center text-[rgb(177,199,223)]">
                        <span className="text-xs font-light">
                          {usuario?.nome}
                        </span>
                        <span className="text-xs font-normal text-muted-foreground">
                          {usuario?.funcao}
                        </span>
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="py-4">
                <Button variant="ghost">
                  <div className="flex items-center gap-1">
                    <Mail size={14} />
                    <span className="text-xs ">{usuario?.email}</span>
                  </div>
                </Button>
                <Button variant="ghost">
                  <div className="flex items-center gap-1">
                    <Building size={14} />
                    <span className="text-xs ">GPS Pamcary</span>
                  </div>
                </Button>
                <Button variant="ghost">
                  <div className="flex items-center gap-1">
                    <UserRoundCog size={14} />
                    <span className="text-xs ">Editar Perfil</span>
                  </div>
                </Button>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
