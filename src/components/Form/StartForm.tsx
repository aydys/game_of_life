import React from 'react'
import { Formik, Field, Form } from "formik";
import { css } from '@emotion/react'

import { CenterContainer, ButtonStyled } from "../Styled";

export const StartForm: React.FC = () => (
  <CenterContainer>
    <Formik
      initialValues={{userName: ''}}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field
          as='input'
          name='name'
          css={css`
          margin-left: 10px
          `}
        />
        <ButtonStyled type='submit'>Submit</ButtonStyled>
      </Form>      
    </Formik>
  </CenterContainer>
)