import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {SiLinkedin} from 'react-icons/si'
export default function Footer() {
  return (
    <footer id='footer' className='footer'>
    <a href="#" className='footer__logo'>ALPHA</a>
    <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Expeirience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
    <a href="https://facebook.com/vikas.Khangrawat.x4"><FaFacebookF/></a>
    <a href="https://instagram.com/x4_vikas.js"><FiInstagram/></a>
    <a href="https://linkedin.com/in/vikas-rajput-38b1ba194/"><SiLinkedin/></a>
    </div>
    <div className="footer__copyright">
      <small>Developer's Zone. All Rights Reserved</small>
    </div>
    </footer>
  )
}
