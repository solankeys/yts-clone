import React from 'react';
import './Register.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Socialicons from '../Components/Socialicons';

function Register() {
    return (
        <div className="register-page">
            <header><Header /> </header>
            <Socialicons/>
                <h2> Register an Account </h2>
            <form className="register-form">
                <div className="user-email">
                    <label for="username">Username<br /><input name="username"  /></label><br />
                    <label for="email">Email(no confirmation needed)<br/> <input name="email" /></label>
                </div>
                <div className="psw-cpsw">
                    <label for="password"> Password <br/><input name="password" /></label><br />
                    <label for=""> Confirm Password <br/><input name="cpassword" /></label>
                </div>
                <button>Register</button>
            </form>
            <footer> <Footer /></footer>
        </div>
    )
}

export default Register;