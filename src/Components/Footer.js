import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-component">
            <footer>
            <div className="footer-links">
                <ul>
                    <li className="white-list"><b>YTS</b>  <i class="far fa-copyright"></i><b> 2011-2021</b></li>
                    <li className="white-list"> - </li>
                    <li>
                        <Link to="/blog"> Blog </Link>
                    </li>
                    <li className="white-list">-</li>
                    <li>
                        <Link to="https://yts.mx/dmca"> DMCA </Link>
                    </li>
                    <li className="white-list"> - </li>
                    <li>
                        <Link to="https://yts.mx/api">API</Link>
                    </li>
                    <li className="white-list">-</li>
                    <li>
                        <Link to="https://yts.mx/rss-guide">RSS</Link>
                    </li>
                    <li className="white-list">-</li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="white-list"> - </li>
                    <li>
                        <Link to="https://yts.mx/browse-movies"> Browse Movies</Link>
                    </li>
                    <li className="white-list">-</li>
                    <li>
                        <Link to="https://yts.mx/login">Requests</Link>
                    </li>
                    <li className="white-list">-</li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-links-second">
                <ul >
                    <li><Link to="/">EZTV</Link></li>
                    <li className="white-list">-</li>
                    <li><Link to="/">YIFY Status</Link></li>
                    <li className="white-list">-</li>
                    <li><Link to="/">YTS Proxies</Link></li>
                </ul>
            </div>
            <p className="agreement-paragraph">By using this site you agree to and accept our <Link>User Agreement</Link>, which can be read <Link>here</Link></p>
            </footer>
        </div>
    )
}

export default Footer;
