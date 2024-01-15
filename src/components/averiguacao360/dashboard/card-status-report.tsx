'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

export interface CardStatusReportProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export interface ItemCardStatusProps {
  qtd: number;
  statusConclusao: 'recuperado' | 'irreversivel';
  description: string;
  link: string;
}

export function CardStatusReport({
  title,
  icon,
  children
}: CardStatusReportProps) {
  return (
    <>
      <div className="flex flex-col justify-center bg-white border-8 item-center rounded-xl borde border-lightMode-colors-blue-100">
        <header className="flex items-center gap-2 p-4 bg-lightMode-colors-blue-100/50">
          <Image src={icon} width={20} height={20} alt="" />
          <h1 className="text-base">{title}</h1>
        </header>
        <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
        <main className="flex flex-col items-center justify-center min-h-[220px] gap-4">
          {children}
        </main>
      </div>
    </>
  );
}

export function ItemCardStatus({
  qtd,
  statusConclusao,
  link,
  description
}: ItemCardStatusProps) {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div
        className={`relative box-border flex flex-col h-[100px] w-[100px] rounded-full items-center justify-center shadow-lg text-xl font-bold text-white  bg-white border border-lightMode-colors-blue-100 ${
          statusConclusao === 'recuperado'
            ? 'shadow-lightMode-colors-green-500'
            : 'shadow-lightMode-colors-red-default '
        }`}
      >
        <Image
          src={
            statusConclusao === 'irreversivel'
              ? '/img/averiguacao360/imgs/img-status-report-irreversivel.svg'
              : '/img/averiguacao360/imgs/img-status-report-recuperado.svg'
          }
          width={70}
          height={70}
          alt="Status Report"
        />
        <span className="absolute">{qtd}</span>
      </div>

      <span className="text-xl font-medium">{description}</span>
      <Link
        href={link}
        className="flex items-center justify-center p-2 text-sm bg-white border rounded-md border-lightMode-colors-blue-300 hover:bg-lightMode-colors-blue-500 text-lightMode-colors-blue-500 hover:text-white"
      >
        Acessar
      </Link>
    </div>
  );
}
