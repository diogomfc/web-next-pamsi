'use client';

import Image from 'next/image';
import { useContext } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header() {
  const { usuario, signOut } = useContext(AuthContext);
  const avatarName = usuario?.avatar;

  return (
    <header className="fixed z-10 flex justify-center w-full h-16 px-20 border-b-4 bg-liner-Header border-lightMode-colors-white">
      <div className="flex items-center w-full justify-between  max-w-[1440px]">
        <div>
          <Image src="../../img/logo.svg" alt="Logo" width={200} height={100} />
        </div>
        <div className="flex items-center">
          <div className="flex">
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
            <div className="mx-4 ">
              <p className="text-sm text-lightMode-colors-blue-800">
                {usuario?.nome}
              </p>
              {/* //px-[2px] gap-1 border rounded-sm w-fit border-sky-600  bg-lightMode-colors-blue-400 */}
              <div className="flex items-center justify-start px-[2px] gap-1 border rounded-sm w-fit border-sky-600  bg-lightMode-colors-blue-400">
                <p className="text-xs font-bold text-lightMode-colors-white">
                  {usuario?.funcao}
                </p>
              </div>
            </div>
          </div>
          <div className="mr-4">
            <Image
              src="img/header/button-notification.svg"
              alt="Notificações"
              width={30}
              height={30}
            />
          </div>
          <button
            onClick={signOut}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
