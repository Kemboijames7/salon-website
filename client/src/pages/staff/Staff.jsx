import React from 'react';
import styles from './staff.module.css';

const staffMembers = [
  {
      id: 1,
      name: "Bettie Johnson",
      role: "Senior Stylist",
      specialty: "Color Specialist",
      bio: "With over 10 years of experience, Bettie is known for her innovative coloring techniques and attention to detail.",
      imageUrl: "/images/bettie.png" 
  },
  {
      id: 2,
      name: "James Chen",
      role: "Master Barber",
      specialty: "Men's Cuts & Styling",
      bio: "James's precision cuts and modern styling have made him a favorite among our male clientele.",
      imageUrl: "/images/james.png" 
  },
  {
      id: 3,
      name: "Naomi Rodriguez",
      role: "Stylist",
      specialty: "Bridal & Special Occasion",
      bio: "Naomi's creative updos and elegant styles are perfect for weddings and special events.",
      imageUrl: "/images/naomi.png" 
  },
  {
      id: 4,
      name: "Hames Cortez",
      role: "Barber",
      specialty: "Expert in Grooming for Special Events",
  bio: "With a keen eye for detail and a passion for style, Hames specializes in creating tailored looks for weddings and special occasions, ensuring every client feels confident and polished on their big day.",
      imageUrl: "/images/Hames.png" 
  },
];

const StaffMember = ({ member }) => (
    <div className={styles.staffMember}>
      <img src={member.imageUrl} alt={`${member.name} profile`} className={styles.staffPhoto} />
      <div className={styles.staffInfo}>
        <h3 className={styles.staffName}>{member.name}</h3>
        <p className={styles.staffRole}>{member.role}</p>
        <p className={styles.staffSpecialty}><strong>Specialty:</strong> {member.specialty}</p>
        <p className={styles.staffBio}>{member.bio}</p>
      </div>
    </div>
  );

  const StaffPage = () => (
    <section className={styles.staffContainer}>
      <h1 className={styles.staffHeader}>Meet Our Team</h1>
      <p className={styles.staffIntro}>
        At Qwinnis Hair Salon, our team of skilled professionals is dedicated to helping you look and feel your best. 
        Get to know the talented individuals who will be taking care of your hair needs.
      </p>
      <div className={styles.staffGrid}>
        {staffMembers.map(member => (
          <StaffMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
  
  export default StaffPage;