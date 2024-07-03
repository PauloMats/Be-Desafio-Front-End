import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  return (
    <div className="search-container">
      <h2>Funcionários</h2>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="search-icon">🔍︎</span>
      </div>
    </div>
  );
};

export default SearchBar;
