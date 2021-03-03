import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ControlForm } from './ControlForm'

describe('ControlForm', () => {
  test('rendering and submitting a basic Formik form', async() => {
    const handleSubmit = jest.fn()
    render(<ControlForm onSubmit={handleSubmit} />)
    
    userEvent.click(screen.getByText('50x30'))
    userEvent.click(screen.getByText('100x80'))

    userEvent.click(screen.getByText('slow'))
    userEvent.click(screen.getByText('fast'))

    userEvent.click(screen.getByText('25%'))
    userEvent.click(screen.getByText('50%'))
    
    userEvent.click(screen.getByRole('button', { name: /Submit/i }))
    
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        size: '100x80',
        speed: 'slow',
        filled: '25%',
      }, expect.anything())
    )
  })
})