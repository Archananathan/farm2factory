
import React, { useState } from 'react';
 import '../CSS/Sell.css';
import { Link, useNavigate } from 'react-router-dom';
 import axios from 'axios'; // Make sure to import axios if you're using it

 const Buy = ({ onCancel }) => {
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     address: '',
     wasteType: '',
     startDate: '',
     additionalInfo: ''
   });

   const navigate = useNavigate();

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       [name]: value
     }));
   };

   const validatePhoneNumber = (phone) => {
    // Simple regex for phone number validation
    const phoneRegex = /^[6789]\d{9}$/; // Adjust this regex as needed
    return phoneRegex.test(phone);
  };

   const handleSubmit = async (e) => {
     e.preventDefault();
     if (!validatePhoneNumber(formData.phone)) {
      alert('Invalid phone number. Please enter a valid 10-digit phone number.');
      return;
    }
     try {
       const response = await axios.post('http://localhost:8080/api/buyform/submit-request', formData);
       if (response.status === 200) {
         alert('Request submitted successfully!');
         navigate('/IndustryProducts'); // Redirect after successful submission//      
          } 
         else {
         alert('Request submission failed.');
       }
     } catch (error) {
       alert('Failed to submit the request.');
       console.error('There was an error submitting the form!', error.response || error.message);
       navigate('/UserProduct'); // Redirect even in case of failure
     }
   };

   return (
     <div className="sell-form-container">
       <div className='sell-form-cont'>
         <form onSubmit={handleSubmit} className="sell-form">
           <h2>Sell the item at the best price</h2>
           <div className="form-row">
             <div className="form-group">
               <label htmlFor="name">Full Name</label>
               <input
                 type="text"
                 id="name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="email">Email</label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
               />
             </div>
           </div>
           <div className="form-row">
             <div className="form-group">
               <label htmlFor="phone">Phone</label>
               <input
                 type="tel"
                 id="phone"
                 name="phone"
                 value={formData.phone}
                 onChange={handleChange}
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="address">Address</label>
               <input
                 type="text"
                 id="address"
                 name="address"
                 value={formData.address}
                 onChange={handleChange}
                 required
               />
             </div>
           </div>
           <div className="form-group">
             <label htmlFor="quantity">Quantity</label>
             <input
               type="text"
               id="quantity"
               name="quantity"
               value={formData.quantity}
               onChange={handleChange}
               required
             />
           </div>
           <div className="form-group">
             <label htmlFor="wasteType">Type of Waste</label>
             <select
               id="wasteType"
               name="wasteType"
               value={formData.wasteType}
               onChange={handleChange}
               required
             >
               <option value="">Type of waste</option>
               <option value="Rice Straw">Rice Straw</option>
               <option value="Coconut Shell">Coconut Shell</option>
               <option value="Goat Poop">Goat Poop</option>
               <option value="Cow Dung">Cow Dung</option>
               <option value="Sugarcane Stem">Sugarcane Stem</option>
               <option value="Goat Hair">Goat Hair</option>
               <option value="Cotton Flower">Cotton Flower</option>
               <option value="Dry Leaf">Dry Leaf</option>
               <option value="Waste Vegetables">Waste Vegetables</option>
               <option value="Waste Plant">Waste Plant</option>
               <option value="Egg Shell">Egg Shell</option>
             </select>
           </div>
           <div className="form-group">
             <label htmlFor="startDate">Preferred Collection Date</label>
             <input
              type="date"
               id="startDate"
               name="startDate"
               value={formData.startDate}
               onChange={handleChange}
               required
             />
           </div>
           <div className="form-group">
             <label htmlFor="additionalInfo">Additional Information about Waste Material</label>
             <textarea
               id="additionalInfo"
               name="additionalInfo"
               value={formData.additionalInfo}
               onChange={handleChange}
               placeholder="Any specific instructions or requirements?"
             />
           </div>
           <div className="form-row">
             <div className="form-group">
               <button type="submit" className="submit-button">
                 Submit
               </button>
             </div>
             <div className="form-group">
               <Link to="/IndustryProducts">
                 <button type="button" className="cancel-button" onClick={onCancel}>
                   Cancel
                 </button>
               </Link>
             </div>
           </div>
         </form>
       </div>
     </div>
   );
 };

 export default Buy;
