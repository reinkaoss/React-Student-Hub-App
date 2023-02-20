import React from 'react';
import './style.css';

function Footer() {
    return (
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <h5>About Us</h5>
        <p>We are web development students at TrilogyBootcamp.</p>
      </div>
      <div className="col-sm-3">
        <h5>Links</h5>
      
        <ul class="list-unstyled">
          <li><a className='foot-link' href="/">Home</a></li>
          <li><a className='foot-link' href="notes">Notes</a></li>
          <li><a className='foot-link' href="contact">Contact</a></li>

        </ul>
      </div>
      <div className="col-sm-3">
        <h5>Follow Us</h5>

        <ul class="list-unstyled">
          <li><a className='foot-link' href="https://www.facebook.com" target="_blank">Facebook</a></li>
          <li><a className='foot-link' href="https://www.twitter.com" target="_blank">Twitter</a></li>
          <li><a className='foot-link' href="https://www.instagram.com" target="_blank">Instagram</a></li>

        <ul className="list-unstyled">
          <li><a className='foot-link' href="https://github.com/reinkaoss/React-Student-Hub-App">GitHub</a></li>
      
        </ul>
      </div>
    </div>
    <p className='copy'> © 2023 Copyright Student Hub</p>
  </div>
</footer>

    );
}

export default Footer;