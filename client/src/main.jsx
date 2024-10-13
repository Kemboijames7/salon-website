import React from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Staff from './pages/Staff.jsx'
import Services from './pages/service/Services.jsx'
import Booking from './pages/Booking.jsx'
import Admin from './pages/Admin.jsx'
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

    </Route>
  </Routes>
</Router>
)
