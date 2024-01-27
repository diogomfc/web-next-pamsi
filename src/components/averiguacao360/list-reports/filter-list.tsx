'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

interface FilterLinkProps {
  name: string;
  activeFilter: string;
  setActiveFilter: (name: string) => void;
}

const FilterLink = ({
  name,
  activeFilter,
  setActiveFilter
}: FilterLinkProps) => (
  <Button
    variant="ghost"
    className={`pr-4 text-xs py-2 bg-transparent rounded-none hover:text-blue-500 hover:bg-transparent ${
      activeFilter === name ? 'text-blue-500' : 'text-lightMode-colors-blue-700'
    }`}
    onClick={() => setActiveFilter(name)}
  >
    {name}
  </Button>
);

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  return (
    <div className="flex items-end ">
      <div className="flex items-center ">
        {[
          'Todos',
          'Formalizando',
          'Revisando',
          'Emitidos',
          'Correção',
          'Recuperado',
          'Irreversíveis'
        ].map((filterName) => (
          <FilterLink
            key={filterName}
            name={filterName}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
