import React from 'react';
import './style.css';

function Footer() {
    return (
    <footer>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h5>About Us</h5>
        <p>We are web development students at TrilogyBootcamp.</p>
      </div>
      <div class="col-sm-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li><a className='foot-link' href="/">Home</a></li>
          <li><a className='foot-link' href="/books">Books</a></li>
          <li><a className='foot-link' href="/contact">Contact</a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <h5>Follow Us</h5>
        <ul class="list-unstyled">
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