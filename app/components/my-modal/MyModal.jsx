'use client'
import React, { useState } from 'react';
import './Modal.css'; // Your custom styles

function MyModal ({ isOpen, onClose, children })  {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default MyModal;