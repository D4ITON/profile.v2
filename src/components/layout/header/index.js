import React from 'react'
import menu_icon from '../../../assets/menu-icon.png'
const Header = () => {

    const menuButton = () => {
        console.log('Menu button');
    }

    const downloadCVButton = () => {
        console.log('Download Button');
    }

    return (
        <React.Fragment>
            <div className="modal-container">
                <label htmlFor="modal">
                    {/* <button onClick={() => menuButton()}> */}
                        <img src={menu_icon} alt="menu-icon"/>
                    {/* </button> */}
                </label>
                <input type="checkbox" name="modal" id="modal"/>
                <div className="modal-content">
                    <label htmlFor="modal">
                        {/* <button onClick={() => menuButton()}> */}
                            <img src={menu_icon} alt="menu-icon"/>
                        {/* </button> */}
                    </label>
                    <p>Dalthon</p>
                    <a href="#about">Sobre mí</a>
                    <a href="#abilities">Mis habilidades</a>
                    <a href="#portafolio">Portafolio</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
            <div className="header">
                <div className="h-image">
                    <img src="https://dl.dropboxusercontent.com/s/gl8h35m3bscxz3i/mobile-fondo.jpg?dl=0" alt="profile image"/>
                </div>
                <div className="h-text">
                    <h1>Dalthon Mamani Hualpa</h1>
                    <p>Front-End Developer</p>
                </div>
                <div className="h-button">
                    <button onClick={() => downloadCVButton()} className="button-primary">Download CV</button>
                </div>
            </div>
        </React.Fragment>
        
    )

}
export default Header;


// cambiar https://www.dropbox.com/ por https://dl.dropboxusercontent.com/