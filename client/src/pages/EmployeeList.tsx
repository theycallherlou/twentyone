import { useEffect, useState } from 'react';
import { getEmployees } from '../services/employees';
import { Link } from 'react-router-dom';

interface Employee {
  id: number;
  name: string;
  email: string;
}

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee: Employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              {employee.name} - {employee.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
