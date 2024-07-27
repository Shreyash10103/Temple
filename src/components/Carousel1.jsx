import React from 'react';
import '../styles/Content1.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import img from '../components/img/7th.jpg'
import img1 from '../components/img/17.jpg'
import im from '../components/img/1111.jpg'



const Content1 = () => {

  const data = [
    {
      name: "Durga Puja",
      img: img,
      content: "Durga Puja, the grand celebration of the goddess Durga, is a major event organized by RestCamp Kalibari. This festival, which typically spans five days, is marked by elaborate rituals, cultural performances, and a strong sense of community."
    },
    {
      name: "Rath Yatra",
      img: img1,
      content: "The Jagannath Rath Yatra, or the Chariot Festival, is another major event organized by Western Kalibari. This festival celebrates the annual journey of Lord Jagannath, along with his siblings, Balabhadra and Subhadra, from their temple to the Gundicha Temple."
    },
    {
      name: "Ambubachi Narayan Seva",
      img: im,
      content: "The Ambubachi Festival is an auspicious event takes place at our historic temple  and marks the annual menstruation cycle of the goddess Kamakhya.As part of the Festival, we offer prasad to all devotees, a sacred gesture of the goddess's boundless grace and compassion."
    },



  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <div className='services' id="Productt">
      <div className='container mx-auto px-0 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <Slider {...(window.innerWidth > 768 ? settings : settings1)}>
            {data.map((d, index) => (
              <div>
                <div key={index} className='card1'>
                  <div className='card'>
                    <img src={d.img} alt={d.name} className='image1' />
                  </div>
                  <div className='card2'>
                    <h3 className='headd'>{d.name}</h3>
                    <p className='bodyy'>{d.content}</p>



                  </div>


                </div>
                <div className='card6'>
                  <Link to={d.name}><button className='mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 custom-button'>Read More</button></Link>
                </div>



              </div>


            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Content1
