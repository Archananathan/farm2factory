import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import UserLogin from './User/UserLogin';
import AdminLogin from './Admin/AdminLogin';
import IndustryLogin from './Industry/IndustryLogin';
import UserSignUp from './User/UserSignUp';
import IndustrySignUp from './Industry/IndustrySignUp';
import UserLand from './User/UserLand';
import Banner from './components/Banner';
import UserBanner from './User/UserBanner';
import IndustryLand from './Industry/IndustryLand';
import Product from './components/Products';
import Sell from './User/Sell';
import SalesReports from './components/SalesReport';
import User from './components/User';
import ContactUs from './components/Contact';
import UserProduct from './User/UserProduct';
import UserAbout from './User/UserAbout';
import UserContact from './User/UserContact';
import IndustryContact from './Industry/IndustryContact';
import Buy from './Industry/Buy';
import AdminFarmers from './Admin/AdminFarmer';
import AdminIndustry from './Admin/AdminIndustry';
import AdminContact from './Admin/AdminContact';
import AdminDashboard from './Admin/AdminDashBoard';
import IndustryAbout from './Industry/IndustryAbout';
import ManageWaste from './ManageWaste';
import FarmerProduct from './FarmerProduct';
import IndustryProduct from './Industry/IndustryProducts';
import UserPro from './User/UserPro';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/About' element={<About />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/IndustryLogin' element={<IndustryLogin />} />
        <Route path='/UserSignUp' element={<UserSignUp />} />
        <Route path='/IndustrySignUp' element={<IndustrySignUp />} />
        <Route path='/Contact' element={<ContactUs />} />
        <Route path='/UserLand' element={<UserLand />} />
        <Route path='/UserBanner' element={<UserBanner />} />
        <Route path='/IndustryLand' element={<IndustryLand />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Sell' element={<Sell />} />
        <Route path='/SalesReport' element={<SalesReports />} />
        <Route path='/UserManagement' element={<User />} />
        <Route path='/UserProduct' element={<UserProduct />} />
        <Route path='/UserAbout' element={<UserAbout />} />
        <Route path='/UserContact' element={<UserContact />} />
        <Route path='/IndustryContact' element={<IndustryContact />} />
        <Route path='/Buy' element={<Buy />} />
        <Route path='/AdminFarmer' element={<AdminFarmers />} />
        <Route path='/AdminIndustry' element={<AdminIndustry />} />
        <Route path='/AdminContact' element={<AdminContact />} />
        <Route path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/IndustryAbout' element={<IndustryAbout />} />
        <Route path='/Products' element={<FarmerProduct />} />
        <Route path='/IndustryProducts' element={<IndustryProduct />} />
        <Route path='/manage' element={<ManageWaste />} />
        <Route path='/userpro' element={<UserPro />} />
      </Routes>
    </Router>
  );
}
export default Main;