'use client';
import { useContext } from 'react';

import { Card } from '@/components/hub/card';
//import { useRouter } from 'next/navigation';
//import { Button } from '@/components/ui/button';
import { AuthContext } from '@/contexts/AuthContext';

type UserRole = 'Admin' | 'Supervisor' | 'Analista' | 'Revisor';

// Função para verificar permissão de acesso do usuário
function hasPermission(userRole: UserRole, roles: UserRole[]) {
  return roles.includes(userRole);
}

export default function Hub() {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  //const router = useRouter();
  const { usuario } = useContext(AuthContext);

  return (
    <div className="">
      <div className="">
        <h1 className="mb-2 text-4xl font-bold text-lightMode-colors-blue-600">
          Bem-vindo, {usuario?.nome}
        </h1>
        <p className="text-base text-lightMode-colors-blue-700">
          Agora você pode contar com um hub de soluções inteligentes,
          impulsionado pela inteligência artificial e projetado para auxiliar em
          todo o processo de investigação e gestão de processos. Este é o seu
          hub central para simplificar, analisar e aprimorar seus processos com
          eficiência e precisão. Explore e descubra o poder da nossa plataforma
          integrada.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 pt-8 group">
        {/* Rota para criar um usuário (Apenas administradores podem acessar) */}
        {usuario && hasPermission(usuario?.funcao, ['Admin', 'Supervisor']) && (
          <>
            <div className="flex gap-8">
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconAveriguacao360.png"
                  title="Averiguação360"
                  description="Gestão Inteligente de Averiguações"
                  buttonLabel="Acessar"
                />
              </div>
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconSearchPro.png"
                  title="SearchPro"
                  description="Pesquisa Inteligente"
                  buttonLabel="Acessar"
                />
              </div>
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconCargaSafe.png"
                  title="CargaSafe"
                  description="Mapeamento Inteligente contra Roubos"
                  buttonLabel="Acessar"
                />
              </div>
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconMapLink.png"
                  title="MapLink"
                  description="Integração Estratégica de Dados"
                  buttonLabel="Acessar"
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconSafeLogix.png"
                  title="SafeLogix"
                  description="Registro Seguro de Motoristas e Ajudantes em Sinistros"
                  buttonLabel="Acessar"
                />
              </div>
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconCargoGuardian.png"
                  title="CargoGuardian"
                  description="Inteligência na Recuperação de Carga"
                  buttonLabel="Acessar"
                />
              </div>
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconClientBase.png"
                  title="ClientBase"
                  description="Gestão de Clientes Simplificada"
                  buttonLabel="Acessar"
                />
              </div>
              <div className="group-hover:blur-sm hover:!blur-none">
                <Card
                  image="/img/hub/iconConfig.png"
                  title="Configurações"
                  description="Cadastro e gerenciamento de acesso"
                  buttonLabel="Acessar"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
