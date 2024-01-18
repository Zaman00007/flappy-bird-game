import React from 'react';
import './Pipe.css';

const Pipe = ({ height, width, left, top, deg }) => {
  return <div className="pipe" style={{ height, width, left, top, transform: `rotate(${deg}deg)` }} />;
};

export default Pipe;