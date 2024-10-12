
import React, {useState, useEffect} from 'react'

const  Admin = () => {

    const [bookings, setBookings] = useState([])
    const [availableTimes, setAvailableTimes] = useState([]);

useEffect(() => {
    const fetchBookings = async () => {
        const response = await
         fetch('http://localhost:5000/api/bookings');
        const data = await response.json()
        setBookings(data)
    }
    fetchBookings()
}, [])

const getAvailableTimes = () => {
    const predefinedTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'];   

    const bookedTimes = bookings.map(booking => new Date(booking.date).toLocaleTimeString([], { hour: '2-digit', minute: 
        '2-digit' }));

    const available = predefinedTimes.filter(time => !bookedTimes.includes(time));
    setAvailableTimes(available);
};

const sendMessageToBookings = () => {
    // Here you can implement your messaging logic
    console.log("Available Times:", availableTimes);
    alert(`Available Times: ${availableTimes.join(', ')}`);
};

return (
    <div>
        <h1>Admin Dashboard</h1>
        <button onClick={getAvailableTimes}>Check Available Times</button>
        <button onClick={sendMessageToBookings}>Send Message to Bookings</button>
        <ul>
            {bookings.map((booking) => (
                <li key={booking._id}>
{booking.name} - {booking.email} - {new Date(booking.date).toDateString()} - {booking.service} - {booking.stylist}
                </li>
            ))}
        </ul>
    </div>
)
}

export default Admin;