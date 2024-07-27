// src/components/JagannathRathYatra.jsx

import React from 'react';
import '../styles/JagannathRathYatra.css'; // Import the CSS file for styling
import rathYatraImage from '../components/img/15.jpg'; // Import the image you want to use

const JagannathRathYatra = () => {
  return (
    <div className="rath-yatra-container">
      <div className="hero-section">
        <img src={rathYatraImage} alt="Jagannath Rath Yatra" className="hero-image" />
        <div className="hero-text">
          <h1>Jagannath Rath Yatra</h1>
          <p>
            Embark on a spiritual journey during the Jagannath Rath Yatra, an awe-inspiring festival that celebrates the annual procession of Lord Jagannath, Balabhadra, and Subhadra.
          </p>
        </div>
      </div>
      <div className="content-section">
        <div className="container">
          <center>  <h2> Jagannath Rath Yatra</h2></center>
          <p>
            Rest Camp Kalibari proudly presents the Jagannath Rath Yatra, a mesmerizing festival that transports devotees into a realm of spirituality and cultural grandeur. This time-honored tradition, celebrated with unmatched zeal and devotion, embodies the journey of Lord Jagannath, Lord Balabhadra, and Devi Subhadra from their sacred abode to the Gundicha Temple. The festival is a tapestry of faith, music, and community, drawing thousands of devotees and tourists alike to partake in this celestial procession.
          </p>
          <p>
            The festival marks the annual journey of Lord Jagannath, along with his siblings, Lord Balabhadra and Devi Subhadra, from their temple to the Gundicha Temple. The deities travel on grand chariots, pulled by thousands of devotees, symbolizing the devotion and faith of the worshippers.
          </p><p>
            <h3>The Divine Procession</h3>
            At the heart of the Jagannath Rath Yatra is the majestic procession of three richly adorned chariots, each representing a divine sibling. The chariots, towering and vibrant, are meticulously crafted with intricate designs and bedecked with flowers, garlands, and colorful canopies. As they make their journey through the streets, a sea of devotees gathers, their hearts pulsating with chants and hymns that resonate through the atmosphere, creating an aura of divine energy.

            The pulling of the chariots by thousands of enthusiastic devotees symbolizes their ardent devotion and collective spirit. The rhythmic chants of "Jai Jagannath" echo through the air, harmonizing with the beats of traditional drums and cymbals, as participants believe that joining in this sacred act washes away their sins and brings them closer to the divine.
            <h3>A Celebration of Culture and Unity</h3>
            Beyond its religious significance, the Jagannath Rath Yatra is a cultural extravaganza that showcases the rich heritage and artistic vibrancy of the region. Rest Camp Kalibari orchestrates a series of captivating cultural programs throughout the festival, including traditional dance performances, music concerts, and theatrical plays that narrate the divine tales of Lord Jagannath. These performances are a visual feast, reflecting the deep-rooted traditions and artistic excellence of the local artisans.

            The festival also serves as a platform for communal harmony, bringing together people from all walks of life. Devotees and visitors, regardless of their backgrounds, come together to celebrate this spiritual event, fostering a sense of unity and fraternity. The sharing of meals and the participation in various rituals reflect the essence of togetherness and the inclusive nature of the festival.
            <h3>Spiritual Enlightenment and Reflection</h3>
            The Jagannath Rath Yatra is not merely a visual spectacle; it is a spiritual odyssey that encourages introspection and enlightenment. Rest Camp Kalibari organizes spiritual discourses and meditation sessions that allow participants to delve deeper into the teachings of Lord Jagannath and the philosophies that underpin the festival. These sessions offer a moment of tranquility and reflection, enabling devotees to connect with their inner selves and seek divine guidance.
            <h3>A Festival Like No Other</h3>
            The Jagannath Rath Yatra at Rest Camp Kalibari is more than just a festival; it is a profound experience that leaves an indelible mark on the hearts of those who partake in its splendor. The festival stands as a testament to the enduring power of faith, the richness of culture, and the beauty of human connection. As the chariots roll forward, they carry with them the hopes, prayers, and dreams of countless devotees, weaving a timeless narrative of devotion and divinity.


          </p>
          <h3>Key Highlights</h3>
          <ul>
            <li>Chariot Procession: Witness the majestic chariots as they travel through the streets, accompanied by chanting and music.</li>
            <li>Devotional Singing: Join in the kirtans and bhajans, spreading the message of love and devotion.</li>
            <li>Cultural Programs: Enjoy vibrant cultural performances showcasing traditional dance and music.</li>
            <li>Spiritual Discourses: Participate in enlightening talks and discussions on spirituality and philosophy.</li>
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
                <td>Day 1</td>
                <td>Chariot Decoration & Inauguration</td>
                <td>00:00 AM</td>
              </tr>
              <tr>
                <td>Day 2</td>
                <td>Procession Begins & Cultural Shows</td>
                <td>00:00 AM - 00:00 PM</td>
              </tr>
              <tr>
                <td>Day 3</td>
                <td>Bhajans & Spiritual Talks</td>
                <td>00:00 AM - 00:00 PM</td>
              </tr>
              <tr>
                <td>Day 4</td>
                <td>Return Journey & Closing Ceremony</td>
                <td>00:00 AM - 00:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cta-section">
        <div className="cta-content">
          <h2>Be Part of the Divine Journey</h2>
          <p>
            Join us for the Jagannath Rath Yatra and experience the spiritual bliss that comes with devotion and community. Let the chariot of faith carry you towards enlightenment.
          </p>
          <button className="cta-button">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default JagannathRathYatra;
