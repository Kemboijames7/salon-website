// App.jsx
import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAuth } from './AuthContext'; // Only import useAuth for context access

function App() {
    const navigate = useNavigate();
    const { isAdmin, logout } = useAuth(); // Access isAdmin and logout directly from context

    // Navigation handlers
    const handleBack = () => navigate(-1);
    const handleForward = () => navigate(1);

    return (
        <div>
            <header>
                <h1>The Qwinnis Hair Salon</h1>
                <nav>
                    <a href="/">Home</a> |
                    <a href="/Staff">Staff</a> |
                    <a href="/Services">Services</a> |
                    <a href="/Booking">Booking</a> |
                    {isAdmin && <a href="/Admin">Admin</a>} {/* Only show Admin link if isAdmin is true */}
                    {isAdmin && <button onClick={logout}>Logout</button>} {/* Logout button if admin */}
                </nav> 
            </header>

            <main>
                <Outlet />
            </main>

            <ScrollToTopButton />

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Contact & Location</h3>
                        <p>Phone: <a href="tel:+15551234567">(555) 123-4567</a></p>
                        <p>Email: <a href="mailto:info@qwinnissalon.com">info@qwinnissalon.com</a></p>
                        <p>Address: 123 Main St, Torongo</p>
                    </div>

                    <div className="footer-column footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Special Offers</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Opening Hours</h3>
                        <p>Monday - Friday: 9 AM - 7 PM</p>
                        <p>Saturday: 10 AM - 5 PM</p>
                        <p>Sunday: Closed</p>
                    </div>

                    <div className="footer-column footer__socials">
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href="https://www.facebook.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a></li>
                            <li><a href="https://www.instagram.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line"></i></a></li>
                            <li><a href="https://www.youtube.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-fill"></i></a></li>
                            <li><a href="https://www.twitter.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a></li>
                            <li><a href="https://www.tiktok.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i className="ri-tiktok-fill"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className='dir-click'>
                    <h6 className="go-next" onClick={handleBack}><IoIosArrowBack /> Prev</h6>
                    <h6 className="go-next" onClick={handleForward}><IoIosArrowForward /> Next</h6>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Qwinnis Hair Salon. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
