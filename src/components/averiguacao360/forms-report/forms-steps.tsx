import { FilePdf } from '@phosphor-icons/react';
import { useSearchParams } from 'next/navigation';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { AnimatePulseStepItem } from './step/animate-pulse-step-item';

export interface FormsStepsProps {
  step: string;
  status: string;
  formName: string;
  //active?: string;
}

export function FormsSteps({ status, step, formName }: FormsStepsProps) {
  const searchParams = useSearchParams();
  const etapa = searchParams.get('etapa');

  return (
    <div className="z-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={`flex z-10 items-center justify-center w-10 h-10 border rounded-full cursor-pointer
      ${
        status === 'Pendente'
          ? 'border-lightMode-colors-blue-400 bg-white text-lightMode-colors-blue-400'
          : status === 'Formalizando'
            ? 'border-lightMode-colors-blue-300 bg-lightMode-colors-blue-300 text-white'
            : status === 'Finalizado'
              ? 'border-lightMode-colors-blue-600 bg-lightMode-colors-blue-600 text-white'
              : status === 'Aprovado'
                ? 'border-lightMode-colors-green-400 bg-lightMode-colors-green-400  text-white'
                : status === 'Corrigir'
                  ? 'border-lightMode-colors-red-default bg-lightMode-colors-red-default text-white'
                  : 'border-lightMode-colors-red-dark bg-lightMode-colors-red-dark text-white'
      } 
      `}
            >
              <div className="flex flex-col items-center justify-center">
                {etapa === step ? (
                  <>
                    <span className="relative z-10 top-5">{step}</span>
                    <AnimatePulseStepItem />
                  </>
                ) : (
                  <span className="">
                    {step === '17' ? (
                      <FilePdf size={22} weight="duotone" />
                    ) : (
                      step
                    )}
                  </span>
                )}
              </div>
            </div>
          </TooltipTrigger>

          <TooltipContent
            className="text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideUpAndFade"
            sideOffset={5}
            side="bottom"
          >
            {formName}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
