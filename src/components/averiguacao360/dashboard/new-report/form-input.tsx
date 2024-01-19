import { useMask } from '@react-input/mask';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export interface FormInputProps {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  rightIcon?: ReactNode;
}

export function FormInput({
  name,
  label,
  description,
  placeholder,
  rightIcon
}: FormInputProps) {
  const { control } = useFormContext();

  const inputRef = useMask({
    mask: '__.___.___/____-__',
    replacement: { _: /\d/ }
  });

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="grid items-center grid-cols-4 gap-4">
            <div className="flex flex-col col-span-2  h-[70px]">
              <FormLabel className="text-base font-medium text-lightMode-colors-blue-400">
                {label}
              </FormLabel>
              <FormDescription className="text-xs text-muted-foreground">
                {description}
              </FormDescription>
            </div>
            <div className="col-span-2 h-[70px]">
              <FormControl className="">
                <>
                  <div className="flex items-center">
                    <Input
                      placeholder={placeholder}
                      {...field}
                      ref={name === 'cnpj' ? inputRef : undefined}
                      className={`h-12 pl-5 pr-5 shadow-Box_Form border border-blue-100 bg-white hover:border-blue-200 hover:bg-white hover:shadow-Input_Form1 hover:outline-none focus:border-blue-200 focus:bg-white focus:shadow-Input_Form1 focus:outline-none
                      focus-visible:ring-1 focus-visible:ring-blue-50 focus-visible:ring-opacity-50
                       `}
                    />
                    {rightIcon && (
                      <div className="absolute right-16 text-lightMode-colors-gray-100">
                        {rightIcon}
                      </div>
                    )}
                  </div>
                </>
              </FormControl>
              <div className="p-1">
                <FormMessage className="text-xs" />
              </div>
            </div>
          </FormItem>
        )}
      />
    </>
  );
}
