import React, { FC } from 'react';
import { Field } from "../Field";
import { ControlForm } from "../ControlForm";

export type Values = {
  size: string,
  speed: string,
  filled: string
}

export const Game: FC = () => {
  const onSubmit = (values: Values) => console.log(values)
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
    <Field onClick={() => {}} />
    <ControlForm {...handlers} />
  </>
}