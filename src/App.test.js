import { render, screen } from '@testing-library/react'
import App from './App'

test('renders text MickeyMouse', () => {
  render(<App />)
  const nameElement = screen.getByText(/Jbrown021/i)
  expect(nameElement).toBeInTheDocument()
});
