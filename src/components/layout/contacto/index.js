import React from 'react';
import profile_icon from '../../../assets/profile-icon.jpg';
import * as ICON from '../../../assets/icons_svg';

const Contacto = () => { 
    return (
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
                    <div className="red-item"><ICON.WHATSAPP fill={'#fff'} width={20} height={20} /><p>(51) 930 392 725</p></div>
                    <div className="red-item"><ICON.EMAIL fill={'#fff'} width={20} height={20} /><p>daitonmh100@gmail.com</p></div>
                    <div className="red-item"><ICON.GLOBAL fill={'#fff'} width={20} height={20} /><p><a href="https://dalthon.ml/">dalthon.ml</a></p></div>
                </div>
            </div>
        </div>
    )
}
export default Contacto;