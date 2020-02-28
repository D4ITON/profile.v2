import React, { useContext } from 'react';
import Context from '../../../utils/context';
import menu_icon from '../../../assets/menu-icon.png';
import * as ICON from '../../../assets/icons_svg';

const Header = () => {


    const context = useContext(Context);

    return (
        <React.Fragment>
            <div className="modal-container">
                <label htmlFor="modal">
                    <img src={menu_icon} alt="menu-icon"/>
                </label>
                <input type="checkbox" name="modal" id="modal"/>
                <div className="modal-content">
                    <label htmlFor="modal">
                        <img src={menu_icon} alt="menu-icon"/>
                    </label>
                    <p>Dalthon</p>
                    <a href="#about">Sobre mí</a>
                    <a href="#abilities">Mis habilidades</a>
                    <a href="#portafolio">Portafolio</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>

            <div className="input-change-theme">
                <label htmlFor="inputTheme">{ !context.darkmode ? <ICON.MOON width={20} height={21} /> : <ICON.SUN width={22.5} height={22.5} />  }</label>
                <input type="checkbox" id="inputTheme" checked={context.darkmode} onChange={(e) => context.handleChangeDarkMode(e)} />
            </div>

            <div className="header">
                <div className="h-image">
                    <img src="https://dl.dropboxusercontent.com/s/gl8h35m3bscxz3i/mobile-fondo.jpg?dl=0" alt="profile"/>
                </div>
                <div className="h-text">
                    <h1>Dalthon Mamani Hualpa</h1>
                    <p>Front-End Developer</p>
                </div>
                <div className="h-button">
                    <a href="https://drive.google.com/file/d/1Mlbv8VNxqogkQLvrn2f4_szODQVJ8NEp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button-primary">Download CV</a>
                </div>
            </div>
        </React.Fragment>
        
    )

}
export default Header;


// cambiar https://www.dropbox.com/ por https://dl.dropboxusercontent.com/
// Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>