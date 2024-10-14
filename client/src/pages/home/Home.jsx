import React from 'react';
import styles from './home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Qwinnis Hair Salon</h1>
        <p>Where Style Meets Confidence</p>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>At Qwinnis Hair Salon, we're dedicated to helping you look and feel your best. Our team of skilled stylists stays up-to-date with the latest trends and techniques to provide you with exceptional service.</p>
      </section>

      <section className="featured-services">
        <h2>Our Services</h2>
        <ul>
          <li>Expert Haircuts</li>
          <li>Coloring & Highlights</li>
          <li>Styling for Special Occasions</li>
          <li>Hair Treatments</li>
        </ul>
      </section>

      <section className="cta">
    <h2>Ready for a New Look?</h2>
    <Link to="Booking" className="cta-button">Book an Appointment</Link>
</section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>"Qwinnis Hair Salon transformed my look! The stylists are true artists."</blockquote>
        - Sarah J.
      </section>

      <footer>
        <p>Visit us at: 123 Style Street, Fashion City</p>
        <p>Contact: (555) 123-4567 | info@qwinnissalon.com</p>
      </footer>
    </div>
  );
};

export default Home;