import React from 'react';
import Container from "../Container";
import "./style.css";

function Footer() {
  return (
    <footer>
      <Container>
        <p>Created by Sierra Chapman</p>
        <p>using MongoDB, Express, React, and Node.js</p>
        <p><a href="https://github.com/SierraChapman/react-portfolio">View on GitHub</a></p>
      </Container>
    </footer>
  );
}

export default Footer;
