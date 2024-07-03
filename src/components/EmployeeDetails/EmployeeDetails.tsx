import React, { useState } from 'react';
import { Employee } from '../../services/employeeService';
import './EmployeeDetails.css';

interface EmployeeDetailsProps {
  employee: Employee;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({ employee }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="employee-details">
      <div className="employee-summary" onClick={toggleExpand}>
        <img src={employee.image} alt={employee.name} width="50" />
        <span>{employee.name}</span>
        <button className="expand-btn">
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
      {isExpanded && (
        <div className="employee-expanded">
          <p><strong>Cargo:</strong> {employee.job}</p>
          <p><strong>Data de admissão:</strong> {formatDate(employee.admission_date)}</p>
          <p><strong>Telefone:</strong> {employee.phone}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
