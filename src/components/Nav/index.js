import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
      <nav className="navbar navbar-expand-md navbar-light bg-color">
        <a className="navbar-brand logo" href="/">Student Hub</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
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
            <li class="nav-item">
              <NavLink
                to="notes"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Notes
              </NavLink>
            </li>
            <li class="nav-item">
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
      </nav>
  );
}

export default Nav;
