'use client';

import { Calendar, Trash, User } from 'lucide-react';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AvatarbaseURL } from '@/env';
import { UserType } from '@/types/userTypes';

export interface SubmitSuccessfulNewReportProps {
  numero_processo: string;
  cliente: string;
  data_entrada: string;
  usuario_responsavel: UserType;
  usuarios_permitidos: UserType[];
  formularios_selecionados: {
    idFormName: string;
    NumberForm?: number;
    step?: number;
    formName: string;
  }[];
}

export function SubmitSuccessfulNewReport({
  numero_processo,
  cliente,
  data_entrada,
  usuario_responsavel,
  usuarios_permitidos,
  formularios_selecionados
}: SubmitSuccessfulNewReportProps) {
  return (
    <>
      <div className="bg-white">
        <header>
          <div className="flex items-center justify-between gap-2 px-8 py-4 bg-lightMode-colors-blue-50">
            <div className="flex items-center gap-2">
              <Image
                src="/img/averiguacao360/icons/icon-relatorio.svg"
                width={20}
                height={20}
                alt=""
              />
              <h1 className="text-lg text-lightMode-colors-blue-700">
                Novo relatório de averiguação
              </h1>
            </div>
          </div>
          <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
        </header>

        <main className="px-8 py-1">
          <div className="flex flex-col px-2 py-1 border rounded-lg border-lightMode-colors-blue-100 shadow-Box_Form">
            {/* Header */}
            <div className=" space-y-2 pl-4 max-h-[300px]">
              <div className="flex items-center gap-4">
                <Image
                  src="/img/averiguacao360/icons/icon-segurado.svg"
                  width={80}
                  height={80}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-lightMode-colors-blue-700">
                    {cliente}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="pr-2 font-bold text-black">
                      Nº {numero_processo}
                    </span>

                    <div className="flex items-center gap-1 text-xs font-semibold text-lightMode-colors-blue-500 0 pt-[2px]">
                      {/* <span>•</span> */}
                      <div className="flex w-2 h-2 rounded-full bg-lightMode-colors-blue-500" />
                      <span>Formalizando</span>
                    </div>

                    <div className="flex gap-1 pt-[2px] text-xs text-muted-foreground ">
                      <Calendar size={14} />
                      <span className="">{data_entrada}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grupo de averiguação */}
            <div className="flex flex-col gap-4 px-4 py-2">
              <div className="grid grid-cols-4 gap-2">
                <div className="flex items-center justify-center col-span-1 p-2 border rounded-sm border-lightMode-colors-blue-50">
                  <div className="flex flex-col items-center gap-1">
                    <span className="flex text-xs font-medium">
                      Responsável
                    </span>
                    <div className="flex flex-col items-center gap-1">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={`${AvatarbaseURL}/images/avatar/${usuario_responsavel?.avatar}`}
                          alt={usuario_responsavel?.nome}
                        />
                        <AvatarFallback
                          title={usuario_responsavel?.nome}
                          className="border cursor-pointer border-lightMode-colors-blue-200 "
                        >
                          <User
                            size={20}
                            className="text-lightMode-colors-blue-200"
                          />
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col items-center">
                        <span className="text-xs font-semibold ">
                          {usuario_responsavel?.nome}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {usuario_responsavel?.funcao}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 px-2 border rounded-sm border-lightMode-colors-blue-50">
                  <span className="flex py-2 text-xs font-medium">
                    Grupo de analistas responsáveis pela averiguação:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {usuarios_permitidos?.map((users) => (
                      <div key={users?.id} className="flex items-center gap-2 ">
                        <Avatar>
                          <AvatarImage
                            src={`${AvatarbaseURL}/images/avatar/${users?.avatar}`}
                            alt={users?.avatar}
                          />
                          <AvatarFallback
                            title={users?.nome}
                            className="border cursor-pointer border-lightMode-colors-blue-200 "
                          >
                            {users?.nome.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold">
                            {users?.nome}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {users?.funcao}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulários do relatório */}
            <div className="flex flex-col gap-2 px-4 py-2 ">
              <h1 className="text-xs font-semibold">
                Formulários a serem preenchidos até o final da averiguação:
              </h1>
              <div className="grid grid-cols-3 gap-1">
                {formularios_selecionados.map((form) => (
                  <div
                    key={form.idFormName}
                    className="flex items-center gap-2"
                  >
                    <div>
                      <div className="flex items-center justify-center w-6 h-6 border rounded-full border-lightMode-colors-blue-400">
                        <span className="text-xs font-medium text-lightMode-colors-blue-400">
                          {form.step}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {form.formName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer Buttons */}
        <footer className="flex flex-col ">
          <div className="flex items-center justify-between gap-2 px-8 h-[50px] bg-lightMode-colors-blue-50">
            <Button
              variant="ghost"
              className="flex items-center gap-1 text-sm text-lightMode-colors-red-default hover:text-lightMode-colors-red-dark"
            >
              <Trash className="w-4 h-4 " />
              <span>Excluir relatorio</span>
            </Button>
            <div className="flex items-center gap-2">
              <Button className="h-[34px] px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300 bg-lightMode-colors-white hover:bg-lightMode-colors-blue-500 hover:text-white">
                Editar Relatório
              </Button>
              <Button
                type="button"
                key="proximo"
                onClick={() => {}}
                className="px-2 py-1 text-white border rounded bg-lightMode-colors-blue-500 hover:bg-lightMode-colors-blue-400 "
              >
                Confirmar e iniciar averiguação
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
