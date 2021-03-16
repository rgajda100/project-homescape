import React, { Component } from "react";
// import logo from '../images/icon_jkp.png';
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// constants folder or data folder. setup links in an array and then render them if you have a lot of links

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div id="logoNav" className="nav-header">
            <Link to="/">
              <img src="" alt="Robert Gajda" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
