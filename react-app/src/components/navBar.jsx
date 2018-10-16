import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="container nav-bar-container">
        <h3 className="text-muted nav-bar-tittle">Main metrics</h3>
        <div className="btn-group" role="group" aria-label="Basic example">
          <Link
            to="/lastHour"
            className="btn btn-outline-secondary nav-bar-link"
          >
            Last hour
          </Link>
          <Link to="/today" className="btn btn-outline-secondary nav-bar-link">
            Today
          </Link>
          <Link
            to="/yesterday"
            className="btn btn-outline-secondary nav-bar-link"
          >
            Yesterday
          </Link>
          <Link
            to="/last3Days"
            className="btn btn-outline-secondary nav-bar-link"
          >
            Last 3 days
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
