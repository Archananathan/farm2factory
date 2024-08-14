import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import profilePic from '../components/images/adminprofile.jpg';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link,useNavigate} from 'react-router-dom';

const AdminIndustry = () => {
  const [requests, setRequests] = useState([]);
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


  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/buyform/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (email) => {
    try {
      await axios.post('http://localhost:8080/api/buyform/accept', { email }, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Request accepted!');
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.emailId === email ? { ...request, status: 'Accepted' } : request
        )
      );
    } catch (error) {
      alert('Failed to accept the request.');
      console.error('There was an error accepting the request!', error.response || error.message);
    }
  };

  const handleInProgress = async (email) => {
    try {
      await axios.post('http://localhost:8080/api/buyform/on-progress', { email }, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Request marked as in-progress!');
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.email === email ? { ...request, status: 'In Progress' } : request
        )
      );
    } catch (error) {
      alert('Failed to mark the request as in-progress.');
      console.error('There was an error marking the request as in-progress!', error.response || error.message);
    }
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
            <FontAwesomeIcon icon={faSignOutAlt}/> Logout
          </button>
        </div>
      </div>
    <div></div>
    <div>
      
      <div className="container mt-4">
        <h2 className="mb-4">Farmer Requests</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.name}</td>
                    <td>{request.email}</td>
                    <td>{request.wasteType}</td>
                    <td>{request.quantity}</td>
                    <td>{request.status}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleAccept(request.email)}
                        disabled={request.status === 'Accepted'}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleInProgress(request.email)}
                        disabled={request.status === 'In Progress' || request.status === 'Accepted'}
                      >
                        In Progress
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No requests available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminIndustry;