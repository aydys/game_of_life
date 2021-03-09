import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ControlForm } from './ControlForm'

describe('ControlForm', () => {
  test('rendering and submitting a basic Formik form', async() => {
    const handleSubmit = jest.fn()
    const props = {
      handleRun: () => console.log(),
      handleStop: () => console.log(),
      handleClear: () => console.log()
    }
    render(<ControlForm onSubmit={handleSubmit} {...props} />)

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
  test('check handler on run control', () => {
    const mockHandler = jest.fn()
    const props = {
      onSubmit: () => console.log(),
      handleStop: () => console.log(),
      handleClear: () => console.log()
    }
    render(<ControlForm handleRun={mockHandler} {...props}  />)

    userEvent.click(screen.getByRole('button', { name: /Run/i }))

    expect(mockHandler).toHaveBeenCalled()
  })

  test('check handler on stop control', () => {
    const mockHandler = jest.fn()
    const props = {
      onSubmit: () => console.log(),
      handleRun: () => console.log(),
      handleClear: () => console.log()
    }
    render(<ControlForm handleStop={mockHandler} {...props}  />)

    userEvent.click(screen.getByRole('button', { name: /Stop/i }))

    expect(mockHandler).toHaveBeenCalled()
  })

  test('check handler on clear control', () => {
    const mockHandler = jest.fn()
    const props = {
      onSubmit: () => console.log(),
      handleStop: () => console.log(),
      handleRun: () => console.log()
    }
    render(<ControlForm handleClear={mockHandler} {...props}  />)

    userEvent.click(screen.getByRole('button', { name: /Clear/i }))

    expect(mockHandler).toHaveBeenCalled()
  })
})