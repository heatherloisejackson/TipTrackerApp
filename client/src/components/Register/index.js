import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import footer from '../Footer/index';

import { useMutation } from '@apollo/client';

import AuthService from '../../utils/auth';
import { ADD_ACCOUNT } from '../../utils/mutations';
import "./index.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [addAccount, { error, data }] = useMutation(ADD_ACCOUNT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addAccount({
        variables: { ...formState },
      });
      AuthService.login(data.addAccount.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='main-container'>
      <div className="welcome">
        <h2>Register</h2>
      </div>
      <main className="register-card">
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/mytips">back to the homepage.</Link>
          </p>
        ) : (
          <div>
            <form onSubmit={handleFormSubmit}>
              <div className="email">
                <input placeholder='Username'
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                ></input>
                <i className='fas fa-user-alt email-icon' aria-hidden='true'></i>
              </div>

              <div className="password">
                <input placeholder='Password'
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                ></input>
                <i className="fas fa-lock password-icon" aria-hidden='true'></i>
              </div>

              <button type='submit' className='submit-btn'>
                Register
              </button>
            </form>
            <div className="register">
              <p>
                Already have an account?
                <Link to='/'>Log in!</Link>
              </p>
            </div>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>)}
      </main>
      {footer}
    </div>
  );
}

export default Signup;
