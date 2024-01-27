import Image from 'next/image';
import Link from 'next/link';

export interface CardStepStatusReportProps {
  description: string;
  status: 'Revisao' | 'Aprovado' | 'Emitido' | 'Corrigir';

  qtd: number;
  link: string;
}

export function CardStepStatusReport({
  description,
  status,
  qtd,
  link
}: CardStepStatusReportProps) {
  return (
    <div className="border rounded-md border-lightMode-colors-blue-200">
      <div className="flex flex-col justify-center bg-white border-8 rounded-md item-center border-lightMode-colors-blue-100">
        <main className="flex flex-col items-center gap-4 pt-4  min-h-[280px]">
          <div className="flex flex-col items-center justify-center pt-2">
            {status === 'Aprovado' && (
              <>
                <Image
                  src="/img/averiguacao360/imgs/img-status-report-aprovados.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Status Report aprovado"
                />
                <div className="relative top-8 shadow-sm shadow-[#20A6B9] rounded-full h-[80px] w-[80px] bg-white border border-lightMode-colors-blue-100 p-[2px] flex items-center justify-center">
                  <span className="text-3xl font-semibold text-lightMode-colors-blue-700">
                    {qtd}
                  </span>
                </div>
              </>
            )}
            {status === 'Corrigir' && (
              <>
                <Image
                  src="/img/averiguacao360/imgs/img-status-report-correcao.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Status Report correção"
                />
                <div className="relative top-8 shadow-sm shadow-lightMode-colors-red-default rounded-full h-[80px] w-[80px] bg-light border border-lightMode-colors-blue-100 p-[2px] flex items-center justify-center">
                  <span className="text-3xl font-semibold text-light-status-danger">
                    {qtd}
                  </span>
                </div>
              </>
            )}
            {status === 'Revisao' && (
              <>
                <Image
                  src="/img/averiguacao360/imgs/img-status-report-revisao.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Reports em revisao"
                />
                <div className="relative top-8 shadow-sm shadow-[#FFA000] rounded-full h-[80px] w-[80px] bg-light border border-lightMode-colors-blue-100 p-[2px] flex items-center justify-center">
                  <span className="text-3xl font-semibold ">{qtd}</span>
                </div>
              </>
            )}
            {status === 'Emitido' && (
              <>
                <Image
                  src="/img/averiguacao360/imgs/img-status-report-emitidos.svg"
                  className="absolute"
                  height={180}
                  width={180}
                  alt="Status Report Emitido"
                />
                <div className="relative top-8 shadow-sm shadow-lightMode-colors-blue-300 rounded-full h-[80px] w-[80px] bg-light border border-lightMode-colors-blue-100 p-[2px] flex items-center justify-center">
                  <span className="text-3xl font-semibold">{qtd}</span>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 pt-8">
            <span className="text-base  font-bold flex justify-center items-center  text-center w-[200px] h-[60px]">
              {description}
            </span>
            <Link
              href={link}
              className={`px-2 py-1 border rounded bg-white hover:text-white ${
                status === 'Aprovado'
                  ? ' text-[#20A6B9] border-[#20A6B9] hover:bg-[#20A6B9]'
                  : status === 'Revisao'
                    ? 'text-[#FFA000] border-[#FFA000]  hover:bg-[#FFA000]'
                    : status === 'Corrigir'
                      ? 'text-lightMode-colors-red-default border-lightMode-colors-red-default hover:bg-lightMode-colors-red-default'
                      : 'text-lightMode-colors-blue-500 border-lightMode-colors-blue-300 hover:bg-lightMode-colors-blue-500'
              }`}
            >
              <span>Gerenciar</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
