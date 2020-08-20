import React from 'react';
import "./style.css";

function Contact() {
  return (
    <main id="contact">
      <h2>Contact Info</h2>
      <ul>
        <li><a href="https://github.com/SierraChapman">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/sierra-chapman">LinkedIn</a></li>
        <li><a href="mailto:siechap@gmail.com">Email</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/assets/pdf/resume.pdf`}>Resume</a></li>
      </ul>
    </main>
  );
}

export default Contact;
