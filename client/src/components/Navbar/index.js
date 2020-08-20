import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from "../Container";
import "./style.css";

function Navbar() {
  return (
    <header>
      <Container className="row">
        <div className="brand">
          <h1>Sierra Chapman</h1>
        </div>
        <nav>
          <span className="nav-link">
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </span>
          <span className="nav-link">
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          </span>
          <span className="nav-link">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </span>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
