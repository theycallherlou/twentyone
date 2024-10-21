import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/employees';

interface Employee {
  id: number;
  name: string;
  email: string;
}

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      if (id) {
        const data = await getEmployeeById(Number(id));
        setEmployee(data);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Employee Details</h1>
      {employee && (
        <div>
          <p>Name: {employee.name}</p>
          <p>Email: {employee.email}</p>
        </div>
      )}
    </div>
  );
}
