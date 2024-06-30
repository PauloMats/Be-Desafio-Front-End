// employee service

export interface Employee {
    id: number;
    name: string;
    position: string;
    admissionDate: string;
    phone: string;
    photo: string;
  }
  
  export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await fetch('http://localhost:5000/employees');
    return response.json();
  };
  