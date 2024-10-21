import { render, screen, waitFor } from '@testing-library/react';
import EmployeeList from './EmployeeList';
import { getEmployees } from '../services/employees';
import { MemoryRouter } from 'react-router-dom';
import { vi, describe, test, expect } from 'vitest';

vi.mock('../services/employees', () => ({
  getEmployees: vi.fn()
}));

vi.mock('../services/employees', () => ({
  getEmployees: vi.fn().mockRejectedValue(new Error('API Failure'))
}));

describe('EmployeeList', () => {
  const mockEmployees = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  test('renders employee data', async () => {
    vi.mocked(getEmployees).mockResolvedValue(mockEmployees);

    render(
      <MemoryRouter>
        <EmployeeList />
      </MemoryRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText((content: string) => {
          return content.includes('John Doe');
        })
      ).toBeInTheDocument();
    });

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  test('renders error message', async () => {
    vi.mocked(getEmployees).mockRejectedValue(new Error('API Failure'));

    render(<EmployeeList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText(/failed to fetch employee data/i)
      ).toBeInTheDocument();
    });

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});
