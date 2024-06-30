import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Funcionários</h1>
      </header>
      <EmployeeTable />
    </div>
  );
};

export default App;
