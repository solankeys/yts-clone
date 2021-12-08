import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Socialicons from '../Components/Socialicons';
import './Contact.css';


function Contact() {
    return (
        <div className="contact-page">
            <header> <Header /> </header>
            <Socialicons />
            <div className="contact-container">
                <h2> Contact Us</h2>
                    <form className="contact-form">
                        <label for="name">Name:</label><br/>
                        <input type="text" name="name" /><br/>
                        <label for="email"> E-mail:</label><br/>
                        <input type="text" name="email"/><br/>
                        <label for="subject">Subject:</label><br/>
                        <input type="text" name="subject"/><br/>
                        <label for="message">Message:</label><br/>
                        <input type="text" name="message" className="textarea" /><br /> 
                    </form>
            <div className="contact-paragraph">
                <p>Please note that any contact messages that are requesting movies will be ignored.</p>
                <p className="second-paragraph">You can also send your feedback and support messages to e-mail address: <addr>support@yts.ag</addr></p>
            </div>
            </div>
               
            <footer> <Footer/></footer>
        </div>
    )
}

export default Contact;
