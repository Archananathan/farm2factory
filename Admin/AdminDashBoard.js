import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../CSS/AdminDashBoard.css';
import profilePic from '../components/images/adminprofile.jpg'; // Replace with your profile picture path
import { Grid, Paper, Typography, Box, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminDashboard = () => {
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

  const lineData = [
    { name: "January", uv: 4000, pv: 2400, amt: 2400 },
    { name: "February", uv: 3000, pv: 1398, amt: 2210 },
    { name: "March", uv: 2000, pv: 9800, amt: 2290 },
    { name: "April", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "June", uv: 2390, pv: 3800, amt: 2500 },
  ];

  const barData = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  ];

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Styled components for the progress bars
  const StyledLinearProgress = styled(LinearProgress)(({ color }) => ({
    height: 10,
    borderRadius: 5,
    [`& .${LinearProgress.bar}`]: {
      borderRadius: 5,
      backgroundColor: color,
    },
  }));


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
      <div>


        <Box sx={{ p: 3 }}>
          {/* Title */}
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "green" }}>
              Admin Dashboard
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {/* Progress Cards */}
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Total Orders</Typography>
                <Typography variant="h4" color="green">
                  1896
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Last year expenses
                </Typography>
                <StyledLinearProgress variant="determinate" value={75} color="primary" />
                <Typography variant="body2" color="textSecondary">
                  YoY Growth
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Products Sold</Typography>
                <Typography variant="h4" color="orange">
                  $3M
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Revenue streams
                </Typography>
                <StyledLinearProgress variant="determinate" value={60} color="secondary" />
                <Typography variant="body2" color="textSecondary">
                  Sales
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Followers</Typography>
                <Typography variant="h4" color="red">
                  45.9%
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  People Interested
                </Typography>
                <StyledLinearProgress variant="determinate" value={45} color="success" />
                <Typography variant="body2" color="textSecondary">
                  Twitter Progress
                </Typography>
              </Paper>
            </Grid>


            {/* Bar Chart */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Sales Comparison</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Pie Chart */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Distribution</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Last 6 Months (Spending)</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>


      </div>
    </div>
  );
};

export default AdminDashboard;