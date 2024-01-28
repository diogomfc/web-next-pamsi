import { usePathname } from 'next/navigation';

export interface FormsStepsProps {
  status: string;
  step: string;
  formName: string;
  variants: string;
  children?: React.ReactNode;
}

export function FormsSteps({
  children,
  status,
  step,
  formName,
  variants
}: FormsStepsProps) {
  const pathname = usePathname();
  return (
    <div
      data-active={pathname === formName}
      className="flex items-center justify-center w-10 h-10 border rounded-full bg-lightMode-colors-blue-600 border-lightMode-colors-blue-200"
    >
      {step}
    </div>
  );
}
