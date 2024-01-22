/* eslint-disable @typescript-eslint/no-explicit-any */
import { Contact2, Mail, PhoneCall } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

interface FormCheckBoxProps {
  name_form: string;
  disabled?: boolean;
  checked?: boolean;
  users: {
    id: string;
    nome: string;
    email: string;
    funcao: string;
    telefone: string;
    avatar: string;
  };
}

export function FormCheckBox({
  name_form,
  disabled,
  users
}: FormCheckBoxProps) {
  const { control } = useFormContext();

  const handleCheckedChange = (field: any, checked: boolean) => {
    if (checked) {
      field.onChange([...field.value, users.id]);
    } else {
      field.onChange(
        field.value?.filter((value: string) => value !== users.id)
      );
    }
  };

  return (
    <FormField
      control={control}
      name={name_form}
      render={({ field }) => (
        <FormItem
          key={users.id}
          className={`flex flex-row items-center justify-between pr-3 bg-white border border-blue-100 rounded-lg  hover:border-blue-300  hover:shadow-Input_Form1 ${
            field.value?.includes(users.id) ? 'border-blue-300' : ''
          } `}
        >
          <div
            onClick={() =>
              handleCheckedChange(field, !field.value?.includes(users.id))
            }
            className={`group space-y-0.5 cursor-pointer p-3 w-full flex gap-4 items-center  ${
              field.value?.includes(users.id)
                ? 'opacity-100'
                : 'opacity-80 hover:opacity-100'
            }`}
          >
            <Avatar>
              {users.avatar && (
                <AvatarImage
                  src={`http://localhost:3333/images/avatar/${users.avatar}`}
                  alt="Avatar"
                />
              )}
              <AvatarFallback title={users.nome} className="cursor-pointer">
                {users.nome.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center gap-2 ">
              <FormLabel
                className={`text-base font-medium  cursor-pointer group-hover:text-lightMode-colors-blue-400  ${
                  field.value?.includes(users.id)
                    ? 'text-lightMode-colors-blue-400'
                    : 'text-slate-400 '
                } `}
              >
                {users.nome}
                <>
                  <span className="pl-2 font-mono text-xs sr-only">
                    {users.id}
                  </span>
                  <FormMessage />
                </>
              </FormLabel>
              <FormDescription className={`flex gap-4 pb-2`}>
                <div className="flex items-center gap-2">
                  <Contact2 size={16} />
                  <span>{users.funcao}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{users.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={16} />
                  <span>{users.telefone}</span>
                </div>
              </FormDescription>
            </div>
          </div>
          <FormControl className="">
            <div className="flex items-center pb-2 ">
              <Checkbox
                checked={field.value?.includes(users.id)}
                onCheckedChange={(checked) =>
                  handleCheckedChange(field, checked as boolean)
                }
                disabled={disabled}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
