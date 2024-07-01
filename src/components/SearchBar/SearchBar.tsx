// Search bar component

import React from 'react';

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  return (
    <div className='divtop'>
    <h1>Funcionários</h1>
    <input
      type="text"
      placeholder="Pesquisar"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
