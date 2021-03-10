import React, { FC, useState } from 'react';
import { Field } from "../Field";
import { ControlForm } from "../ControlForm";
export type Values = {
  size: string,
  speed: string,
  filled: string
}

export const Game: FC = () => {
  const generateField = (size: string): number[][] => {
    const sizes: { [unit: string]: any } = {
      small: {
        countRows: 10,
        countColumns: 30
      },
      middle: {
        countRows: 30,
        countColumns: 50
      },
      big: {
        countRows: 50,
        countColumns: 70
      }
    }

    const result = []
    const selectedSize = sizes[size];
    for(let i = 0; i < selectedSize.countRows; i += 1) {
      result.push(Array.from(Array(selectedSize.countColumns), () => 0))
    }
    return result
  }

  const [field, setField] = useState(() => generateField('small'))
  const onSubmit = (values: Values) => {
    setField(generateField(values.size))
  }
  const handleClear = () => console.log()
  const handleRun = () => console.log()
  const handleStop = () => console.log()

  const handlers = {
    onSubmit,
    handleClear,
    handleRun,
    handleStop
  }

  return <>
    <Field onClick={() => {}} field={field} />
    <ControlForm {...handlers} />
  </>
}