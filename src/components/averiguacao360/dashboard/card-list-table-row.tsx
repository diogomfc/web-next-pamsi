import { FilePenLine, Mail, PhoneCall, UsersRound } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { TableCell, TableRow } from '@/components/ui/table';
import { UsuarioResponsavel } from '@/types/reportTypes';

import { ProgressStatus } from './progress-status';

type CardTableRowProps = {
  numero_processo: string;
  status_report: ReactNode;
  cliente: string;
  data_entrada: string;
  usuario_responsavel?: string;
  usuarios_perfil: UsuarioResponsavel[];
  qtd_etapas_formulario: number;
};

export function CardTableRow({
  numero_processo,
  cliente,
  status_report,
  data_entrada,
  qtd_etapas_formulario,
  usuarios_perfil
}: CardTableRowProps) {
  // Calcula a diferença de dias entre a data de entrada e a data atual
  const dataEntrada = new Date(data_entrada);
  const agora = new Date();
  const diferencaTempo = Math.abs(agora.getTime() - dataEntrada.getTime());
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
  const dataFormatada = dataEntrada.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <>
      <TableRow className="">
        <TableCell className="pl-4">{status_report}</TableCell>
        <TableCell className="">
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold">{cliente}</h1>
            <span className="text-xs text-muted-foreground">
              Nº {numero_processo}
            </span>
          </div>
        </TableCell>
        <TableCell className="">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">
              {((qtd_etapas_formulario / 18) * 100).toFixed(0)}%
            </h1>
            <ProgressStatus
              initialValue={1}
              finalValue={Number(
                ((qtd_etapas_formulario / 18) * 100).toFixed(0)
              )}
              delay={500}
            />
          </div>
        </TableCell>
        <TableCell className="">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">{qtd_etapas_formulario}/18</h1>
            <span className="text-xs text-muted-foreground">
              {18 - qtd_etapas_formulario} pendente
            </span>
          </div>
        </TableCell>
        <TableCell className="">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">{dataFormatada}</h1>
            <span className="text-xs text-muted-foreground">
              {diferencaDias} dias
            </span>
          </div>
        </TableCell>
        <TableCell className="flex items-center justify-center gap-2">
          {/* Menu */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto p-2 rounded-md cursor-pointer hover:bg-lightMode-colors-blue-100"
            >
              <UsersRound size={24} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="w-auto grid-cols-2 p-4 border rounded-lg border-lightMode-colors-blue-200">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Image
                    src="/img/averiguacao360/icons/icon-relatorio.svg"
                    width={30}
                    height={30}
                    alt="Relatório"
                  />
                  <div className="flex flex-col ">
                    <h1 className="font-semibold">{cliente}</h1>
                    <span className="text-xs text-muted-foreground">
                      {numero_processo}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground ">
                    Grupo responsável pela averiguação
                  </span>
                  <div className="flex flex-col gap-2">
                    {usuarios_perfil.map((usuario) => {
                      return (
                        <div
                          key={usuario.id}
                          className="flex items-center justify-between gap-4 p-4 border rounded-lg border-lightMode-colors-blue-200 bg-lightMode-colors-blue-50"
                        >
                          <div className="flex gap-4">
                            <Avatar>
                              {usuario.avatar && (
                                <AvatarImage
                                  src={`http://localhost:3333/images/avatar/${usuario.avatar}`}
                                  alt="Avatar"
                                />
                              )}
                              <AvatarFallback
                                title={usuario.nome}
                                className="cursor-pointer"
                              >
                                {usuario.nome.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span>{usuario.nome}</span>
                              <span className="text-xs font-normal text-muted-foreground">
                                {usuario.funcao}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex items-center justify-center w-auto h-auto p-2 bg-white border rounded-full border-lightMode-colors-blue-200 hover:bg-lightMode-colors-blue-100 hover:border-lightMode-colors-blue-300 hover:text-lightMode-colors-blue-400">
                              <HoverCard>
                                <HoverCardTrigger
                                  asChild
                                  className="cursor-pointer"
                                >
                                  <PhoneCall size={16} strokeWidth={1.5} />
                                </HoverCardTrigger>
                                <HoverCardContent className="flex items-center justify-center w-auto p-2">
                                  <h1>{usuario.telefone}</h1>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                            <div className="flex items-center justify-center w-auto h-auto p-2 bg-white border rounded-full border-lightMode-colors-blue-200 hover:bg-lightMode-colors-blue-100 hover:border-lightMode-colors-blue-300 hover:text-lightMode-colors-blue-400">
                              <HoverCard>
                                <HoverCardTrigger
                                  asChild
                                  className="cursor-pointer "
                                >
                                  <Mail size={16} strokeWidth={1.5} />
                                </HoverCardTrigger>
                                <HoverCardContent className="flex items-center justify-center w-auto p-2">
                                  <h1>{usuario.email}</h1>
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto p-2 rounded-md cursor-pointer hover:bg-lightMode-colors-blue-100"
            >
              <FilePenLine size={24} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="w-auto h-auto ">
              <span className="text-muted-foreground ">Editar relatório</span>
            </HoverCardContent>
          </HoverCard>
        </TableCell>
      </TableRow>
    </>
  );
}
