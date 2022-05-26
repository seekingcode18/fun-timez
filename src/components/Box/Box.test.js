import { render, screen } from '@testing-library/react';
import Box from './Box';

it('renders cell', () => {
  render(<Box />);
  const spanElement = screen.getByRole('gridcell');
  expect(spanElement).toBeInTheDocument();
});

it('highlights correct cell', () => {
  render(<Box isHighlighted={true} />);
  const spanElement = screen.getByRole('gridcell');
  expect(spanElement).toHaveAttribute('aria-selected', 'true');
});

it('does not highlight incorrect cell', () => {
  render(<Box isHighlighted={false} />);
  const spanElement = screen.getByRole('gridcell');
  expect(spanElement).toHaveAttribute('aria-selected', 'false');
});

it('selects correct cell', () => {
  render(<Box isSelected={true} />);
  const spanElement = screen.getByRole('gridcell');
  expect(spanElement).toHaveAttribute('aria-current', 'true');
});

it('does not select incorrect cell', () => {
  render(<Box isSelected={false} />);
  const spanElement = screen.getByRole('gridcell');
  expect(spanElement).toHaveAttribute('aria-current', 'false');
});

it('renders cell with correct text', () => {
  render(<Box number={5} />);
  const cellElement = screen.getByText(/5/i);
  expect(cellElement).toBeInTheDocument();
});
