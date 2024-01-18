// src/components/Startboard.js
import React from 'react';
import './Startboard.css'; // Import the CSS file

const Startboard = ({ children }) => {
  return (
    <div className="startboard-container">
      <div className="startboard">
        {children}
      </div>
    </div>
  );
};

export default Startboard;
