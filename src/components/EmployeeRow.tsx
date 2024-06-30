// EmpoyeeRow component

import React from 'react';
import { Employee } from '../services/employeeService';

interface EmployeeRowProps {
  employee: Employee;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    <tr>
      <td><img src={employee.photo} alt={employee.name} width="50" /></td>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      <td>{formatDate(employee.admissionDate)}</td>
      <td>{employee.phone}</td>
    </tr>
  );
};

export default EmployeeRow;
