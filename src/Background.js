import React from 'react';
import './Background.css';

const Background = ({ children, width, height }) => {
  return (
    <div className="Background" style={{ width, height }}>
      {children}
    </div>
  );
};

export default Background;