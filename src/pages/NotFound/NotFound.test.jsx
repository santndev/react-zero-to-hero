import NotFound from './index'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Not Found page test suite', () => {
  test('should display not found title', () => {
    render(
      <BrowserRouter>
        <NotFound/>
      </BrowserRouter>
    )
    expect(screen.getByText('notFound.title')).toBeInTheDocument()
  })
  test('click button should return home page', () => {
    render(
      <BrowserRouter>
        <NotFound/>
      </BrowserRouter>
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(window.location.pathname).toBe('/')
  })
})