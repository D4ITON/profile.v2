import React from 'react';
import logo_dm from '../../../assets/DM.png';
import logo_linkedin from '../../../assets/linkedin.png';
import logo_twitter from '../../../assets/twitter.png';
import logo_github from '../../../assets/github.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="f-name">
                <img src={logo_dm} alt="Logo DM"/>
                <h4>Dalthon Mamani Hualpa</h4>
                <p>Front-End Developer</p>
            </div>
            <div className="f-about">
                <p>Sobre</p>
                <a href="#">Sobre mí</a>
                <a href="#">Mis habilidades</a>
                <a href="#">Portafolio</a>
            </div>
            <div className="f-hello">
                <b>Di hola</b>
                <div className="f-h-link">
                    <a href="#"><img src={logo_github} alt="Logo Github"/></a>
                    <a href="#"><img src={logo_linkedin} alt="Logo Linkedin"/></a>
                    <a href="#"><img src={logo_twitter} alt="Logo Twitter"/></a>
                </div>
            </div>
            <div className="f-cright">
                <p>Dalthon Mamani © <span id="fecha">2020</span></p>
            </div>
        </footer>
    )
}
export default Footer;