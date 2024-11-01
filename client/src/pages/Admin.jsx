import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Import the AuthContext

const Admin = () => {
    const { isAuthenticated } = useContext(AuthContext); // Get authentication status
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings');
            const data = await response.json();
            setBookings(data);
        };

        if (isAuthenticated) {
            fetchBookings(); // Fetch bookings only if authenticated
        }
    }, [isAuthenticated]);

    // If not authenticated, you can return a message or redirect
    if (!isAuthenticated) {
        return <h2>You do not have access to this page.</h2>;
    }

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