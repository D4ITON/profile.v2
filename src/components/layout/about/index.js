import React from 'react'
import profile_icon from '../../../assets/profile-icon.jpg';

const About = () => { 
    return (
        <div className="about" id="about">
            <h2 className="title-section">Sobre mí</h2>
            <div className="panel">
                <div className="panel-header">
                    <div className="image-circle"><img src={profile_icon} alt="profile icon"/></div>
                    <div className="name-text">
                        <h4>Daitonmh</h4>
                        <p>Front-End Developer</p>
                    </div>
                </div>
                <div className="panel-img">
                    <img src="https://dl.dropboxusercontent.com/s/wb296oygftocv5e/about.jpg?dl=0" alt="panel"/>
                </div>
                <div className="panel-description">
                    <p>Soy un desarrollador de software web dedicado a aprender y poner en práctica todas mis habilidades en proyectos. Comprometido con las fechas de entrega y calidad en el desarrollo para su posterior escalabilidad. Estoy feliz de darte la bienvenida a mi sitio web :)</p>
                    <a href="https://drive.google.com/file/d/1Mlbv8VNxqogkQLvrn2f4_szODQVJ8NEp/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="button-primary">Download CV</a>
                </div>
            </div>
        </div>
    )
}
export default About;