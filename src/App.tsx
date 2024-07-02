import React from 'react';
import EmployeeTable from './components/Table/EmployeeTable';
import Header from './components/Header/Header';
import './App.css';

const App: React.FC = () => { 
  return (
    <div className="App">
      <Header />
      <EmployeeTable />
    </div>
  );
};

export default App;
