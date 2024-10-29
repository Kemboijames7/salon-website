import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get the total height of the document and the height of the viewport
            const totalHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const showButtonAt = totalHeight * 0.25;

            // Show or hide the button based on scroll position
            if (window.scrollY > showButtonAt) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <span 
            className={`scroll_top ${isVisible ? 'icon-visible' : ''}`} 
            style={{ display: isVisible ? 'inline' : 'none' }}
            onClick={scrollToTop}
        >
            <i className="ri-arrow-up-s-line"></i>
        </span>
    );
};

export default ScrollToTopButton;