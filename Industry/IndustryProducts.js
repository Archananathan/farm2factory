import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../CSS/FarmerProduct.css';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import IndustryNav from './IndustryNav';

const IndustryProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch farmer products from the backend
    axios.get('http://localhost:8080/api/products/farmer')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching farmer products:', error));
  }, []);

  const handleSellClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <IndustryNav/>
      <div className="container product-page">
        <h1 className="text-center my-4">Products</h1>
        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price">Rs.{product.price}</p>
                  <Link to ='/buy'>
                  <button 
                    className="btn btn-success">
                    Buy
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default IndustryProduct;