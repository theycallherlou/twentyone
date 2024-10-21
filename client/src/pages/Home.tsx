import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Employee Directory</h1>
      <p>Click below to view the employee list:</p>
      <Link to="/employees">Go to Employee List</Link>
    </div>
  );
}
