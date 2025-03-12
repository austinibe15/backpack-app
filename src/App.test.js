import { render, screen } from '@testing-library/react';  
import App from './App';  

test('renders flight schedule header', () => {  
  render(<App />);  
  const headerElement = screen.getByText(/flight schedule/i); // Searching for the actual header  
  expect(headerElement).toBeInTheDocument();  
});  

test('renders select a date text', () => {  
  render(<App />);  
  const selectDateElement = screen.getByText(/select a date/i); // Searching for the prompt  
  expect(selectDateElement).toBeInTheDocument();  
});  