// src/components/Slider.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'; // Optional: Custom styles for the slider
import img from '../components/img/1st.jpg';
import img1 from '../components/img/2nd.jpg';
import img2 from '../components/img/3rd.jpg';
import img3 from '../components/img/18.jpg';
import img4 from '../components/img/13th.jpg';
import img5 from '../components/img/14th.jpg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-between">
          <img
            className="d-block w-48"
            src={img}
            alt="First slide"
          />
          <img
            className="d-block w-48"
            src={img1}
            alt="Second slide"
          />
          <img
            className="d-block w-48"
            src={img2}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <p>या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-between">
          <img
            className="d-block w-48"
            src={img3}
            alt="Fourth slide"
          />
          <img
            className="d-block w-48"
            src={img4}
            alt="Fifth slide"
          />
          <img
            className="d-block w-48"
            src={img5}
            alt="Sixth slide"
          />
        </div>
        <Carousel.Caption>
          <p>ॐ जयन्ती, मङ्गला, काली, भद्रकाली, कपालिनी। दुर्गा, क्षमा, शिवा, धात्री, स्वाहा, स्वधा नमोऽस्तुते॥ एष सचन्दन गन्ध पुष्प बिल्व पत्राञ्जली ॐ ह्रीं दुर्गायै नमः॥</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
