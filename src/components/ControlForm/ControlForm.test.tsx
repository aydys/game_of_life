import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ControlForm } from './ControlForm'

describe('ControlForm', () => {
  test('rendering and submitting a basic Formik form', async() => {
    const handleSubmit = jest.fn()
    render(<ControlForm onSubmit={handleSubmit} />)

    userEvent.selectOptions(screen.getByRole('combobox', {name: /size/i}), 'big')
    userEvent.selectOptions(screen.getByRole('combobox', {name: /speed/i}), 'medium')
    userEvent.selectOptions(screen.getByRole('combobox', {name: /filled/i}), '50%')
    
    userEvent.click(screen.getByRole('button', { name: /Submit/i }))
    
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        size: 'big',
        speed: 'medium',
        filled: '50%',
      })
    )
  })
})