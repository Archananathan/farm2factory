import React from 'react';
import IndustryNav from './IndustryNav';
import UserBanner from '../User/UserBanner';
import Footer from '../components/Footer';
function IndustryLand() {
  return (
    <div className='App'>
      <IndustryNav/>
      <UserBanner/>
      <Footer/>
    </div>
  );
}

export default IndustryLand;