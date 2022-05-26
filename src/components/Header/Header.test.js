import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders correct heading text', () => {
  render(<Header title='FunTimez' />);
  const headerElement = screen.getByText(/funtimez/i);
  expect(headerElement).toBeInTheDocument();
});

it('renders correct heading text as a heading', () => {
  render(<Header title='FunTimez' />);
  const headerElement = screen.getByRole('heading', {name: 'FunTimez'});
  expect(headerElement).toBeInTheDocument();
});

it('renders correct instructions text', () => {
  render(<Header instructions='do something' />);
  const headerElement = screen.getByText(/do something/i);
  expect(headerElement).toBeInTheDocument();
});

it('renders correct tagline text', () => {
  render(<Header tagline='learn multiplication' />);
  const headerElement = screen.getByText(/learn multiplication/i);
  expect(headerElement).toBeInTheDocument();
});

it('renders 2 headings', () => {
  render(<Header title='my app' tagline='learn multiplication' />);
  const headerElements = screen.getAllByRole('heading');
  expect(headerElements.length).toBe(2);
});
