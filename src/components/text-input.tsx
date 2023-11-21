import React, { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister, FieldValues } from 'react-hook-form';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

interface TextInputRootProps<T extends FieldValues>
  extends TextInputInputProps {
  alert?: string;
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
}

export function TextInput<T extends FieldValues>({
  alert,
  label,
  name,
  register,
  required,
  ...props
}: TextInputRootProps<T>) {
  return (
    <div className="relative">
      <input
        className={`
       peer h-[64px] w-full cursor-default rounded-sm border border-ligthMode-colors-blue-200 bg-THEME-colors-white px-5 pt-3 text-base font-medium text-THEME-colors-blue-800 placeholder-transparent hover:border-THEME-colors-blue-400 hover:bg-THEME-colors-white
       hover:shadow-input-form-login hover:outline-none focus:border-THEME-colors-blue-400 focus:bg-white
       focus:shadow-input-form-login focus:outline-none
       ${alert ? 'border-red-500 bg-red-500/10' : 'border-blue-50'}
       ${props.value ? ' ' : 'border border-THEME-colors-blue-200'}
       `}
        {...props}
        {...register(name, { required: required })}
      />
      {alert && (
        <span className="absolute -bottom-5 left-5 text-[12px] text-red-500">
          {alert}
        </span>
      )}
      <label
        className={`
       ${
         props.value
           ? ' absolute left-5 top-2 text-[12px] text-THEME-colors-blue-400'
           : ' absolute left-5 top-2 text-[12px] text-THEME-colors-blue-400 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-[16px] peer-placeholder-shown:font-light peer-placeholder-shown:text-THEME-colors-blue-700/90 peer-focus:top-2 peer-focus:text-[12px] peer-focus:text-THEME-colors-blue-700/90'
       }
    
      `}
      >
        {label}
      </label>
    </div>
  );
}
