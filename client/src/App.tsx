import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetails from './pages/EmployeeDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  );
}
