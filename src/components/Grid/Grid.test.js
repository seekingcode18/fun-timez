import { render, screen } from '@testing-library/react';
import Grid from './Grid';

it('renders grid', () => {
  render(<Grid />);
  const mainElement = screen.getByRole('grid');
  expect(mainElement).toBeInTheDocument();
});

it('renders correct number of cells', () => {
  render(<Grid total={144} />);
  const cellElements = screen.getAllByRole('gridcell');
  expect(cellElements.length).toBe(144);
});
