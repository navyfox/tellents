import React, { Component } from 'react';
import Auth from 'j-toker';
import { Field, reduxForm } from 'redux-form';
import { Api } from '../../../api/index';

Auth.configure({
  apiUrl: 'https://floating-atoll-63112.herokuapp.com/api/',

  handleLoginResponse: function(response) {
    return response;
  },

  handleAccountUpdateResponse: function(response) {
    return response;
  },

  handleTokenValidationResponse: function(response) {
    return response;
  }
})

class Login extends Component {
  render () {
    const { handleSubmit } = this.props;
    // console.log('props', this.props);
    return (
      <form onSubmit={handleSubmit(data => {
        // console.log('data', data);
        Auth.emailSignIn({
          email:    data.email,
          password: data.password
        }).then(function (user) {
          // console.log('newUser', user.data);
        });
        // console.log('bowserHistory', this);
        this.props.router.push('/userpage');
      })}>
        <div>
          <label>Email</label>
          <Field name='email' component='input' type='email' />
        </div>
        <div>
          <label>Password</label>
          <Field name='password' component='input' type='password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

// Decorate the form component
Login = reduxForm({
  form: 'login' // a unique name for this form
})(Login)

export default Login
// class Login extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       email: '',
//       password: ''
//     }
//   }
//
//   handleChange = (event) => {
//     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
//     const name = event.target.name
//     this.setState({
//       [name]: value
//     })
//   }
//
//   handleSignIn = (event) => {
//     event.preventDefault();
//     Auth.emailSignIn({
//       email:    this.state.email,
//       password: this.state.password
//     })
//   }
//
//   render () {
//     return (
//       <Form horizontal onSubmit={this.handleSignIn}>
//         <FormGroup controlId='formHorizontalEmail'>
//           <Col componentClass={ControlLabel} sm={2}>
//             Email
//           </Col>
//           <Col sm={10}>
//             <FormControl
//               name='email'
//               type='email'
//               placeholder='Email'
//               value={this.state.email}
//               onChange={this.handleChange} />
//           </Col>
//         </FormGroup>
//
//         <FormGroup controlId='formHorizontalPassword'>
//           <Col componentClass={ControlLabel} sm={2}>
//             Password
//           </Col>
//           <Col sm={10}>
//             <FormControl
//               name='password'
//               type='password'
//               placeholder='Password'
//               value={this.state.password}
//               onChange={this.handleChange} />
//           </Col>
//         </FormGroup>
//
//         <FormGroup>
//           <Col smOffset={2} sm={10}>
//             <Button type='submit'>Sign in</Button>
//           </Col>
//         </FormGroup>
//       </Form>
//     )
//   }
// }
//
// export default Login
