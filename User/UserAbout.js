import React, { useState } from 'react';
import '../CSS/About.css';

// Sample images
import missionImage from '../components/images/mission.webp';
import offerImage from '../components/images/offer.jpg';
import visionImage from '../components/images/vision.jpg';
import teamImage from '../components/images/team.jpg';
import UserNav from './UserNav';
import Footer from '../components/Footer';

function UserAbout() {
  return (
    <>
    <UserNav/>
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-content">
        <div className="about-section">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              At EcoHarvest Solutions, our mission is to transform agricultural waste into valuable resources, promoting sustainability and reducing environmental impact. We specialize in buying and selling a variety of agro waste, including coconut shells, animal waste, and plant stems.
            </p>
          </div>
          <div className="image">
            <img src={missionImage} alt="Our Mission" />
          </div>
        </div>
        <div className="about-section reverse">
          <div className="text">
            <h2>What We Offer</h2>
            <p>
              We provide a platform where farmers, ranchers, and businesses can easily buy and sell agricultural waste. Our offerings include:
            </p>
            <ul>
              <li style={{color:'black'}}>Coconut Shells: Ideal for use in crafts, fuel, and as a natural mulch.</li>
              <li style={{color:'black'}}>Animal Waste: Perfect for composting and as a natural fertilizer.</li>
              <li style={{color:'black'}}>Plant Stems: Useful for biofuel production, crafting, and as organic matter for soil enrichment.</li>
            </ul>
          </div>
          <div className="image">
            <img src={offerImage} alt="What We Offer" />
          </div>
        </div>
        <div className="about-section">
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              We envision a future where agricultural waste is no longer a burden but a valuable resource. By bridging the gap between waste producers and buyers, we aim to create a more sustainable and efficient agricultural industry.
            </p>
          </div>
          <div className="image">
            <img src={visionImage} alt="Our Vision" />
          </div>
        </div>
        <div className="about-section reverse">
          <div className="text">
            <h2>Our Team</h2>
            <p>
              Our team is dedicated to promoting sustainability and supporting the agricultural community. With years of experience in waste management and agriculture, we are committed to providing excellent service and innovative solutions.
            </p>
          </div>
          <div className="image">
            <img src={teamImage} alt="Our Team" />
          </div>
        </div>
      </section>
      </div>
      <Footer/>
      </>
  );
};

export default UserAbout;
