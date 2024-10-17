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

   
      
      <footer>
            <p>Contact: (555) 123-4567 | info@qwinnissalon.com</p>
                <p>© 2024 Qwinnis Hair Salon. All rights reserved</p>
             
            </footer>
       
     
   </div>
  )
}

export default App
