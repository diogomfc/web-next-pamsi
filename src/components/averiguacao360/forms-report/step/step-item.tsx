import { FilePdf, Hourglass } from '@phosphor-icons/react';
import { ButtonHTMLAttributes, ReactElement } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

export type StepProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IStepProps extends StepProps {
  step: string;
  icon?: ReactElement;
  formName: string;
  status: string;
}

export function Step(props: IStepProps) {
  // const getButtonStyles = () => {
  //   switch (props.status) {
  //     case 'Pendente':
  //       return `
  //       relative flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 to-blue-900 text-lg text-blue-50 transition-colors duration-200 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-900 focus:outline-none
  //     `;
  //     case 'completed':
  //       return `
  //       relative flex h-[40px] w-[40px] items-center justify-center rounded-full border
  //       border-blue-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 to-blue-500 text-lg text-blue-50 transition-colors duration-200 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-900 focus:outline-none
  //     `;
  //     case 'disabled':
  //       return `
  //       relative flex h-[40px] w-[40px] items-center justify-center rounded-full border
  //       border-blue-300/20 bg-blue-900 text-lg text-blue-50/40 transition-colors duration-200 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-900 focus:outline-none
  //     `;
  //     case 'revision':
  //       return `
  //       relative flex h-[40px] w-[40px] items-center justify-center rounded-full border
  //       border-orange-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B7016] to-orange-500 text-lg text-blue-50 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-300 hover:text-blue-900 focus:outline-none
  //     `;
  //     case 'correction':
  //       return `
  //       relative flex h-[40px] w-[40px] items-center justify-center rounded-full border
  //       border-red-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-700 text-lg text-blue-50 transition-colors duration-200 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-900 focus:outline-none
  //     `;
  //     case 'finish':
  //       return `
  //       relative flex h-[40px] w-[40px] items-center justify-center rounded-full border
  //       border-green-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 to-green-700 text-lg text-blue-50 transition-colors duration-200 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-900 focus:outline-none
  //     `;
  //   }
  // };

  return (
    <div className="relative z-10 flex items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`${
                props.status === 'Formalizando'
                  ? ' h-[40px] w-[40px] items-center justify-center rounded-full border border-dashed border-white bg-lightMode-colors-blue-400 text-white'
                  : ''
              }`}
              {...props}
            >
              <span className="relative flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] border border-lightMode-colors-blue-400 from-lightMode-colors-blue-100 to-white text-base text-lightMode-colors-blue-400 transition-colors duration-200 hover:border-lightMode-colors-blue-400 hover:bg-blue-50 hover:text-blue-900 focus:outline-none ">
                {props.formName === 'Revisão' ? (
                  <Hourglass size={22} weight="duotone" />
                ) : props.formName === 'Relatório emitido' ? (
                  <FilePdf size={22} weight="duotone" />
                ) : (
                  `${props.step}`
                )}
              </span>
            </button>
          </TooltipTrigger>

          <TooltipContent
            className="text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideUpAndFade"
            sideOffset={5}
            side="bottom"
          >
            {props.formName}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
