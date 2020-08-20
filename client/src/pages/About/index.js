import React from 'react';
import "./style.css";

function About() {
  return (
    <main id="about">
      <h2>About Me</h2>
      <div>
        <img className="portrait" src={`${process.env.PUBLIC_URL}/assets/img/portrait.jpeg`} alt="Sierra Chapman" />
        <p>
          I am a web development student located in Pleasanton, CA. 
          I graduated B.S. in Physics from UC Davis in 2019, where I gained programming experience though using Python in astrophysics research. 
          I am currently studying full-stack web development the UC Berkeley Coding Bootcamp. 
          In my free time, I enjoy running, playing video games, and reading science fiction and fantasy.
        </p>
      </div>
    </main>
  );
}

export default About;
