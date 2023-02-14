import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="row navRow">
        <div className="col-9 title">
          <div className="container"><h1>Student Hub</h1></div>
          <div className="container">
          </div>
        </div>
        <div className="col-3">
          <nav className="navbar">
            <ul className="nav navbar-nav">
              <li className="nav-item">
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
                  to="notes"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Notes
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
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
