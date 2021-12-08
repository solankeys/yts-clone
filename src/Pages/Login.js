import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Login() {
    return (
        <div className="login-page">
            <header> <Header /> </header>
            <h2> User Login</h2>
            <form class="login-form">
                <label for="uname">Username or Email:</label><br/>
                <input type="text" name="uname" required /><br />
                <label for="psw">Password:</label><br/>
                <input type="password" name="psw" required /><br/>
            <div className="links-button">
                <div className="links">
                    <Link to="/register" >Create an Account</Link><br/>
                    <Link to="#">Forgot password?</Link>
                </div>
                <button type="submit">Login</button>
            </div>
            </form>
            <footer> <Footer /></footer>
                       
        </div>
    )
}

export default Login;
