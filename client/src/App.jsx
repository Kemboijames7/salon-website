import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AuthProvider } from './AuthContext';

function App() {
    const navigate = useNavigate(); 

    // Navigation handlers
    const handleBack = () => {
      navigate(-1); 
    };
  
    const handleForward = () => {
      navigate(1);  
    };

  return (
    <AuthProvider>
            <Router> 
        <div>
          <header>
          <h1>The Qwinnis Hair Salon</h1> 

          <nav> <a href="/">Home</a> |
          <a href="/Staff">Staff</a>|
          <a href="/Services">Services</a>|
          <a href="/Booking">Booking</a>|
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
                    <h3>Social Media</h3>
                 
                   <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">Special Offers</a></li>
                   
                </div>

                <div className="footer-column">
                    <h3>Opening Hours</h3>
                    <p>Monday - Friday: 9 AM - 7 PM</p>
                    <p>Saturday: 10 AM - 5 PM</p>
                    <p>Sunday: Closed</p>
                </div>

                <div className="footer-column footer__socials">
                    <h3>Social Media</h3>
                  
                        <li><a href="https://www.facebook.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i class="ri-facebook-fill"></i></a></li>
                        <li><a href="https://www.instagram.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i class="ri-instagram-line"></i></a></li>
                        <li><a href="https://www.youtube.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i class="ri-youtube-fill"></i></a></li>
                        <li><a href="https://www.twitter.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i class="ri-twitter-fill"></i></a></li>
                        <li><a href="https://www.tiktok.com/qwinnissalon" target="_blank" rel="noopener noreferrer"><i class="ri-tiktok-fill"></i></a></li>
                       
                    
                </div>

            </div>
            <div className='dir-click'>
            <h6 className="go-next" onClick={handleBack}><IoIosArrowBack />Prev</h6>
            <h6 className="go-next" onClick={handleForward}><IoIosArrowForward />Next</h6>
            </div>
            

            <div className="footer-bottom">
                
                <p>© 2024 Qwinnis Hair Salon. All rights reserved.</p>
            </div>
            
        </footer>
   </div>
   </Router>
   </AuthProvider>
  )
}

// Private Route Component
const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? (
      <Component />
  ) : (
      <Navigate to="/" /> // Redirect to home if not authenticated
  );
};
export default App
