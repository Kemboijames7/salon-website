// Admin.jsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext.jsx'; // Only import useAuth for consuming the context
import { FaBold } from 'react-icons/fa';


const Admin = () => {
    const { isAdmin } = useAuth(); // Use the context to access isAdmin

    console.log('isAdmin:', isAdmin);  // Log the isAdmin value

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings');
            const data = await response.json();
            setBookings(data);
        };

        if (isAdmin) {
            fetchBookings(); // Fetch bookings only if authenticated as admin
        }
    }, [isAdmin]);

    return (
        <div>
            <h2>Admin Panel</h2>
            {isAdmin ? (
                <>
                    <p>Welcome, Admin! Here you can oversee the website.</p>
                    <h2>Booked appointments</h2>
                    {loading ? <p>Loading bookings...</p> : <BookingList bookings={bookings} />}
                    <ul>

                    {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <li key={booking._id}>
                            <strong>{booking.name}</strong> - {booking.email} - {new Date(booking.date).toDateString()} - {booking.service} - {booking.stylist}
                        </li>
                    ))
                ) : (
                    <p>No bookings found.</p>
                )}
                    </ul>
                </>
            ) : (
                <p>Unauthorized access. Please log in as an admin.</p>
            )}
        </div>
    );
};

export default Admin;
