
import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import { FaRegSmile, FaBeer }  from 'react-icons/fa';
import { FaScissors } from "react-icons/fa6";
import { PiHairDryerBold } from "react-icons/pi";
import { GiComb, GiTowel, GiLipstick } from "react-icons/gi";


const Home = () => {
    const [count, setCount] = useState(1);
    const [showIcons, setShowIcons] = useState(false);
    const [animateIcons, setAnimateIcons] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < 12) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    setShowIcons(true);
                    return prevCount;
                }
            });
        }, 100); // Adjust duration as needed

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);


    useEffect(() => {
        if (showIcons) {
            // Delay to start animation after icons are displayed
            const animationDelay = setTimeout(() => {
                setAnimateIcons(true);
            }, 500); // Adjust delay as needed

            return () => clearTimeout(animationDelay);
        }
    }, [showIcons]);

    useEffect(() => {
        if (!animateIcons) return;

        let animationFrame;
        const handleMouseMove = (e) => {
            if (animationFrame) return;

            animationFrame = requestAnimationFrame(() => {
                const icons = document.querySelectorAll('.icon');
                icons.forEach((icon) => {
                    const iconRect = icon.getBoundingClientRect();
                    const iconCenterX = iconRect.left + iconRect.width / 2;
                    const iconCenterY = iconRect.top + iconRect.height / 2;

                    const deltaX = e.clientX - iconCenterX;
                    const deltaY = e.clientY - iconCenterY;

                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                    const angle = Math.atan2(deltaY, deltaX);

                    const moveDistance = Math.min(20, distance / 10);
                    const translateX = moveDistance * Math.cos(angle);
                    const translateY = moveDistance * Math.sin(angle);

                    icon.style.transform = `translate(${translateX}px, ${translateY}px)`;
                });

                animationFrame = null;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [animateIcons]);

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
                    <li>Expert Haircuts💇🏽‍♀️ 💇🏻‍♂️</li>
                    <li>Coloring & Highlights 🎨</li>
                    <li>Styling for Special Occasions 🎉</li>
                    <li>Hair Treatments 💆🏾‍♂️ 💆🏻‍♀️🧴✨</li>
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

            <section className={styles['celebration']}>
                <div className="header142_content">
                    <h2 className={styles['heading-style-h3']}>Celebrating</h2>
                    <div className={styles['counter-text']}>
                        <span className={styles['counter-number']}>{count}</span>
                        <h2 className={styles['heading-style-h3']}>Year{count > 1 ? 's' : ''}</h2>
                    </div>
                    <div className={styles['animation-text-wrap']}>
                        <h2 className={styles['heading-style-h3']}>with Qwinnis Hair Salon</h2>
                    </div>
                </div>
            </section>

            {showIcons && (
                <div className={styles['icon-container']}>
                    <FaScissors className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`} />
                    <span className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`}>💅🏻</span>
                    <PiHairDryerBold className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`} />
                    <span className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`}>💆🏻‍♀️🧖🏻‍♀️✨🌿</span>
                    <FaRegSmile className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`} />
                    <span className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`}>💄</span>
                    <GiComb className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`} />
                    <span className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`}>🚿</span>
                    <GiLipstick className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`} />
                    <span className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`}>💈</span>
                    <GiTowel className={`${styles.icon} ${animateIcons ? styles.blowup : ''}`} />
                </div>
            )}
        </div>
    );
};

export default Home;