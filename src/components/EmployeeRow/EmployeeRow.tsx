import React from 'react';
import { Employee } from '../../services/employeeService';
import './EmployeeRow.css';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

interface EmployeeRowProps {
  employee: Employee;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  return (
    <>
      <tr className="desktop-row">
        <td><img src={employee.image} alt={employee.name} width="50" /></td>
        <td>{employee.name}</td>
        <td>{employee.job}</td>
        <td>{formatDate(employee.admission_date)}</td>
        <td>{employee.phone}</td>
      </tr>
      <tr className="mobile-row">
        <td colSpan={5}>
          <EmployeeDetails employee={employee} />
        </td>
      </tr>
    </>
  );
};

export default EmployeeRow;
