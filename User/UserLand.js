import React from 'react';
import UserNav from './UserNav';
import UserBanner from './UserBanner';
import Footer from '../components/Footer';
function UserLand() {
  return (
    <div className='App'>
      <UserNav />
      <UserBanner />
      <Footer/>
    </div>
  );
}

export default UserLand;