import React from 'react';
import './Startboard.css'; 

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
