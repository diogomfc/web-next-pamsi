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
}

export function FormInput({
  name,
  label,
  description,
  placeholder
}: FormInputProps) {
  const { control } = useFormContext();

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="grid items-center grid-cols-4 gap-4 px-8 py-2 ">
            <div className="flex flex-col col-span-2  h-[70px]">
              <FormLabel className="text-base font-medium text-lightMode-colors-blue-400">
                {label}
              </FormLabel>
              <FormDescription className="text-xs text-muted-foreground">
                {description}
              </FormDescription>
            </div>
            <div className="h-[70px] col-span-2 ">
              <FormControl className="">
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="h-12 focus-visible:ring-lightMode-colors-blue-300 focus-visible:ring-offset-lightMode-colors-blue-300 focus-visible:ring-opacity-50 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none focus:bg-white"
                />
              </FormControl>
              <div className="p-1">
                <FormMessage className="text-xs " />
              </div>
            </div>
          </FormItem>
        )}
      />
    </>
  );
}
