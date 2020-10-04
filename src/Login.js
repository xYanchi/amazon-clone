import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        //No refreshing in React!
        e.preventDefault();

        //Firebase login

    }

    const register = e => {
        e.preventDefault();

        //Firebase register
    }
    return (

        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={
                        e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={
                        e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                        className='login_signInBtn'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register}
                    className='login_registerBtn'>Create your Amazon Account</button>
            </div>
        </div>

    )
}

export default Login
