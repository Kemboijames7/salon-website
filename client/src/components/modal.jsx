// Modal.jsx
import React from 'react';
import '../Modal.css'; // Add styles for modal

const Modal = ({ content, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>{content}</h2>
                <p>This is a global modal. Customize its content dynamically.</p>
            </div>
        </div>
    );
};

export default Modal;
