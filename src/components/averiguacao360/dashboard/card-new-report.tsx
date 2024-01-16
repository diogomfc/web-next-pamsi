'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

import { FormNewReport } from './new-report/form-new-report';

//import { FormNewReport } from './new-report/form-new-report';

export interface CardButtonProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  qtd: string | number;
  status?: 'aprovados' | 'correcao' | 'formalizacao' | 'revisao';
}

export function CardNewReport({
  title,
  description,
  icon,
  link,
  qtd
}: CardButtonProps) {
  return (
    <>
      <div className="flex flex-col justify-center bg-white border-8 item-center rounded-xl border-lightMode-colors-blue-100">
        <header className="flex items-center gap-2 p-4 bg-lightMode-colors-blue-100/50">
          <Image src={icon} alt="" width={20} height={20} />
          <h1 className="text-base">{title}</h1>
        </header>
        <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
        <main className="flex flex-col items-center justify-center min-h-[220px] gap-4">
          <Link
            href={link}
            className="box-border relative flex flex-col items-center p-4 rounded-lg bg-lightMode-colors-blue-100"
          >
            <Image src={icon} alt="" width={50} height={50} />

            <div className="absolute shadow-lg rounded-full bottom-[-8px] right-[-16px] h-8 w-8 bg-white border-lightMode-colors-blue-200 p-2 flex items-center justify-center">
              <span className="text-xs font-semibold text-light-status-info">
                {qtd}
              </span>
            </div>
          </Link>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-xl font-medium">{description}</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="px-2 py-1 border rounded text-lightMode-colors-blue-500 border-lightMode-colors-blue-300 bg-lightMode-colors-white hover:bg-lightMode-colors-blue-500 hover:text-white">
                  Criar Relatório
                </Button>
              </DialogTrigger>

              <DialogContent className="flex max-w-[840px] flex-col justify-center w-full gap-0 p-0 border-8 item-center bg-white rounded-xl borde border-lightMode-colors-blue-200">
                <FormNewReport />
              </DialogContent>
            </Dialog>
          </div>
        </main>
      </div>
    </>
  );
}
