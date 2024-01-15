'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

export interface CardListReportProps {
  title: string;
  icon: string;
  qtd?: number;
  link: string;
  children: React.ReactNode;
}

export function CardListReport({
  title,
  icon,
  link,
  children
}: CardListReportProps) {
  return (
    <>
      <div className="flex flex-col justify-center bg-white border-8 item-center rounded-xl borde border-lightMode-colors-blue-100">
        <header className="flex items-center justify-between gap-2 p-4 bg-lightMode-colors-blue-100/50">
          <div className="flex items-center gap-2">
            <Image
              src={icon}
              alt=""
              className="h-[25px] w-[25px]"
              width={25}
              height={25}
            />
            <h1 className="text-base">{title}</h1>
          </div>
          <div className="flex gap-4">
            <Link
              href={link}
              className="flex items-center gap-1 text-sm text-lightMode-colors-blue-400 hover:text-blue-700"
            >
              <span>Ver mais</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>
        <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
        <main className="flex flex-col items-center gap-4 min-h-[220px]">
          {children}
        </main>
      </div>
    </>
  );
}