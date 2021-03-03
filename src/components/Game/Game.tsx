import React, { FC } from 'react';
import { Field } from "../Field";
import { ControlForm } from "../ControlForm";

export type Values = {
  size: string,
  speed: string,
  filled: string
}

export const Game: FC = () => {
  const handleSubmit = (values: Values) => {
    console.log(values)
  }
  return <>
    <Field onClick={() => {}} />
    <ControlForm onSubmit={handleSubmit} />
  </>
}