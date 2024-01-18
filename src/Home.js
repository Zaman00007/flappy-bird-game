import React from 'react';
import './Home.css';

const Home = ({ children, onClick }) => {
  return (
    <div className="home" onClick={onClick}>
      {children}
    </div>
  );
};

export default Home;
