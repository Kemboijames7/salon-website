import React, { useState }  from 'react';
import { 
  Grid3x3, 
  List, 
  Filter, 
  Search, 
  DollarSign, 
  Clock, 
  Filter as FilterIcon 
} from 'lucide-react';
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

const ServiceCard = ({ serviceMenu, layout }) => {
  // Adaptive card rendering based on layout mode
  if (layout === 'list') {
    return (
      <div className={`${styles['service-card']} ${styles['list-view']}`}>
        <div className={styles['service-content']}>
          <h3 className={styles['service-name']}>{serviceMenu.name}</h3>
          <p className={styles['service-description']}>{serviceMenu.description}</p>
          <div className={styles['service-meta']}>
            <span className={styles['service-price']}>
              <DollarSign size={16} className={styles['icon']} /> ${serviceMenu.price}
            </span>
            <span className={styles['service-duration']}>
              <Clock size={16} className={styles['icon']} /> {serviceMenu.duration}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div className={`${styles['service-card']} ${styles['grid-view']}`}>
      <h3 className={styles['service-name']}>{serviceMenu.name}</h3>
      <p className={styles['service-description']}>{serviceMenu.description}</p>
      <div className={styles['service-details']}>
        <span className={styles['service-price']}>${serviceMenu.price}</span>
        <span className={styles['service-duration']}>{serviceMenu.duration}</span>
      </div>
    </div>
  );
};

const Services = () => {
  // State management for responsive features
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [layoutMode, setLayoutMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showFilters, setShowFilters] = useState(false);

  // Responsive breakpoints
  const BREAKPOINTS = {
    mobile: 640,
    tablet: 768,
    desktop: 1024
  };

  // Responsive layout and mode handling
  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     setScreenWidth(width);

      
  //     if (width < BREAKPOINTS.mobile) {
  //       setLayoutMode('list');
  //     } else if (width >= BREAKPOINTS.desktop) {
  //       setLayoutMode('grid');
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // Filtering and searching services
  const filteredServices = servicesMenu
    .filter((service) => 
      service.category === activeCategory && 
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Layout toggle for larger screens
  const LayoutToggle = () => (
    <div className={styles['layout-toggle']}>
      <button 
        onClick={() => setLayoutMode('grid')}
        className={layoutMode === 'grid' ? styles['active'] : ''}
      >
        <Grid3x3 size={20} />
      </button>
      <button 
        onClick={() => setLayoutMode('list')}
        className={layoutMode === 'list' ? styles['active'] : ''}
      >
        <List size={20} />
      </button>
    </div>
  );

  return (
    <div className={styles['services-container']}>
      <h1 className={styles['services-title']}>Our Services</h1>
      
      {/* Responsive Search and Filters */}
      <div className={styles['services-controls']}>
        <div className={styles['search-container']}>
          <Search size={20} className={styles['search-icon']} />
          <input 
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles['search-input']}
          />
        </div>

        {/* Responsive Filter Toggle */}
        {screenWidth < BREAKPOINTS.tablet && (
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={styles['filter-toggle']}
          >
            <FilterIcon size={20} /> Filters
          </button>
        )}

        {/* Layout Toggle for larger screens */}
        {screenWidth >= BREAKPOINTS.desktop && <LayoutToggle />}
      </div>
      
      {/* Category Tabs */}
      <div className={styles['category-tabs']}>
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            className={`${styles['category-tab']} ${activeCategory === category.id ? styles['active'] : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Adaptive Services Grid */}
      <div className={`
        ${styles['services-grid']} 
        ${layoutMode === 'list' ? styles['list-layout'] : styles['grid-layout']}
      `}>
        {filteredServices.map((serviceMenu) => (
          <ServiceCard 
            key={serviceMenu.id} 
            serviceMenu={serviceMenu} 
            layout={layoutMode} 
          />
        ))}
      </div>

      {/* No Results Handling */}
      {filteredServices.length === 0 && (
        <p className={styles['no-results']}>
          No services found in this category.
        </p>
      )}
    </div>
  );
};
export default Services;