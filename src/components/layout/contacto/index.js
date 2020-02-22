import React from 'react';
import profile_icon from '../../../assets/profile-icon.jpg';
import icon_global from '../../../assets/global.png';
import icon_email from '../../../assets/email.png';
import icon_whatsapp from '../../../assets/whatsapp.png';

const Contacto = () => { 
    return (
        <div>
            <div className="contacto" id="contacto">
                <h2 className="title-section">Contacto</h2>
                <div className="c-panel">
                    <div className="c-p-header">
                        <div className="image-circle"><img src={profile_icon} alt="profile icon"/></div>
                        <div className="name-text">
                            <h4>Dalthon Mamani Hualpa</h4>
                            <p>Front-End Developer</p>
                        </div>
                        <button className="button-primary">Download CV</button>
                    </div>
                    <div className="c-p-redes">
                        <div className="red-item"><img src={icon_whatsapp} alt=""/><p>(51) 930 392 725</p></div>
                        <div className="red-item"><img src={icon_email} alt=""/><p>daitonmh100@gmail.com</p></div>
                        <div className="red-item"><img src={icon_global} alt=""/><p>www.dalthon.ml</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacto;