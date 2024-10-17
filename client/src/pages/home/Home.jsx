import React from 'react';
import styles from './home.module.css'; // Importing CSS module
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles['home-container']}>
            <header className={styles.hero}>
                <h1>Welcome to Qwinnis Hair Salon</h1>
                <p>Where Style Meets Confidence</p>
                <img src="/images/space.jpg" alt="Qwinnis Hair Salon" className={styles['salon-image']} />
            </header>

            <section className={styles['about-us']}>
                <h2>About Us</h2>
                <p>
                    At Qwinnis Hair Salon, we're dedicated to helping you look and feel your best. Our team of skilled stylists stays up-to-date with the latest trends and techniques to provide you with exceptional service.
                </p>
            </section>

            <section className={styles['featured-services']}>
                <h2>Our Services</h2>
                <ul>
                    <li>Expert Haircuts</li>
                    <li>Coloring & Highlights</li>
                    <li>Styling for Special Occasions</li>
                    <li>Hair Treatments</li>
                </ul>
            </section>

            <section className={styles.cta}>
                <h2>Ready for a New Look?</h2>
                <Link to="Booking" className={styles['cta-button']}>Book an Appointment</Link>
            </section>

            <section className={styles['testimonials']}>
                <h2>What Our Clients Say</h2>
                <blockquote>"Qwinnis Hair Salon transformed my look! The stylists are true artists."</blockquote>
                - Sarah J.
            </section>

          
        </div>
    );
};

export default Home;