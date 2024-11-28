import React, { useEffect, useState } from 'react';
import styles from './admin.module.css';
import { useAuth } from '../../AuthContext';

const Admin = () => {
    const { isAdmin } = useAuth(); // Use the context to access isAdmin
   

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bookings');
                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            } finally {
                setLoading(false); // Ensure loading is set to false after fetch
            }
        };

        if (isAdmin) {
            fetchBookings(); // Fetch bookings only if authenticated as admin
        } else {
            console.warn('Unauthorized access attempt to Admin panel.');
            setLoading(false); // Stop loading if unauthorized
        }
    }, [isAdmin]);

    return (
        <div>
            <h2>Admin Panel</h2>
            {isAdmin ? (
                <>
                    <p className={styles['head-text']}>Welcome, Admin! Here you can oversee the website.</p>
                    <h3>Booked Appointments</h3>
                    {loading ? (
                        <p>Loading bookings...</p>
                    ) : bookings.length > 0 ? (
                        <ul className={styles['appointments']}>
                            {bookings.map((booking) => (
                                <li key={booking._id}>
                                    <strong>{booking.name}</strong> - {booking.email} -{' '}
                                    {new Date(booking.date).toDateString()} - {booking.service} - {booking.stylist}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No bookings found.</p>
                    )}
                </>
            ) : (
                <p>Unauthorized access. Please log in as an admin.</p>
            )}
        </div>
    );
};

export default Admin;
