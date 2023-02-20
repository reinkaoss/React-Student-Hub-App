import React from 'react';
import './style.css';

function Footer() {
    return (
    <footer>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl sit amet velit commodo tristique.</p>
      </div>
      <div class="col-sm-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li><a className='foot-link' href="/">Home</a></li>
          <li><a className='foot-link' href="notes">Notes</a></li>
          <li><a className='foot-link' href="contact">Contact</a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <h5>Follow Us</h5>
        <ul class="list-unstyled">
          <li><a className='foot-link' href="https://www.facebook.com" target="_blank">Facebook</a></li>
          <li><a className='foot-link' href="https://www.twitter.com" target="_blank">Twitter</a></li>
          <li><a className='foot-link' href="https://www.instagram.com" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
    <p className='copy'> © 2023 Copyright Student Hub</p>
  </div>
</footer>

    );
}

export default Footer;