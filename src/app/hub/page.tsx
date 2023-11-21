'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AuthContext } from '@/contexts/AuthContext';

type UserRole = 'Admin' | 'Supervisor' | 'Analista' | 'Revisor';

// Função para verificar permissão de acesso do usuário
function hasPermission(userRole: UserRole, roles: UserRole[]) {
  return roles.includes(userRole);
}

export default function Hub() {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const router = useRouter();
  const { usuario } = useContext(AuthContext);
  //mostrar avatar do usuario
  const avatarName = usuario?.avatar;
  console.log(avatarName);

  // Função para fazer logout
  const handleLogout = () => {
    destroyCookie(undefined, 'sh.token');
    router.push('/');
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-lightMode-colors-blue-100 to-lightMode-colors-blue-200">
        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-center w-full h-full p-10">
            <div>
              {/* Mostrar name e avatar */}
              <h1 className="mb-10 text-4xl font-bold text-center">
                Bem-vindo, {usuario?.nome}
              </h1>
              <div className="flex items-center justify-center w-full">
                <Avatar>
                  {avatarName && (
                    <AvatarImage
                      src={`http://localhost:3333/images/avatar/${avatarName}`}
                      alt="Avatar"
                    />
                  )}
                  <AvatarFallback
                    title={usuario?.nome}
                    className="cursor-pointer"
                  >
                    {usuario?.nome.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            <h2 className="mb-10 text-2xl font-bold text-center">
              Você está logado como {usuario?.funcao}
            </h2>
            <h3 className="mb-10 text-2xl font-bold text-center">
              Seu e-mail é {usuario?.email}
            </h3>

            {/* Rota para criar um usuário (Apenas administradores podem acessar) */}
            {usuario && hasPermission(usuario?.funcao, ['Admin']) && (
              <Button
                onClick={() => {
                  router.push('/users/create');
                }}
              >
                Create
              </Button>
            )}

            {/* Rota para listar os usuários (Apenas administradores e supervisores podem acessar) */}
            {usuario &&
              hasPermission(usuario.funcao, ['Admin', 'Supervisor']) && (
                <Button
                  onClick={() => {
                    router.push('/users/list');
                  }}
                >
                  List
                </Button>
              )}

            {/* Botão para fazer logout */}
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
