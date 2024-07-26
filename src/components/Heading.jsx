import React from 'react';
import './Heading.css';
import img from '../components/img/png/2nd.png';

function Heading() {
  return (
    <header className="heading">
      <div className="heading-content">
        <img src={img} className="heading-image" alt="Heading" />
        <div className="heading-text">
          <div className="text-container">
            <h1 className="heading-title">Rest Camp Kalibari</h1>
            <p className="heading-subtitle">A Place of Spiritual Peace and Harmony</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Heading;
