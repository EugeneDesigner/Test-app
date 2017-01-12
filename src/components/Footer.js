import React, { Component } from 'react'
import { Link } from 'react-router'


const Footer = () => (
      <footer>
        <div className='footer__links'>
          <Link to="/help">Help</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
)


export default Footer
