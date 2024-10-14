import React from 'react';
import './staff.module.css';

// Sample staff data - replace with actual staff information
const staffMembers = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Senior Stylist",
    specialty: "Color Specialist",
    bio: "With over 10 years of experience, Emma is known for her innovative coloring techniques and attention to detail.",
    imageUrl: "/api/placeholder/150/150" // Replace with actual image path
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Master Barber",
    specialty: "Men's Cuts & Styling",
    bio: "Michael's precision cuts and modern styling have made him a favorite among our male clientele.",
    imageUrl: "/api/placeholder/150/150" // Replace with actual image path
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Stylist",
    specialty: "Bridal & Special Occasion",
    bio: "Sophia's creative updos and elegant styles are perfect for weddings and special events.",
    imageUrl: "/api/placeholder/150/150" // Replace with actual image path
  },
  // Add more staff members as needed
];

const StaffMember = ({ member }) => (
  <div className="staff-member">
    <img src={member.imageUrl} alt={member.name} className="staff-photo" />
    <h3 className="staff-name">{member.name}</h3>
    <p className="staff-role">{member.role}</p>
    <p className="staff-specialty">{member.specialty}</p>
    <p className="staff-bio">{member.bio}</p>
  </div>
);

const StaffPage = () => {
  return (
    <div className="staff-container">
      <h1 className="staff-header">Meet Our Team</h1>
      <p className="staff-intro">
        At Qwinnis Hair Salon, our team of skilled professionals is dedicated to helping you look and feel your best. 
        Get to know the talented individuals who will be taking care of your hair needs.
      </p>
      <div className="staff-grid">
        {staffMembers.map(member => (
          <StaffMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default StaffPage;