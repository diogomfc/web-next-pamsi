//import { CheckboxItem } from '../checkbox-item';
import { ArrowDown } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

import { AuthContext } from '@/contexts/AuthContext';
import userService from '@/services/users-services';
import { Usuario } from '@/types/userTypes';

import { FormCheckBox } from '../form-checkbox';

export function SelectUsersNewReport() {
  const { usuario } = useContext(AuthContext);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<Usuario[]>([]);

  useEffect(() => {
    const requestAllUsers = async () => {
      setIsLoading(true);
      const allUsersResponse = await userService.getAllUsers();
      const otherUsersFilter = await allUsersResponse.filter(
        (user: Usuario) => user.id !== usuario?.id
      );
      setUserData(otherUsersFilter);
      setIsLoading(false);
    };
    requestAllUsers();
  }, [usuario?.id]);

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
          {isLoading && (
            <div className="flex items-center justify-center w-full h-32">
              <BeatLoader color="#BDD7F1" />
            </div>
          )}
          {userData.map((user) => (
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
