import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css";

const Login = () => {

    const { signInWithGoogle } = useFirebase();

    return (
        <div>
            <h3>Login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form action="">
                <input type="text" name="" placeholder='Your name' id="" />
                <br />
                <input type="email" name="" placeholder='Your Email' id="" />
                <br />
                <input type="password" name="" placeholder='Password' id="" />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;