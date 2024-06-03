import { render, screen } from '@testing-library/react';
import App from './App';
describe("test 1",()=>{
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
})});
describe("test 2",()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Button/i);
    expect(linkElement).toBeInTheDocument();
  })});
 