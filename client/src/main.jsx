import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Staff from './pages/staff/Staff.jsx'
import Services from './pages/service/Services.jsx'
import Booking from './pages/booking/Booking.jsx'
import Admin from './pages/Admin.jsx'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import { AuthProvider } from './AuthContext'
import PrivateRoute from './PrivateRoute';
import './index.css'

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
        <Route path="Admin" element={<PrivateRoute element={Admin} />} />
       

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
