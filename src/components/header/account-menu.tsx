'use client';

import {
  Building,
  ChevronDown,
  LogOut,
  Mail,
  UserRoundCog
} from 'lucide-react';
import { useContext } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';

export function AccountMenu() {
  const { usuario, signOut } = useContext(AuthContext);
  const avatarName = usuario?.avatar;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Perfil */}
        <div className="flex cursor-pointer items-center gap-3 rounded-3xl border border-[#20A6B9]/10 bg-[#22385B] pr-3 transition-colors duration-300 hover:border-[#20A6B9] hover:text-white">
          <Avatar>
            {avatarName && (
              <AvatarImage
                src={`http://localhost:3333/images/avatar/${avatarName}`}
                alt="Avatar"
              />
            )}
            <AvatarFallback title={usuario?.nome} className="cursor-pointer">
              {usuario?.nome.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>{usuario?.nome}</span>
            <span className="text-xs font-normal text-muted-foreground">
              {usuario?.funcao}
            </span>
          </div>
          <ChevronDown size={20} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="grid w-auto grid-cols-2 p-0 rounded-lg border-t-1 border-b-0 border-x-0 border-[#22385B]/90"
      >
        <DropdownMenuLabel className="bg-[#22385B] w-[200px] ">
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <Avatar className="h-[95px] w-[95px]">
              {avatarName && (
                <AvatarImage
                  src={`http://localhost:3333/images/avatar/${avatarName}`}
                  alt="Avatar"
                />
              )}
              <AvatarFallback title={usuario?.nome} className="cursor-pointer">
                {usuario?.nome.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center text-[rgb(177,199,223)]">
              <span className="font-light">Diogo Silva</span>
              <span className="text-xs font-normal text-muted-foreground">
                {usuario?.funcao}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <div className="flex flex-col justify-center px-4">
          <DropdownMenuItem className="cursor-pointer">
            <Mail className="w-4 h-4 mr-2" />
            <span>{usuario?.email}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Building className="w-4 h-4 mr-2" />
            <span>GPS Pamcary</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <UserRoundCog className="w-4 h-4 mr-2" />
            <span>Editar Perfil</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer text-rose-500 dark:text-rose-400">
            <LogOut onClick={signOut} className="w-4 h-4 mr-2" />
            <span>Sair</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
