import React from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand " href="/">
          City Riding Service
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/destination">
                Destination
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigationbar;
