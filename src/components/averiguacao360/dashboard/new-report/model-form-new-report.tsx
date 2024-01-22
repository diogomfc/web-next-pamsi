import { AlertCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type Step = {
  label: string;
  Component: React.ReactNode;
  hasError: boolean;
};

type StepsNewReportProps = {
  items: Step[];
};

export function ModelFormNewReport({ items }: StepsNewReportProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const isLastStep = activeStep === items.length - 1;

  return (
    <div className="bg-white">
      <header className="flex items-center justify-between gap-2 px-8 py-4 bg-lightMode-colors-blue-50">
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
        {/* <span className='pr-8 text-sm'>Etapa {step} de 3</span> */}
      </header>
      <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" />
      {/* Stepper */}
      <main className="flex items-center justify-center gap-8 pt-4 pb-2">
        {items.map(({ label, hasError }, index) => (
          <div key={label} className="flex items-center gap-4">
            {hasError ? (
              <AlertCircle
                onClick={() => setActiveStep(index)}
                className="w-8 h-8 mx-auto cursor-pointer text-destructive"
              />
            ) : (
              <div
                onClick={() => setActiveStep(index)}
                className={`flex items-center cursor-pointer justify-center w-8 h-8 rounded-full border-2 border-blue-500 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  activeStep === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500/50 border-blue-500/50'
                } `}
              >
                <span>{index + 1}</span>
              </div>
            )}
            {hasError ? (
              <span className="text-sm text-destructive">{label}</span>
            ) : (
              <span
                className={`text-sm ${
                  activeStep === index ? 'text-blue-500' : 'text-blue-500/50'
                }`}
              >
                {label}
              </span>
            )}
          </div>
        ))}
      </main>

      {/* Component form inputs */}
      <div className="px-8 py-2">{items[activeStep].Component}</div>

      {/* Footer Buttons */}
      <footer className="flex flex-col ">
        {/* <span className="pb-2 text-xs text-center text-muted-foreground">
          Preencha corretamente todos os campos para garantir o registro preciso
          e eficiente das informações.{' '}
          <span className="cursor-pointer text-lightMode-colors-blue-300 hover:text-lightMode-colors-blue-600 hover:underline">
            Central de Ajuda
          </span>
        </span> */}
        {/* <Separator className="h-1 bg-gradient-to-r from-white via-lightMode-colors-blue-200 to-white" /> */}
        <div className="flex items-center justify-end gap-2 px-8 h-[50px] bg-lightMode-colors-blue-50">
          <Button
            variant="ghost"
            disabled={activeStep === 0}
            onClick={handleBack}
            className="flex items-center gap-1 text-sm text-lightMode-colors-blue-700 hover:text-lightMode-colors-blue-600"
          >
            <ArrowLeft className="w-4 h-4 " />
            <span>Voltar</span>
          </Button>

          {isLastStep ? (
            <Button
              type="submit"
              key="enviar"
              className="px-2 py-1 text-white border rounded bg-lightMode-colors-blue-500 hover:bg-lightMode-colors-blue-400 "
            >
              Gerar relatório
            </Button>
          ) : (
            <Button
              type="button"
              key="proximo"
              onClick={handleNext}
              className="px-2 py-1 text-white border rounded bg-lightMode-colors-blue-500 hover:bg-lightMode-colors-blue-400 "
            >
              Continuar
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
