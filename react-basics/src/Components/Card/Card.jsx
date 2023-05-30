import React from 'react';
import './Card.css';

function Card({ image, name, shadowColor }) {
  const cardStyle = {
    boxShadow: `0px 2px 4px ${shadowColor}`,
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>This is my Card Component, created <br /> using functional Approach</p>
      <button>details</button>
    </div>
  );
}

export default Card;
