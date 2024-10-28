import React from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Staff from './pages/staff/Staff.jsx'
import Services from './pages/service/Services.jsx'
import Booking from './pages/booking/Booking.jsx'
import Admin from './pages/Admin.jsx'
import ScrollToTopButton from './pages/scroll/ScrollToTopButton';
import './index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
    <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='Staff' element={<Staff/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='Booking' element={<Booking/>}/>
        <Route path='Admin' element={<Admin/>}/>
        <Route path='scroll' element={<scroll/>}/>

    </Route>
  </Routes>
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
