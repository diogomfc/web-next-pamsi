import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import * as z from 'zod';

import { AuthContext } from '@/contexts/AuthContext';

import { TextInput } from '../text-input';
import { Button } from '../ui/button';

export default function LoginForm() {
  const { signIn, authErrors } = useContext(AuthContext);

  const schema = z.object({
    email: z.string().email({ message: 'E-mail inválido' }),
    senha: z
      .string()
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  });
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors: formErrors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const { isSubmitting } = formState;

  type FormValues = z.infer<typeof schema>;

  const handleSignIn: SubmitHandler<FormValues> = async (data) => {
    try {
      //await new Promise((resolve) => setTimeout(resolve, 10000));
      await signIn({ email: data.email, senha: data.senha });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputFocus = () => {
    authErrors.length > 0 && authErrors.splice(0, authErrors.length);
  };

  return (
    <div className="relative flex items-center justify-center w-1/2 bg-liner-Login">
      <div className="relative z-10 w-[500px] rounded-lg shadow-md bg-lightMode-colors-white bg-form-login-texture border border-lightMode-colors-blue-200">
        <div className="flex flex-col items-center w-full p-10 border-8 rounded-lg border-lightMode-colors-blue-100">
          <div className="mb-10">
            <Image
              src="../../img/logo.svg"
              alt="Logo Pamcary SI"
              width={300}
              height={200}
            />
          </div>

          <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>
            <div className="mb-4">
              <TextInput
                type="email"
                label="E-mail"
                name="email"
                defaultValue={''}
                placeholder="E-mail"
                register={register}
                alert={formErrors.email ? formErrors.email.message : ''}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="my-8">
              <TextInput
                type="password"
                label="Password"
                name="senha"
                placeholder="Password"
                defaultValue={''}
                register={register}
                alert={formErrors.senha ? formErrors.senha.message : ''}
                onFocus={handleInputFocus}
              />
            </div>
            {/* CheckBox para relembrar a senha */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 border border-gray-300 rounded-md text-lightMode-colors-blue-400 focus:ring-lightMode-colors-blue-400"
              />
              <label className="text-sm text-gray-500">Remember me</label>
            </div>
            {authErrors.map((error) => (
              <span
                key={error.message}
                className="pl-4 text-xs text-lightMode-colors-red-default"
              >
                {error.message}
              </span>
            ))}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-8 mt-5 text-base font-semibold text-white rounded-md bg-lightMode-colors-blue-400 hover:bg-lightMode-colors-blue-300"
            >
              {isSubmitting ? (
                <span className="pt-1">
                  <BeatLoader color="#ffffff" size={15} />
                </span>
              ) : (
                <span className="">Entrar</span>
              )}
            </Button>
          </form>

          <div className="flex flex-col items-center">
            <div className="mt-2">
              <a
                href="#"
                className="text-sm font-light text-lightMode-colors-blue-400 hover:underline"
              >
                Não possui conta? Crie uma agora!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-cover h-1/2 bg-footer-login-bg"></div>
    </div>
  );
}
