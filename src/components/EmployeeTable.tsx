// Employee Table Component

import React, { useEffect, useState } from 'react';
import { Employee, fetchEmployees } from '../services/employeeService';
import EmployeeRow from './EmployeeRow';
import SearchBar from './SearchBar';

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
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.phone.includes(searchTerm)
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de Admissão</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
