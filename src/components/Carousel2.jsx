import React from 'react';
import '../styles/ExtraActivities.css'; // Assuming this file contains your CSS styles
import img from '../components/img/8th.jpg';
import img1 from '../components/img/20.jpg';
import img2 from '../components/img/10th.jpg';
import img3 from '../components/img/21.png';

const Carousel2 = () => {
  const activities = [
    {
      name: "Yoga Sessions",
      img1: img,
      img2: img3,
      description: "Join our yoga sessions to relax and rejuvenate."
    },
    {
      name: "Free Medical Camp",
      img1: img1,
      img2: img2,
      description: "Participate in our community service activities."
    },
    {
      name: "Durga Puja",
      img1: "https://lh3.googleusercontent.com/p/AF1QipPYgKTBkUyQkpdTalZ42R6Xz5tGbLRkNohvJO8o=s1360-w1360-h1020",
      img2: "https://lh3.googleusercontent.com/p/AF1QipMHtce3avlNne6nSofLP_Ts_v26nBcvmajQsq6n=s1360-w1360-h1020",
      description: "Experience our vibrant cultural events."
    },

  ];

  return (
    <div className='extra-activities' id="ExtraActivities">
      <div className='container mx-auto px-4 py-8'>
        <h2><center>Extra Activities</center></h2><br />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {activities.map((activity, index) => (
            <div key={index} className='activity-card'>
              <div className='activity-info'>
                <h5 className='activity-title'>{activity.name}</h5>
              </div>
              <div className='activity-images'>
                <div className='activity-image'>
                  <img src={activity.img1} alt={activity.name} className='zoom-image' />
                </div>
                <div className='activity-image'>
                  <img src={activity.img2} alt={activity.name} className='zoom-image' />
                </div>
              </div>
              <div className='activity-info'>
                <p className='activity-description'>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
