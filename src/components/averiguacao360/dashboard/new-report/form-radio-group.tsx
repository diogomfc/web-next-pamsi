import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export interface FormRadioGroupProps {
  name: string;
  label: string;
  description?: string;
  options: { value: string; label: string }[];
}

export function FormRadioGroup({
  name,
  label,
  description,
  options
}: FormRadioGroupProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-4 gap-4 ">
          <div className="flex flex-col col-span-2  h-[70px] pt-2">
            <FormLabel className="text-base font-medium text-lightMode-colors-blue-400">
              {label}
            </FormLabel>
            <FormDescription className="text-xs text-muted-foreground">
              {description}
            </FormDescription>
          </div>
          <div className="col-span-2">
            <div className="h-auto pt-4 pb-4 pl-4 rounded-md border-[1px] hover:border-lightMode-colors-blue-200 border-lightMode-colors-blue-100 shadow-Box_Form">
              <FormControl className="">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {options.map((option) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={option.value}
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={option.value}
                          className="focus:border-lightMode-colors-blue-600 border-lightMode-colors-blue-100 hover:border-lightMode-colors-blue-600 "
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal text-muted-foreground">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div className="pl-1">
              <FormMessage className="text-xs " />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
}
