//import { CheckboxItem } from '../checkbox-item';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import { FormCheckBox } from '../form-checkbox';

const usersResponsaveis = [
  {
    id: '01c09901-b606-419c-bcb4-a975117e35f1',
    nome: 'Analista',
    email: 'analista@analista.com',
    funcao: 'Analista',
    telefone: '11-98110-1705',
    avatar: 'c0e5d0ec62a67e0f5b31-Avatar3.png',
    criado_em: '25-10-2023 16:34:19'
  },
  {
    id: '25d6ecb2-d43d-44a8-a4f5-7b02df37fb9b',
    nome: 'Davi Lucca',
    email: 'davi@analista.com',
    funcao: 'Analista',
    telefone: '11-2525-2525',
    avatar: '1b963d75b9366482eb06-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:45:29'
  },
  {
    id: '57b3d959-d13f-41d0-992b-e8afc257db58',
    nome: 'Admin Pamcary',
    email: 'admin@admin.com',
    funcao: 'Admin',
    telefone: '11-9999-9999',
    avatar: 'b0599ac1bff1257de0fd-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:30:05'
  },
  {
    id: '25d6ecb2-d43d-44a8-a4f5-7b02df37fb9b',
    nome: 'Davi Lucca',
    email: 'davi@analista.com',
    funcao: 'Analista',
    telefone: '11-2525-2525',
    avatar: '1b963d75b9366482eb06-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:45:29'
  },
  {
    id: '57b3d959-d13f-41d0-992b-e8afc257db58',
    nome: 'Admin Pamcary',
    email: 'admin@admin.com',
    funcao: 'Admin',
    telefone: '11-9999-9999',
    avatar: 'b0599ac1bff1257de0fd-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:30:05'
  },
  {
    id: '25d6ecb2-d43d-44a8-a4f5-7b02df37fb9b',
    nome: 'Davi Lucca',
    email: 'davi@analista.com',
    funcao: 'Analista',
    telefone: '11-2525-2525',
    avatar: '1b963d75b9366482eb06-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:45:29'
  },
  {
    id: '57b3d959-d13f-41d0-992b-e8afc257db58',
    nome: 'Admin Pamcary',
    email: 'admin@admin.com',
    funcao: 'Admin',
    telefone: '11-9999-9999',
    avatar: 'b0599ac1bff1257de0fd-HandlerImageDocs.gif',
    criado_em: '25-10-2023 16:30:05'
  }
];

export function SelectUsersNewReport() {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const container = document.getElementById('scroll-container');

    const checkScroll = () => {
      if (container) {
        setIsScrollable(
          container.scrollHeight - container.scrollTop > container.clientHeight
        );
      }
    };

    if (container) {
      container.addEventListener('scroll', checkScroll);
    }
    checkScroll(); // Verifique a rolagem inicial

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  return (
    <div className="p-4 border rounded-lg border-lightMode-colors-blue-100 shadow-Box_Form ">
      <div className="">
        <div className="pb-4">
          <h1 className="text-base font-medium text-lightMode-colors-blue-700">
            Grupo encarregado da averiguação
          </h1>
          <span className="text-xs text-muted-foreground">
            Identifique os analistas autorizados para administrar o relatório
          </span>
        </div>

        <div
          id="scroll-container"
          className="space-y-2 max-h-[300px] overflow-y-auto"
        >
          {usersResponsaveis.map((user) => (
            <FormCheckBox
              key={user.id}
              name_form="usuarios_permitidos"
              users={user}
            />
          ))}
        </div>
        <div className="flex items-center justify-center w-full h-2 text-lightMode-colors-blue-200 ">
          {isScrollable && <ArrowDown className="animate-bounce" size={20} />}
        </div>
      </div>
    </div>
  );
}
