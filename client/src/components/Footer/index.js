import React from 'react';
import Container from "../Container";
import "./style.css";

function Footer() {
  return (
    <footer>
      <Container>
        <p>
          Created by Sierra Chapman<br/> 
          using MongoDB, Express, React, and Node.js
        </p>
        <div><a href="https://github.com/SierraChapman/react-portfolio">View on GitHub</a></div>
      </Container>
    </footer>
  );
}

export default Footer;
