import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

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
            <ul className="list-unstyled">
              <li className="nav-item active">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="books"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  className="foot-link"
                  href="https://github.com/reinkaoss/React-Student-Hub-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copy"> © 2023 Copyright Student Hub</p>
      </div>
    </footer>
  );
}

export default Footer;
