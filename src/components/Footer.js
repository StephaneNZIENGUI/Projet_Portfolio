import "./FooterStyles.css"

import React from 'react'

import { Link } from "react-router-dom";

import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin, FaGitlab} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}} />
            <div>
                <p>Île-de-France, France</p>
            </div>
        </div>
        <div className="phone">
            <h4> <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}} />
            0695724503</h4>
        </div>
        <div className="email">
            <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}} />
            stephanenziengui.sn@gmail.com</h4>
        </div>
        </div>
        <div className="right">
            <h4>About me</h4>
            <p>I'm François NGOYE NZIENGUI, I enjoy discussing new projects and design challenges.</p>
            <div className="social">
            <Link to="https://github.com/StephaneNZIENGUI"><FaGithub size={30} style={{color: "#fff", marginRight:"1rem"}}  /></Link>
            <Link to="https://gitlab.com/StephaneNZIENGUI"><FaGitlab size={30} style={{color: "#fff", marginRight:"1rem"}} /></Link>
            <Link to="https://www.linkedin.com/in/ngoye-nziengui-fran%C3%A7ois/"><FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}} to={"https://www.linkedin.com/in/ngoye-nziengui-fran%C3%A7ois/"} /></Link>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer