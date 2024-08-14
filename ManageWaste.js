import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import profilePic from './components/images/adminprofile.jpg';
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const ManageWaste = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: '',
    category: '', // 'farmer' or 'industry'
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/farmer'); // or /industry
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setFormData(product);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8080/api/products/${formData.id}`, formData);
      } else {
        await axios.post('http://localhost:8080/api/products', formData);
      }
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error('Failed to save product', error);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      image: '',
      category: '',
    });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout operations here (e.g., clearing auth tokens)
    navigate('/');
  };
  const handleSellRequest = () => {
    // Perform any logout operations here (e.g., clearing auth tokens)
    navigate('/AdminFarmer');
  };
  const handleAdminDashboard = () => {
    // Perform any logout operations here (e.g., clearing auth tokens)
    navigate('/AdminDashboard');
  };
  const handleIndustryReqeust = () => {
    // Perform any logout operations here (e.g., clearing auth tokens)
    navigate('/AdminIndustry');
  };
  const handleFeedback = () => {
    // Perform any logout operations here (e.g., clearing auth tokens)
    navigate('/AdminContact');
  };
  const handleManageWaste = () => {
    // Perform any logout operations here (e.g., clearing auth tokens)
    navigate('/manage');
  };

  return (
    <div className="admin-dashboard">
      <div className="side-panel">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h3 className="profile-name">Archana B</h3>
          <p className="profile-role">Administrator</p>
        </div>
        <ul>
        <li onClick={handleAdminDashboard}>
            Dashboard
          </li>
          <li onClick={handleSellRequest}>
            Buy Management
          </li>
          <li onClick={handleIndustryReqeust}>
            Sell Management
          </li>
          <li onClick={handleFeedback}>
            Feedback
          </li>
          <li onClick={handleManageWaste}>
            Add Product
          </li>
        </ul>
        <div className="logout-section">
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </div>
      <div className="sell-form-container1">
      <div className='sell-form-cont'>
      
      <form onSubmit={handleSubmit} className='sell-form'>
      <h2>Manage Waste Products</h2>
             <div className="form-group">
               <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className="form-group">
               <label htmlFor="name">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className="form-group">
               <label htmlFor="name">Price</label>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className="form-group">
               <label htmlFor="name">Image URl</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className="form-group">
               <label htmlFor="name">Select Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
  
  <option value="">Select Category</option>
          <option value="farmer">Farmer</option>
        </select>
        </div><div className="form-row">
        <div className="form-group">
        <button type="submit">{isEditing ? 'Update' : 'Add'} Product</button></div>
        <div className="form-group">{isEditing && <button type="button" className="cancel-button" onClick={resetForm}>Cancel</button>}</div>
        </div>
      </form>
      </div>
      <div className='sell-form-cont1'>
      <div className='sell-form'>
      <h2>Existing Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - {product.category}</span>
            <div>
            <div className="form-row">
            <div className="form-group">
              <button type="submit" className="submit-button1" onClick={() => handleEdit(product)}>Edit</button>
              </div><div className="form-group">
              <button type="button" className="cancel-button" onClick={() => handleDelete(product.id)}>Delete</button>
            </div></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default ManageWaste;