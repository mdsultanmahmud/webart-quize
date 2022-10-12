import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../../image/logo1.jpg'
import logo2 from '../../image/logo2.jpg'
import logo3 from '../../image/logo3.jpg'
function ShowCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{height:'80vh'}}
          src={logo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'tomato'}}>Practice With Us</h3>
          <p>If you join with us, we will make you perfect coder.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{height:'80vh'}}
          src={logo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{color:'tomato'}}>Learning Someting New</h3>
          <p>For shining in life, gather knowladge</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{height:'80vh'}}
          src={logo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color:'tomato'}}>Work Hard</h3>
          <p>
            Hard work can change you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ShowCarousel