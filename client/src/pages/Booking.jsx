import React, { useState } from 'react';
import  Calendar from 'react-calendar'
import { useNavigate } from 'react-router-dom';


const services = [
    'Haircut',
    'Hair Coloring',
    'Deep Conditioning',
    'Bridal Styling',
    'Event Styling',
    'Treatments'
];

const stylists = [
    'Emily Johnson',
    'Michael Lee',
    'Sarah Brown'
];



const  Booking = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [date, setDate] = useState(new Date())
const [service, setService] = useState('')
const [stylist, setStylist] = useState('')

const navigate = useNavigate()

const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/bookings', {
    method: 'POST',
    headers: {'Content-Type':'application/json',},
    body:JSON.stringify({name,email,date,service, stylist})
})

   //Tell the customer the booking was successful and redirect them back home.
   if (response.ok) {
    alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times.`);
    await sendAvailableTimes(email); // Call to send available times
    navigate('/');
  } else {
    alert('Booking failed. Please try again.');
  }
}

const sendAvailableTimes = async (email) => {
  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM'];

  const message = `Hello ${name},\n\nThank you for your booking! Here are the available times:\n${availableTimes.join(', ')}\n\nBest regards,\nYour Salon Team`;

  console.log(`Sending email to ${email}:\n${message}`);

  alert(`An email has been sent to ${email} with available times.`);
};


return (
    <div>
      <h2> Book an Appointment </h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name"></label>
        <input type="text"
         id='name'
          placeholder='enter name'
           value={name}
        onChange={(e) => setName(e.target.value)} 
        required 
        />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text"
         id='email'
          placeholder='enter Id'
           value={email}
        onChange={(e) => setEmail(e.target.value)} 
        required 
        />
        </div>
        <div>
        {/*Calender comp goes here */}
        <label >Date</label>
        <Calendar 
            onChange={setDate}
            value={date}
            required
        />

        <p>Selected Date: {date.toDateString()}</p>
        </div>
        <div>
        <label htmlFor="service">Service:</label>
       <select 
       id='service'
        value={service}
        onChange={(e) => setService(e.target.value)} 
        required 
        >
            <option value=""disabled >Select a service </option>
            {services.map((service, index) => (
             <option key={index} value={service}>
                {service}</option>
             ))}
        </select>
        </div>
        <div>
        <label htmlFor="stylist">Stylists:</label>
        <select  
        id='stylist'
        value={stylist}
        onChange={(e) => setStylist(e.target.value)} 
        required 
        >
        <option value=""disabled >Select a stylist (optional) </option>
            {stylists.map((stylist, index) => (
             <option key={index} value={stylist }>{stylist }</option>
             ))}
        </select>
        </div>
        <button type='submit' >Book</button>
      </form>
    </div>
)}

export default Booking