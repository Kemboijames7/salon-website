import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Staff from './pages/staff/Staff.jsx'
import Services from './pages/service/Services.jsx'
import Booking from './pages/booking/Booking.jsx'
import Admin from './pages/admin/Admin.jsx'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import { AuthProvider } from './AuthContext'
import PrivateRoute from './components/PrivateRoute.jsx';
import './index.css';
import Login from './components/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
     <AuthProvider>
     <ScrollToTopButton /> 
    <Routes>
    <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='Staff' element={<Staff/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='Booking' element={<Booking/>}/>
        <Route path="Admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
        <Route path="Login" element={<Login />} />

    </Route>
  </Routes>
  </AuthProvider>
</Router>
)

const scrollTopButton = document.querySelector('.scroll_top');

window.addEventListener('scroll', () => {
  // Get the total height of the document and the height of the viewport
  const totalHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  const showButtonAt = totalHeight * 0.25;

  if (window.scrollY > showButtonAt) {
      scrollTopButton.style.display = 'block';  
  } else {
      scrollTopButton.style.display = 'none';   
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all images with a 'data-src' attribute
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  // Create an Intersection Observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the image is intersecting (visible in viewport)
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        
        // Replace 'data-src' with 'src'
        lazyImage.src = lazyImage.dataset.src;
        
        // Remove the placeholder class if you're using one
        lazyImage.classList.remove('lazy-load');
        
        // Stop observing this image
        observer.unobserve(lazyImage);
      }
    });
  }, {
    // Optional configuration
    rootMargin: '50px 0px', // Start loading 50px before entering viewport
    threshold: 0.01 // Trigger when even 1% of the image is visible
  });
  
  // Start observing each lazy image
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});