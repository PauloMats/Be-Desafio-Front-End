import React, { useEffect, useState } from 'react';
import { Employee, fetchEmployees } from '../../services/employeeService';
import EmployeeRow from '../EmployeeRow/EmployeeRow';
import SearchBar from '../SearchBar/SearchBar';
import './EmployeeTable.css';

const EmployeeTable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const getEmployees = async () => {
      const employees = await fetchEmployees();
      setEmployees(employees);
    };

    getEmployees();
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.phone.includes(searchTerm)
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Tabela normal */}
      <div className="table-container">
        <table className="desktop-table">
          <thead>
            <tr>
              <th>FOTO</th>
              <th>NOME</th>
              <th>CARGO</th>
              <th>DATA DE ADMISSÃO</th>
              <th>TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>

        {/* Tabela móvel */}
        <table className="mobile-table">
          <thead>
            <tr>
              <th>FOTO</th>
              <th>NOME</th>
              <th> ‎ ‎  ‎   ‎     ●</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
