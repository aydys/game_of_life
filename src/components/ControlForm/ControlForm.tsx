import React, { FC } from "react";
import { Formik, Field, Form } from "formik";
import { Values } from "../Game";
import { ButtonStyled } from "../Styled";

type Props = {
  onSubmit: (values: Values) => void,
  handleRun: () => void,
  handleStop: () => void,
  handleClear: () => void
}

export const ControlForm: FC<Props> = ({ onSubmit, handleRun, handleStop, handleClear }) => {

  return <>
    <Formik
      initialValues={{ size: '', speed: 'slow', filled: '25%'}}
      onSubmit={(values) => {
        onSubmit(values)
      }}
    >
      <Form>
        <label htmlFor="size">Size</label>
        <Field id="size" as='select' name='size'>
          <option value='small'>small</option>
          <option value='middle'>middle</option>
          <option value='big'>huge</option>
        </Field>
        <label htmlFor="speed">Speed</label>
        <Field id='speed' as='select' name='speed'>
          <option value='slow'>slow</option>
          <option value='medium'>medium</option>
          <option value='fast'>fast</option>
        </Field>
        <label htmlFor="filled">Filled</label>
        <Field id='filled' as='select' name='filled'>
          <option value='0'>0</option>
          <option value='25%'>25%</option>
          <option value='50%'>50%</option>
          <option value='75%'>75%</option>
        </Field>
        <ButtonStyled type="submit">Submit</ButtonStyled>
      </Form>
    </Formik>
    <ButtonStyled onClick={handleRun}>Run</ButtonStyled>
    <ButtonStyled onClick={handleStop}>Stop</ButtonStyled>
    <ButtonStyled onClick={handleClear}>Clear</ButtonStyled>
  </>
}