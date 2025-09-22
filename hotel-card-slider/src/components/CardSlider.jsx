import React, { useState } from 'react';
import roomsData from '../data/rooms';
import './CardSlider.css';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % roomsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + roomsData.length) % roomsData.length);
  };

  return (
    <div className="card-slider">
      <button className="slider-btn prev" onClick={prevSlide}>❮</button>
      <div className="card-container">
        {roomsData.map((room, index) => (
          <div
            key={room.id}
            className={`card ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${room.image})` }}
          >
            <div className="card-content">
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <p className="price">${room.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default CardSlider;