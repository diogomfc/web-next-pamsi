/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';

interface CheckboxItemProps {
  name: string;
  item: { id: string; label: string };
}

export const CheckboxItem = ({ name, item }: CheckboxItemProps) => {
  const { control } = useFormContext();

  const handleCheckedChange = (field: any, checked: boolean) => {
    if (checked) {
      field.onChange([...field.value, item.id]);
    } else {
      field.onChange(field.value?.filter((value: string) => value !== item.id));
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value?.includes(item.id)}
              onCheckedChange={(checked) =>
                handleCheckedChange(field, checked as boolean)
              }
            />
          </FormControl>
          <FormLabel className="font-normal">{item.label}</FormLabel>
        </FormItem>
      )}
    />
  );
};
