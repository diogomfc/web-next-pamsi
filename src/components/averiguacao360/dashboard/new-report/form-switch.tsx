import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';

interface FormSwitchProps {
  name: string;
  label: string;
  description: string;
  disabled?: boolean;
  checked?: boolean;
}

export function FormSwitch({
  label,
  description,
  name,
  disabled
}: FormSwitchProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-row items-center justify-between pr-3 bg-white border border-blue-100 rounded-lg  hover:border-blue-300  hover:shadow-Input_Form1 ${
            field.value ? 'border-blue-300' : ''
          } `}
        >
          <div
            onClick={() => field.onChange(!field.value)}
            className={`group space-y-0.5 p-3 w-full cursor-pointer ${
              field.value ? 'opacity-100' : 'opacity-80 hover:opacity-100'
            }`}
          >
            <FormLabel
              className={`text-base group-hover:text-lightMode-colors-blue-400 font-medium text-lightMode-colors-blue-400 cursor-pointer ${
                field.value ? '' : 'text-slate-400 '
              }`}
            >
              {label}
            </FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              className=""
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
