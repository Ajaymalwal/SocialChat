import React from 'react';
import '../../../Styles/Home/footer.css';
import logo from "../../../Images/logo/logo.png";
import { Link } from 'react-router-dom';
import Aboutus from '../../About us/About';
import Features from '../../Features/Features';

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className='footer-1'>
        <h2>Contect Us</h2>
        <div className='textbox'><input type='input'placeholder='input your email' /><button value="Send" className='sendbutton'>Send</button></div>
      </div>
      <div className='footer-2'>
        <div className='footer-logo'><img src={logo} alt="Logo" /></div>
        <div className='footer-menu'>
        <p><Link to="/About">About Us</Link></p>
        <p><Link to="Features"> Features</Link></p>
        <p>FAQ</p>
        </div>
      </div>
     
    </footer>
     <div className='love'>Made by love for you</div>
     </>
  );
}

export default Footer;