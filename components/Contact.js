import React, { useState } from 'react';
import '../CSS/Contact.css';  // Import the CSS file for styling
import logo from './images/Logo.jpg';  // Import the company logo
import contactImage from './images/contact.webp';  // Import the contact image
import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();
    const [submitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/api/contact/submit-request', formData);
        if (response.status === 200) {
          alert('Request submitted successfully!');
          navigate('/Contact'); // Redirect after successful submission//      
          } else {
          alert('Request submission failed.');
        }
      } catch (error) {
        alert('Failed to submit the request.');
        console.error('There was an error submitting the form!', error.response || error.message);
        navigate('/Contact'); // Redirect even in case of failure
      }
    };

    return (
        <>
        <Header/>
        <div className="contact-container">
        <div className="contact-image-container">
                <img src={contactImage} alt="Contact" className="contact-image" />
            </div>
            <div className="contact-form-container">
                <img src={logo} alt="Company Logo" className="logo" />
                <h1>Contact Us</h1>
                {submitted ? (
                    <div className="thank-you-message">
                        <h2>Thank You!</h2>
                        <p>Your message has been successfully sent. We will contact you soon.</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;
