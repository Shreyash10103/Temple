import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from './Slider.jsx'; // Import the Slider component
import './HomePage.css'; // Optional: Custom styles for the homepage
import Carousel1 from '../components/Carousel1.jsx'
import Carousel2 from '../components/Carousel2.jsx'

import img from '../components/img/4rd.jpg'
import img1 from '../components/img/6th.png'
import img2 from '../components/img/8th.jpg'


function Home() {
  return (
    <div className="homepage">
      <Slider />
      <div className="notice-line">
        <div className="container halfspace d-flex justify-content-center align-items-center">
          <marquee className="py-4 fw-bolder text-danger" style={{ borderRadius: '25px' }}>
            | JAI MAA KALI | JAI MAA KALI  | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI | JAI MAA KALI |
          </marquee>
        </div>
      </div>

      <Container className="content">
        <div className='row'>
          <div className='col-lg-3'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/SrP1rDicJBY?si=PBbf3c0jqwwFMJ8j&amp;start=23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='col-lg-6'>
            <h2>Welcome to Kalibari</h2>
            <p className='dsdfs'>
              RestCamp Kalibari, situated at the base of the sacred Nilachal Hill in Pandu, Assam, was established in 1948 by railway workers displaced by the Partition of India. Founded on the auspicious day of Dipavali, this temple became a sanctuary for those who had lost their homes and social identity, offering a place for worship and communal unity. Originally a modest bamboo and thatch structure, the temple evolved into a significant spiritual and cultural center, renowned for its annual Durga Puja celebrations that draw devotees from across Northeast India. As a symbol of resilience and faith, RestCamp Kalibari stands testament to the unwavering spirit of a community that found solace and strength in the face of adversity.
            </p>
          </div>
          <div className='col-lg-3'>

            <div className="marquee-container">
              <div className="marquee">
                <h4><center>NOTICE</center></h4>
                <p>Notice 1: Temple event on Friday</p>
                <p>Notice 2: Special prayers on Sunday</p>
                <p>Notice 3: Volunteer meeting on Wednesday</p>
                {/* Add more notices as needed */}
              </div>
            </div>
          </div>
        </div>
        <img src={img1} className='ggg' /><br /><br />
        <div className='row'>
          <div className='col-lg-3'>
            <img src={img} className='dazsds' />

          </div>
          <div className='col-lg-6'>
            <center> <h2>Bhog Puja</h2></center>
            <p className='dsdfsa'>
              The Bhog Puja at RestCamp Kalibari is a deeply spiritual ritual dedicated to Maa Kali, performed with reverence and devotion. It takes place every day at 11:45 AM, where offerings are made to the goddess in the form of cooked food, fruits, and sweets. These offerings, known as Bhog, symbolize the devotees' gratitude and seek blessings for health and prosperity. After the Puja, the Bhog is distributed as Prasad to all the devotees, fostering a sense of community and shared spiritual nourishment. This ritual not only embodies the divine grace of Maa Kali but also reinforces the temple's role as a sanctuary of peace and unity.
            </p>
          </div>
          <div className='col-lg-3'>
            <div className='con'>
              <br />
              <h4><center>TEMPLE TIMINGS</center></h4><br />
              <p>Morning : 9:00am Temple Open</p>
              <p>Puja    : 11:45am</p>
              <p>Bhog    : 1:00pm</p>
              <p>Evening Sandhya Arti : 7:30pm</p>
              <p>Mandir Closing time : 9:00pm</p>

            </div>

          </div>
        </div>
        <img src={img1} className='ggg' /><br />
        <h2><center>Festivals</center></h2>
        <br />
        <Carousel1 /><br />
        <img src={img1} className='ggg' /><br /><br /><br />


        <Carousel2 />

        <img src={img1} className='ggg' /><br /><br /><br />
        <h2><center>Our Location</center></h2><br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114593.67938011861!2d91.60941160096776!3d26.16242025055632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x375a5b7ee664d51d%3A0x9e4e20b970349425!2sRest%20Camp%2C%20Pandu%2C%20Guwahati%2C%20Assam%20781012!3m2!1d26.162440699999998!2d91.6918281!5e0!3m2!1sen!2sin!4v1720707213808!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: '0' }}  // Use an object for style, not a string
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
        <img src={img1} className='ggg' />

      </Container>


    </div>
  );
}

export default Home;
