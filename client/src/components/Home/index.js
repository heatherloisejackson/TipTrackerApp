import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import footer from '../Footer/index';
import "./index.css";

import AuthService from '../../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            AuthService.login(data.login.token);
            console.log(data);
            // this.props.history.push("/mytips")
            // useHistory().push("/mytips")
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            user: '',
            password: '',
        });
    };

    return (
        <div className='main-container'>
            <div className="welcome-card">
                <div className="welcome">
                    <h2>Welcome To MooLah</h2>
                    <h5>A Place to Track Your Tips</h5>
                </div>
                <main className="login-card">
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            {/* <Link to="/mytips">back to the homepage.</Link> */}
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
                                    Sign in
                                </button>
                            </form>
                            <div className="register">
                                <p>
                                    New around here?
                                    <Link to='/register'>Sign Up!</Link>
                                </p>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                        </div>
                    )}
                </main>
            </div>
            {footer}
        </div>
    );
};

export default Login;
