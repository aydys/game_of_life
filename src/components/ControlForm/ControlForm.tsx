import React, { FC } from "react";
import { Formik, Field, Form } from "formik";
import { Values } from "../Game";

type Props = {
  onSubmit: (values: Values) => void
}

export const ControlForm: FC<Props> = ({ onSubmit }) => {

  return <>
    <Formik
      initialValues={{ size: '50x30', speed: 'slow', filled: '25%'}}
      onSubmit={(values) => {
        onSubmit(values)
      }}
    >
      <Form>
        <label htmlFor="size">Size</label>
        <Field id="size" as='select' name='size'>
          <option value='small'>50x30</option>
          <option value='middle'>70x50</option>
          <option value='big'>100x80</option>
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    <button>Run</button>
    <button>Stop</button>
    <button>Clear</button>
  </>
}