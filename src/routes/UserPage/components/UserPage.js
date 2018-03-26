import React, { Component } from 'react';
import Auth from 'j-toker';
import { IndexLink, Link } from 'react-router';

class Login extends Component {
  render () {
    return (
      <div className='container text-center'>
        <IndexLink to='/skills' activeClassName='page-layout__nav-item--active'>Skills</IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='page-layout__nav-item--active'>Search</Link>
        <div className='page-layout__viewport'>
        </div>
      </div>
    );
  }
}

export default Login;
