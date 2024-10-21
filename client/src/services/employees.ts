import axios from 'axios';

const API_URL =
  import.meta.env.VITE_APP_API_URL || 'http://localhost:3000/api/v1';

export const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data.employees;
};

export const getEmployeeById = async (id: number) => {
  const response = await axios.get(`${API_URL}/employees/${id}`);
  return response.data.employee;
};
