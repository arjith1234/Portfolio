import React from "react";
import './navbar.css'
import {Link} from 'react-scroll';
const Navbar=() => {
    return(
        <nav className="navbar">
<img src="/letter-c.jpg" alt="Logo" style={{ width: '100px', height: '100px' }} />
            <div className="Menu">
                <Link className="Menulist">Home</Link>
                <Link className="Menulist">Portfolio</Link>
                <Link className="Menulist">Projects</Link>
                <Link className="Menulist">About me</Link>
            </div>
            <button className="menubutton">
    <img src="/message.png" alt="message" style={{ width: '50px', height: '50px', marginRight: '10px' }} className="imagmes"/>
    Contact me
</button>

        </nav>
    )
}
export default Navbar 