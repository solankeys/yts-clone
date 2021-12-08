import React from 'react';
import './Socialicons.css';
import { Link } from 'react-router-dom';

function Socialicons() {
    return (
        <div className="socialicons">
                <div><Link to="/"> <i className="fab fa-twitter"></i></Link></div>
                <div><Link><i className="fab fa-reddit"></i></Link></div>
                <div><Link><i className="fas fa-th"></i></Link></div>
                <div><Link><i className="fab fa-pinterest"></i></Link></div>
            </div>
    )
}

export default Socialicons;
