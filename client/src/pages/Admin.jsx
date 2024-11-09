import React, { useEffect, useState, useContext } from 'react';
// import  { AuthProvider, useAuth } from "../AuthContext/AuthContext.jsx";

const Admin = () => {
    // const { isAuthenticated } = useContext(AuthContext); // Get authentication status
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings');
            const data = await response.json();
            setBookings(data);
        };

      
            fetchBookings(); // Fetch bookings only if authenticated
        
    }, []);

 
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.name} - {booking.email} - {new Date(booking.date).toDateString()} - {booking.service} - {booking.stylist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;