import React, { Component } from 'react';
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

const Login = ({ user, loginUser, router}) => (
  <Styles>
    <Form
      onSubmit={async values => {
        loginUser(values.email, values.password)
        router.push('/userpage')
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="email" placeholder="email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
          <pre>{JSON.stringify(user, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>
);

export default Login

