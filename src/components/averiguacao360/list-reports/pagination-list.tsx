import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground">
        Total de {totalCount} relatórios
      </span>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="text-xs font-medium">
            Página {pageIndex + 1} de {pages}
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <Button variant={'outline'} className="w-6 h-6 p-0">
            <ChevronsLeft className="w-4 h-4" />
            <span className="text-xs sr-only ">Primeira página</span>
          </Button>
          <Button variant={'outline'} className="w-6 h-6 p-0">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-xs sr-only">Próxima página</span>
          </Button>
          <Button variant={'outline'} className="w-6 h-6 p-0">
            <ChevronRight className="w-4 h-4" />
            <span className="text-xs sr-only">Página anterior</span>
          </Button>
          <Button variant={'outline'} className="w-6 h-6 p-0">
            <ChevronsRight className="w-4 h-4" />
            <span className="text-xs sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
