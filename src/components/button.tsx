// Defina suas variantes de botão
const buttonVariants = {
  primary:
    'w-full py-8 mt-5 text-base font-semibold text-white rounded-md bg-lightMode-colors-blue-400 hover:bg-lightMode-colors-blue-300',
  secondary:
    'w-full py-8 mt-5 text-base font-semibold text-white rounded-md bg-lightMode-colors-green-400 hover:bg-lightMode-colors-green-300',
  tertiary:
    'w-full py-8 mt-5 text-base font-semibold text-white rounded-md bg-lightMode-colors-red-400 hover:bg-lightMode-colors-red-300',
  neutro:
    'w-full py-8 mt-5 text-base font-semibold text-white rounded-md bg-lightMode-colors-blue-400 hover:bg-lightMode-colors-blue-300'
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonVariants;
  name: string;
}

export function Button({ variant, name, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants[variant]} {...props}>
      {name}
    </button>
  );
}
