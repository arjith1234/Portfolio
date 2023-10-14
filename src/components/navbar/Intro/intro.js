import React from "react";
import './intro.css';
import {Link} from 'react-scroll';
const Intro = () => {
    return (
        <section id="Intro">
            <div className="introcontent">
                <span className="greeting">Hi there!</span>
                <span className="greet">Welcome to the Grandeur of the Greatest's Tech Playground.</span>
                <p className="intropara">With an insatiable thirst for knowledge, a talent for crafting elegant code, and an unwavering vision for shaping the future, <br></br> I embark on an exhilarating quest to conquer the vast cosmos of technology.<br></br>This journey is a testament to my passion, and I weave creativity into the digital realm, one byte at a time.</p>
                <Link to="contact" smooth={true} duration={500}>
  <button className="menubutton">
    <img src={process.env.PUBLIC_URL + '/summon.png'} alt="message" style={{ width: '50px', height: '50px', marginRight: '10px' }} className="images"/>
    Utilize My Skills
  </button>
</Link>
            </div>
            
            <img src="/hacker.png" alt="bg1" className="bg1" />
        </section>
    )
}

export default Intro;