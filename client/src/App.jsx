import React from 'react';
import { Outlet, useNavigate, Routes, Route, Navigate, Link } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AuthProvider, { useAuth, AuthContext } from './AuthContext/AuthContext.jsx';

// Import other page components
import Home from './pages/Home';
import Staff from './pages/Staff';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Admin from './pages/Admin';

function App() {
    const navigate = useNavigate(); 

    // Navigation handlers
    const handleBack = () => navigate(-1);
    const handleForward = () => navigate(1);

    return (
        <AuthProvider>
            <div>
                <header>
                    <h1>The Qwinnis Hair Salon</h1>
                    <nav>
                        <Link to="/">Home</Link> |
                        <Link to="/Staff">Staff</Link> |
                        <Link to="/Services">Services</Link> |
                        <Link to="/Booking">Booking</Link> |
                        <Link to="/Admin">Admin</Link>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Staff" element={<Staff />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Booking" element={<Booking />} />
                        {/* Private route for Admin */}
                        <Route path="/Admin" element={<PrivateRoute component={Admin} />} />
                    </Routes>
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
        </AuthProvider>
    );
}

// Private Route Component
const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? (
        <Component />
    ) : (
        <Navigate to="/" /> // Redirect to home if not authenticated
    );
};

export default App;
