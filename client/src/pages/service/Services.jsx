import React from 'react';
import  { useState } from 'react';
import styles from './service.module.css'


const serviceCategories = [
  { id: 'haircuts', name: 'Haircuts'},
  { id: 'coloring', name: 'Coloring' },
  { id: 'styling', name: 'Styling' },
  { id: 'treatments', name: 'Treatments' },
];

const servicesMenu = [
  { id: 1, name: 'Women\'s Haircut', price: 50, category: 'haircuts', description: 'Professional haircut tailored to your style.', duration: '60 min' },
  { id: 2, name: 'Men\'s Haircut', price: 30, category: 'haircuts', description: 'Stylish cut for the modern man.', duration: '30 min' },
  { id: 3, name: 'Full Color', price: 80, category: 'coloring', description: 'Complete hair coloring service.', duration: '120 min' },
  { id: 4, name: 'Highlights', price: 70, category: 'coloring', description: 'Add dimension with partial highlights.', duration: '90 min' },
  { id: 5, name: 'Blowout', price: 40, category: 'styling', description: 'Professional blow dry and style.', duration: '45 min' },
  { id: 6, name: 'Updo', price: 60, category: 'styling', description: 'Elegant updo for special occasions.', duration: '60 min' },
  { id: 7, name: 'Deep Conditioning', price: 35, category: 'treatments', description: 'Nourishing treatment for healthy hair.', duration: '30 min' },
  { id: 8, name: 'Keratin Treatment', price: 150, category: 'treatments', description: 'Smoothing keratin treatment for frizz-free hair.', duration: '150 min' },
];

const ServiceCard = ({ serviceMenu }) => {
  return (
    <div className={styles['service-card']}>
      <h3 className={styles['service-name']}>{serviceMenu.name}</h3>
      <p className={styles['service-description']}>{serviceMenu.description}</p>
      <p className={styles['service-details']}>
        <span className={styles['service-price']}>${serviceMenu.price}</span>
        <br />
        <span className={styles['service-duration']}>{serviceMenu.duration}</span>
      </p>
    </div>
   
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  return (
    <div className={styles['services-container']}>
      <h1 className={styles['services-title']}>Our Services</h1>
      
      <div className={styles['category-tabs']}>
        {serviceCategories.map((category) => (
          <button 
            key={category.id}
            className={`${styles['category-tab']} ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="services-grid">
        {servicesMenu
          .filter((serviceMenu) => serviceMenu.category === activeCategory)
          .map((serviceMenu) => (
            <ServiceCard key={serviceMenu.id} serviceMenu={serviceMenu} />
          ))}
      </div>
    </div>
  );
};

export default Services;