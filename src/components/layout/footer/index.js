import React from 'react';
import * as ICON from '../../../assets/icons_svg';

const Footer = () => {

    var fecha = new Date();
    var anio = fecha.getFullYear();

    return (
        <footer className="footer">
            <div className="f-content">
                <div className="f-name">
                    <ICON.LOGOPROFILE width={60} height={30} />
                    <h4>Dalthon Mamani Hualpa</h4>
                    <p>Front-End Developer</p>
                </div>
                <div className="f-about">
                    <p>Sobre</p>
                    <a href="#about">Sobre mí</a>
                    <a href="#abilities">Mis habilidades</a>
                    <a href="#portafolio">Portafolio</a>
                </div>
                <div className="f-hello">
                    <b>Di hola</b>
                    <div className="f-h-link">
                        <a href="https://github.com/D4ITON"><ICON.GITHUB width={30} height={30} /></a>
                        <a href="https://www.linkedin.com/in/dalthon-mamani-hualpa-816097161/"><ICON.LINKEDIN width={30} height={30} /></a>
                        <a href="https://twitter.com/DalthonMamani"><ICON.TWITTER width={30} height={30} /></a>
                    </div>
                </div>
            </div>
            <div className="f-cright">
                <p>Dalthon Mamani © {anio}</p>
            </div>
        </footer>
    )
}
export default Footer;



