import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm a web developer with a passion for creating beautiful and functional websites.
          I specialize in modern web technologies and love bringing ideas to life through code.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;