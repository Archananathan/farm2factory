import React, { useState } from 'react';
import '../CSS/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserSignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        lname: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        accountNumber: '',
        accountName: '',
        bankIFSC: '',
        panNumber: '',
        address: '',
    });

    const [errors, setErrors] = useState({
        phoneNumber: '',
    });

    const navigate = useNavigate();

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^[6789]\d{9}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate phone number
        if (name === 'phoneNumber') {
            if (!validatePhoneNumber(value)) {
                setErrors({ ...errors, phoneNumber: 'Invalid phone number. It should be 10 digits long.' });
            } else {
                setErrors({ ...errors, phoneNumber: '' });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for errors before submitting
        if (errors.phoneNumber) {
            alert('Please correct the errors before submitting.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/register/save', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log('Registration successful');
                alert('Registration successful!');
                navigate('/UserLand');
            } else {
                console.error('Registration failed');
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="sign-up-container">
            <div className="form-content">
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <h2>Registration</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Account Number</label>
                            <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Account Name</label>
                            <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Bank IFSC Code</label>
                            <input type="text" name="bankIFSC" value={formData.bankIFSC} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>PAN Number</label>
                            <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                    <p>
                        Already have an account? <Link to='/UserLogin'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default UserSignUp;
