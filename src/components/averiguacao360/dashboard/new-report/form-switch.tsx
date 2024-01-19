import React from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';

interface ReportItemProps {
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
}: ReportItemProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={`flex flex-row items-center justify-between p-3 bg-white border border-blue-100 rounded-lg shadow-Box_Form hover:border-blue-200 hover:bg-white hover:shadow-Input_Form1 hover:outline-none focus:border-blue-200 focus:bg-white focus:shadow-Input_Form1 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-50 focus-visible:ring-opacity-50 ${
            field.value ? 'border-blue-200 bg-white shadow-Input_Form1' : ''
          }}`}
        >
          <div className="space-y-0.5 hover:text-lightMode-colors-blue-400 ">
            <FormLabel
              className={`text-base font-medium text-lightMode-colors-blue-400 cursor-pointer ${
                field.value
                  ? ''
                  : 'text-slate-400 hover:text-lightMode-colors-blue-400'
              }`}
            >
              {label}
            </FormLabel>
            <FormDescription className={`${field.value ? '' : 'opacity-75'}`}>
              {description}
            </FormDescription>
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
