// src/components/DurgaPuja.jsx

import React from 'react';
import '../styles/DurgaPuja.css'; // Import the CSS file for styling
import durgaImage from '../components/img/111.jpg'; // Import the image you want to use

const DurgaPuja = () => {
  return (
    <div className="durga-puja-container">
      <div className="hero-section">
        <img src={durgaImage} alt="Durga Puja" className="hero-image" />
        <div className="hero-text">
          <h1>Durga Puja</h1>
          <p>
            Celebrate the grandeur and spirit of Durga Puja, a vibrant festival that honors the victory of the goddess Durga over the buffalo demon Mahishasura.
          </p>
        </div>
      </div>
      <div className="content-section">
        <div className="container">
          <center> <h2>Durga Puja</h2></center>
          <p>
            Nestled amidst the serene beauty of nature, Rest Camp Kalibari is proud to host one of the most anticipated and celebrated events of the year: Durga Puja. This grand celebration is a tribute to the divine feminine energy of Goddess Durga, who embodies strength, compassion, and wisdom.

            Durga Puja at Rest Camp Kalibari is not just a festival; it's a mesmerizing cultural experience that transcends boundaries and brings people together. Each year, thousands of devotees and visitors gather to witness the magnificence of the festivities, which are marked by devotion, creativity, and a sense of community. It is particularly popular in the Indian states of West Bengal, Assam, Tripura, Odisha, Jharkhand, and Bihar.
          </p>
          <p>
            <h3>The Essence of the Festival
            </h3>
            At the heart of Durga Puja lies the timeless tale of Goddess Durga's victory over the demon king Mahishasura, symbolizing the triumph of good over evil. This victory is celebrated with grandeur and fervor, reflecting the goddess's role as a warrior who fights for righteousness and justice.

            The puja begins with the ceremonial unveiling of the exquisitely crafted idol of Goddess Durga, depicted with her ten arms holding various weapons and riding her majestic lion. The idol is surrounded by her children – Ganesha, Kartikeya, Lakshmi, and Saraswati – representing different aspects of life and the cosmos.
          </p>
          <p>
            <h3>The Splendor of the Pandal
            </h3>
            Every year, Rest Camp Kalibari transforms into a visual masterpiece with its breathtaking pandal, a temporary artistic structure that houses the deity. Designed and built by skilled artisans, the pandal is adorned with intricate decorations, vibrant colors, and thematic artistry that often tells a story or highlights a cultural motif. This year, the theme draws inspiration from the rich heritage of Indian art, showcasing traditional motifs with a modern twist.

            Visitors are captivated by the stunning decorations, the gentle glow of lamps, and the fragrant flowers that create an ambiance of serenity and spirituality. The pandal becomes a canvas of creativity, inviting everyone to explore and immerse themselves in the beauty of art and devotion.
          </p>
          <p>
            <h3>A Cultural Extravaganza
            </h3>
            Durga Puja at Rest Camp Kalibari is also a celebration of cultural diversity. The festival hosts an array of cultural programs and performances that highlight the rich traditions of India. From classical dances like Bharatanatyam and Kathak to contemporary performances and folk music, there is something for everyone to enjoy.

            The evenings come alive with the rhythmic beats of the dhak (traditional drums) as devotees participate in the vibrant Dhunuchi Naach, a traditional dance performed with incense burners. The air is filled with the sound of conch shells and the chanting of hymns, creating an atmosphere of divine bliss.
          </p>


          <h3>Key Highlights</h3>
          <ul>
            <li>Pandal Hopping: Visit creatively themed pandals with spectacular Durga idols.</li>
            <li>Cultural Programs: Enjoy traditional dance, music, and theatrical performances.</li>
            <li>Food Delights: Savor the best of Bengali cuisine, from sweets to street food.</li>
            <li>Community Events: Participate in aarti, prayers, and community gatherings.</li>
          </ul>
          <h3>Festival Schedule</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sasthi</td>
                <td>Opening Ceremony & Pandal Inauguration</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Saptami</td>
                <td>Puja Rituals & Cultural Programs</td>
                <td>8:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td>Ashtami</td>
                <td>Sandhi Puja & Traditional Dance Performances</td>
                <td>9:00 AM - 9:00 PM</td>
              </tr>
              <tr>
                <td>Navami</td>
                <td>Bhog Distribution & Musical Night</td>
                <td>9:00 AM - 10:00 PM</td>
              </tr>
              <tr>
                <td>Dashami</td>
                <td>Visarjan & Farewell</td>
                <td>10:00 AM - 5:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cta-section">
        <div className="cta-content">
          <h2>Join the Celebration</h2>
          <p>
            Immerse yourself in the divine atmosphere of Durga Puja. Join us in celebrating the triumph of good over evil and be part of this cultural extravaganza.
          </p>
          <button className="cta-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default DurgaPuja;
