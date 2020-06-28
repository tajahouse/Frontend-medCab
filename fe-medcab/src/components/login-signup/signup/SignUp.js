import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../../actions/users/userAction';

import "../../login-signup/signup/signup.styles.scss"

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });


  const handleSubmit = async event => {
    event.preventDefault();
    // password !== confirmPassword? alert("passwords must match"): ""
    signUpStart(userCredentials);

    alert("You are now a new user! Sign in!")

  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials(
      { ...userCredentials, [name]: value }
      );
  };

  return (
<div className="signup-wrapper">
  <h2 className="no_account">I do not have an account</h2>  
  <form className='sign-up-form' onSubmit={handleSubmit}>
    <h2>Sign up with your User Name and password</h2>
      <input
        type='text'
        name='username'
        value={userCredentials.username}
        onChange={handleChange}
        label='Display Name'
        placeholder= "user name"
        required
      />
      <input
        type='password'
        name='password'
        value={userCredentials.password}
        onChange={handleChange}
        label='Password'
        autoComplete='password'
        placeholder= "Password"
        required
      />

    <button type='submit'>SIGN UP</button>
  </form>
</div>
);
  }

export default connect(
  null,
{signUpStart})(SignUp)