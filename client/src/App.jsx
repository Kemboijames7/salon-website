import React from 'react';
import {Outlet} from 'react-router-dom';
import { useState } from 'react';


function App() {
 

  return (
   <div>
    <header>
     <h1>The Qwinnis Hair Salon</h1> 

     <nav> <a href="/">Home</a> |
     <a href="/Staff">Staff</a>|
     <a href="/Services">Services</a>|
     <a href="/Booking">Booking</a>|
     <a href="/Admin">Admin</a>
     </nav> 
     </header>
    <main>
      <Outlet/>
    </main>

    {/* <footer>
      <div>
      
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
       
      </div>
    </footer> */}
   </div>
  )
}

export default App
