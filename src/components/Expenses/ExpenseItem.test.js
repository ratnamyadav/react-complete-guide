import { render, screen } from '@testing-library/react';
import ExpenseItem from './ExpenseItem';

test('renders learn react link', () => {
  render(<ExpenseItem />);
  const linkElement = screen.getByText(/Expense Item/i);
  expect(linkElement).toBeInTheDocument();
});
