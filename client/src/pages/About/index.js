import React from 'react';
import "./style.css";

function About() {
  return (
    <main id="about">
      <h2>About Me</h2>
      <div>
        <img className="portrait" src={`${process.env.PUBLIC_URL}/assets/img/portrait.jpeg`} alt="Sierra Chapman" />
        <p>
          I am a full-stack web developer located in Pleasanton, CA and a recent graduate from the UC Berkeley Coding Bootcamp. 
          Before going into web development, I earned a B.S. in Physics from UC Davis in 2019, where I gained programming experience though using Python for data analysis in astrophysics research. 
          In my free time, I enjoy running, playing video games, and reading science fiction and fantasy.
        </p>
      </div>
    </main>
  );
}

export default About;
