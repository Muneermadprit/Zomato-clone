// Userprofile.js
import React, { useState } from 'react';
import { TbEdit } from 'react-icons/tb';
import Homenavigation from './Homenav';
import Profilenavigation from './profilenavigation';
import Modal from './model'; // Ensure correct import path
import './userprofile.css';
import Models from './models';
import { IoCamera } from "react-icons/io5";

const Userprofile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = sessionStorage.getItem('email');
  const firstLetter = email ? email.charAt(0).toUpperCase() : '';

  const handleEditProfileClick = () => {
    setIsModalOpen(true);
    console.log('Opening modal'); // Debugging log
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log('Closing modal'); // Debugging log
  };

  return (
    <div>
      <Profilenavigation />
      <div className='profileheader'>
        <div className='profilecontainer'>
          {firstLetter}
        </div>
        <div className='contents'>
          <div className='editprofile' onClick={handleEditProfileClick}>
            <TbEdit style={{ marginBottom: 20 }} />
            <p >Edit profile</p>
          </div>
          <div className='settings'>
            <div className='review'>
              <p>0</p>
              <p>Reviews</p>
            </div>
            <div className='photos'>
              <p>0</p>
              <p>Photos</p>
            </div>
            <div className='followers'>
              <p>0</p>
              <p>Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='main-pro'>
        <aside className='sidecontainer'>
          <div className='sidecontents'>
            <p>ACTIVITY</p>
            <div className='options'>
              <p>Reviews</p>
            </div>
            <div className='options'>
              <p>Photos</p>
            </div>
            <div className='options'>
              <p>Followers</p>
            </div>
            <div className='options'>
              <p>Recently Viewed</p>
            </div>
            <div className='options'>
              <p>Bookmarks</p>
            </div>
          </div>
        </aside>
        <aside className='otherside'>
          <img src='https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png' className='notif-img' alt='Notifications' />
        </aside>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h4>Edit Profile</h4>


        <div className='profileheader-edit'>
        <div className='profilecontainer-edit'>
        <IoCamera  className='camera' />
          {firstLetter}
        </div>
        
          
      </div>
      <div className="inputbox">
      <input type="text" placeholder=" " required />
      <span>Firstname</span>
      
    </div>
    <div className="inputbox">
      <input type="text" placeholder=" " required />
      <span>Firstname</span>
      
    </div>
    <div className="inputbox">
      <input type="text" placeholder=" " required />
      <span>Firstname</span>
      
    </div>
    <div className="inputbox">
      <input type="text" placeholder=" " required />
      <span>Firstname</span>
      
    </div>
      </Modal>
    </div>
  );
};

export default Userprofile;
