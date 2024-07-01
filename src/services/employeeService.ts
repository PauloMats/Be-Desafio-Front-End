// employee service

export interface Employee {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
  }
  
  export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await fetch('http://localhost:5000/employees');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };