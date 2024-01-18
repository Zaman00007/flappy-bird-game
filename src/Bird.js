import React from 'react';
import './Bird.css';

const Bird = ({ height, width, top, left }) => {
  return <div className="bird" style={{ height, width, top, left }} />;
};

export default Bird;