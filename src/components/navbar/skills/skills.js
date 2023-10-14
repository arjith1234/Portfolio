import React from "react";
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
                <h2>Expertise:</h2>
      <div className="skills-container">
        <div className="intro-paragraph">
          <p>
          In the limitless expanse of the digital cosmos, where lines of code twinkle like celestial constellations, I have found my sanctuary. My odyssey commenced with the cryptic tongues of C, C++, and Java, each key unlocking new dimensions of programming possibilities.
          </p>
          
          <p>
          Delving deeper into the enchanted forest of web development, I mastered the MERN stack, wielding a magician's wand with HTML, CSS, and JavaScript. The cloud became my playground as I donned the mantle of an AWS Cloud Practitioner, orchestrating symphonies in the ethereal space of cloud computing.</p>
          
          <p>
          Navigating the labyrinthine landscapes of operating systems and computer networks, I unearthed the concealed pathways governing the pulse of the digital realm. In the eloquence of assembly language, I orchestrated the intricate dance of machines, sculpting real-time projects in the sacred art of ASL (Assembly Language).</p>

          <p>
          As I traverse the corridors of knowledge, Discrete Mathematics serves as my guiding star, leading me through abstract realms where algorithms and logic harmoniously coexist. Each skill acquired, a pixel meticulously placed in the ever-evolving mosaic of my digital odyssey.</p>
        </div>
<div className="category">
  <h3>Programming Languages</h3>
  <ul>
    <li>C</li>
    <li>C++</li>
    <li>Java</li>
    <li>Python</li>
    <li>MYSQL</li>
  </ul>
</div>

<div className="category">
  <h3>Web Development</h3>
  <ul>
    <li>MERN Stack</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</div>

<div className="category">
  <h3>Cloud and Systems(Intro level)</h3>
  <ul>
    <li>AWS Cloud Practitioner</li>
    <li>Operating Systems</li>
    <li>Computer Networks</li>
  </ul>
</div>

<div className="category">
  <h3>Other Proficiencies:</h3>
  <ul>
    <li>Discrete Mathematics</li>
    <li>Assembly Language</li>
  </ul>
</div>

<div className="category">
  <h3>Projects</h3>
  <ul>
    <li>Real-Time ASL Project<br></br>In this illustrious voyage through the realms of technology, I aspire to collaborate, create, and innovate, ceaselessly shaping the future of the digital universe.</li>
  </ul>
</div>

      </div>
    </section>
  );
}

export default Skills;