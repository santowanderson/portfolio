import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';
import { SlScreenSmartphone } from 'react-icons/sl';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


import './sidebar.css';
import myAvatar from '../../assets/my-avatar.png';
import IconBox from '../icon-box/icon-box';

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <aside id='sidebar' className={ isMenuOpen ? 'active' : '' }>

      <button id='sidebar-button' onClick={ handleToggleMenu }>
        <IoIosArrowDown />
        <span>Show Contacts</span>
      </button>

      <div className='profile'>

        <div className="profile-header">
          <figure className='profile-image-container'>
            <img src={ myAvatar } alt="Profile image" width="80px" />
          </figure>
          <div className="profile-header-info">
            <h1>Wanderson dos Santos</h1>
            <span>Web developer</span>
          </div>
        </div>

        <div className='profile-info'>

          <ul className="profile-info-list">

            <li className="profile-item">
              <IconBox icon={ <IoMailOutline style={{ zIndex: '1' }} /> } />

              <div className="item-content">
                <span>EMAIL</span>
                <a 
                  href="mailto:wandersonsantospereira5@gmail.com" className="contact_link">
                  wandersonsantospereira5@gmail.com
                </a>
              </div>
            </li>

            <li className="profile-item">
              <IconBox icon={ <SlScreenSmartphone style={{ zIndex: '1' }} /> } />

              <div className="item-content">
                <span>PHONE</span>
                <a href="https://wa.me/5511988608298">+55 (11) 988608298</a>
              </div>
            </li>

            <li className="profile-item">
              <IconBox icon={ <IoCalendarOutline style={{ zIndex: '1' }} /> } />

              <div className="item-content">
                <span>BIRTHDAY</span>
                <time dateTime="2000-04-05">April, 05, 2000</time>
              </div>
            </li>

            <li className="profile-item">
              <IconBox icon={ <IoLocationOutline style={{ zIndex: '1' }} /> } />

              <div className="item-content">
                <span>ADDRESS</span>
                <address>Francisco Morato, São Paulo, BR</address>
              </div>
            </li>  

          </ul>

          <ul className="social-contacts">
            <li>
              <a href="https://www.linkedin.com/in/wanderson-santos-pereira-486920193/">
                <FaLinkedin />
              </a>
            </li>

            <li>
              <a href="https://wa.me/5511988608298">
                <RiWhatsappFill />
              </a>
            </li>

            <li><a href="https://github.com/santowanderson">
              <FaGithub />
            </a>
            </li>
          </ul>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;