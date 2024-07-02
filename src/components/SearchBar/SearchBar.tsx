// Search bar component

import React from 'react';

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  return (
    <div className='divtop'>
    <h2>Funcionários</h2>
    <input
      type="text"
      placeholder="Pesquisar"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
