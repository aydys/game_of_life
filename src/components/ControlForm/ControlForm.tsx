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
          <option>50x30</option>
          <option>70x50</option>
          <option>100x80</option>
        </Field>
        <label htmlFor="speed">Speed</label>
        <Field id='speed' as='select' name='speed'>
          <option>slow</option>
          <option>meduim</option>
          <option>fast</option>
        </Field>
        <label htmlFor="filled">Filled</label>
        <Field id='filled' as='select' name='filled'>
          <option>0</option>
          <option>25%</option>
          <option>50%</option>
          <option>75%</option>
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    <button>Run</button>
    <button>Stop</button>
    <button>Clear</button>
  </>
}