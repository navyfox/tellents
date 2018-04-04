import React, { Component } from 'react'
import './HomeView.scss'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { Api } from '../../../api/index'
import { connect } from 'react-redux'
import { registrationUser } from '../../Login/modules/login'

class HomeView extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  onSubmit = (values) => {
    this.props.registrationUser(values)
    this.props.router.push('/userpage')
  }

  render () {
    return (
      <Styles>
        <h1>🏁 React Final Form Example</h1>
        <h2>Synchronous Record-Level Validation</h2>
        <a href="https://github.com/erikras/react-final-form#-react-final-form">
          Read Docs
        </a>
        <Form
          onSubmit={this.onSubmit}
          validate={values => {
            const errors = {}
            if (!values.firstName) {
              errors.firstName = 'Required'
            }
            if (!values.lastName) {
              errors.lastName = 'Required'
            }
            if (!values.email) {
              errors.email = 'Required'
            }
            if (!values.password) {
              errors.password = 'Required'
            }
            return errors
          }}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="firstName">
                {({ input, meta }) => (
                  <div>
                    <label>First Name</label>
                    <input {...input} type="text" placeholder="First Name"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <div>
                    <label>Last Name</label>
                    <input {...input} type="text" placeholder="Last Name"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input {...input} type="email" placeholder="email"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password"/>
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
              <pre>{JSON.stringify(this.props.user, 0, 2)}</pre>
            </form>
          )}
        />
      </Styles>
    )
  }
}

const mapDispatchToProps = {
  registrationUser,
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
