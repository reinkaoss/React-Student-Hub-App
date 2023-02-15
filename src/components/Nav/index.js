import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="container landingPage">
      <div className="row navRow">
        <div className="col-9 title">
          <div className="container">
            <h1>Student Hub</h1>
          </div>
          <div className="container"></div>
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
      <footer class="text-center text-lg-start footer">
  <div class="text-center p-3">
    <p> © 2023 Copyright:</p>
   
    <a class="text-dark" href="https://mdbootstrap.com/">Our Githubs here</a>
  </div>
</footer>
    </div>
  );
}

export default Nav;
