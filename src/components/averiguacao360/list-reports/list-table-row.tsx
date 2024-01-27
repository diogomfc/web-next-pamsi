//import { format, parse } from 'date-fns';
import { format, parse } from 'date-fns';
import {
  FileDown,
  FilePenLine,
  GanttChartSquare,
  Mail,
  MessageCircleMore,
  PhoneCall,
  Trash2,
  UsersRound
} from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { TableCell, TableRow } from '@/components/ui/table';
import { AvatarbaseURL } from '@/env';
import { UserType } from '@/types/userTypes';

import { ProgressStatus } from '../dashboard/progress-status';

type ListTableRowProps = {
  numero_processo: string;
  status_report: ReactNode;
  cliente: string;
  data_entrada: string;
  usuario_responsavel?: string;
  usuarios_perfil: UserType[];
  qtd_etapas_formulario: number;
};

export function ListTableRow({
  numero_processo,
  cliente,
  status_report,
  data_entrada,
  qtd_etapas_formulario,
  usuarios_perfil
}: ListTableRowProps) {
  // Calcula a diferença de dias entre a data de entrada e a data atual
  const dataParseada = parse(data_entrada, 'dd-MM-yyyy HH:mm:ss', new Date());
  const agora = new Date();
  const diferencaTempo = Math.abs(agora.getTime() - dataParseada.getTime());
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

  const dataFormatada = format(dataParseada, 'dd-MM-yyyy HH:mm');

  return (
    <>
      <TableRow className="cursor-pointer hover:bg-lightMode-colors-blue-50/25">
        <TableCell className="flex items-center justify-center w-[60px] ">
          <div className="bg-lightMode-colors-blue-50">{status_report}</div>
        </TableCell>
        <TableCell className="w-screen">
          <div className="flex flex-col justify-center">
            <h1 className="text-xs font-semibold truncate "> {cliente}</h1>
            <span className="text-xs text-muted-foreground">
              Nº {numero_processo}
            </span>
          </div>
        </TableCell>
        <TableCell className="w-[140px]">
          <div className="flex flex-col items-center">
            <h1 className="text-xs font-semibold">
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
        <TableCell className="w-[140px]">
          <div className="flex flex-col items-center">
            <h1 className="text-xs font-semibold">
              {qtd_etapas_formulario}/18
            </h1>
            <span className="text-xs text-muted-foreground">
              {18 - qtd_etapas_formulario} pendente
            </span>
          </div>
        </TableCell>
        <TableCell className="w-[300px] ">
          <div className="flex flex-col items-center">
            <h1 className="text-xs font-semibold">{dataFormatada}</h1>
            <span className="text-xs text-muted-foreground">
              há {diferencaDias} dia(s)
            </span>
          </div>
        </TableCell>
        <TableCell className="flex items-center w-[200px] justify-center gap-2 ">
          {/* Editar */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto cursor-pointer hover:text-lightMode-colors-blue-400"
            >
              <FilePenLine size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="flex items-center w-auto h-4">
              <span className="p-1 text-xs text-muted-foreground">
                Editar relatório
              </span>
            </HoverCardContent>
          </HoverCard>
          {/* Grupo Averiguação */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto cursor-pointer hover:text-lightMode-colors-blue-400"
            >
              <UsersRound size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent
              align="end"
              className="w-auto grid-cols-2 p-4 border rounded-lg border-lightMode-colors-blue-200"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-lightMode-colors-blue-100">
                    <Image
                      src="/img/averiguacao360/icons/icon-relatorio.svg"
                      width={30}
                      height={30}
                      alt="Relatório"
                    />
                  </div>

                  <div className="flex flex-col item center ">
                    <span className="text-xs text-muted-foreground">
                      Processo
                    </span>
                    <h1 className="font-semibold">Nº {numero_processo}</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold ">
                    Grupo responsável pela averiguação
                  </span>
                  <div className="flex flex-col gap-2">
                    {usuarios_perfil.map((usuario) => {
                      return (
                        <div
                          key={usuario.id}
                          className="flex items-center justify-between gap-2 p-2 border rounded-lg border-lightMode-colors-blue-100 bg-lightMode-colors-blue-50/30"
                        >
                          <div className="flex gap-2">
                            <Avatar>
                              {usuario.avatar && (
                                <AvatarImage
                                  src={`${AvatarbaseURL}/images/avatar/${usuario.avatar}`}
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
                              <span className="text-xs">{usuario.nome}</span>
                              <span className="text-xs font-normal text-muted-foreground">
                                {usuario.funcao}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
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
          {/* Mensagens */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto cursor-pointer hover:text-lightMode-colors-blue-400"
            >
              <MessageCircleMore size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="flex items-center w-auto h-4">
              <span className="p-1 text-xs text-muted-foreground">
                Mensagens
              </span>
            </HoverCardContent>
          </HoverCard>
          {/* Pdf */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto cursor-pointer hover:text-lightMode-colors-blue-400"
            >
              <FileDown size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="flex items-center w-auto h-4">
              <span className="p-1 text-xs text-muted-foreground">
                Download relatório
              </span>
            </HoverCardContent>
          </HoverCard>
          {/* Previewer */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto cursor-pointer hover:text-lightMode-colors-blue-400"
            >
              <GanttChartSquare size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="flex items-center w-auto h-4">
              <span className="p-1 text-xs text-muted-foreground">
                Previewer relatório
              </span>
            </HoverCardContent>
          </HoverCard>
          {/* Excluir */}
          <HoverCard>
            <HoverCardTrigger
              asChild
              className="w-auto h-auto cursor-pointer hover:text-destructive"
            >
              <Trash2 size={20} strokeWidth={1.5} />
            </HoverCardTrigger>
            <HoverCardContent className="flex items-center w-auto h-4">
              <span className="p-1 text-xs text-muted-foreground">
                Excluir relatório
              </span>
            </HoverCardContent>
          </HoverCard>
        </TableCell>
      </TableRow>
    </>
  );
}
