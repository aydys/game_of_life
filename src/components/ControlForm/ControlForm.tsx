import React, { FC } from "react";
import { Formik, Field, Form } from "formik";

export const ControlForm: FC = () => {

  return <>
    <Formik
      initialValues={{ size: '50x30', speed: 'slow', filled: '25%'}}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Field as='select' name='size'>
          <option>50x30</option>
          <option>70x50</option>
          <option>100x80</option>
        </Field>
        <Field as='select' name='speed'>
          <option>slow</option>
          <option>meduim</option>
          <option>fast</option>
        </Field>
        <Field as='select' name='filled'>
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