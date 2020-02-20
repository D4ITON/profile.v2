import React from 'react'
import menu_icon from '../../../assets/menu-icon.png'
const Header = () => {
    return (
        <div className="row m-0 header">
            <div className="col-12 menu"><button onClick={console.log("button")}><img src={menu_icon} alt="menu-icon"/></button></div>
            <div className="col-12 image"><img src="https://dl.dropboxusercontent.com/s/gl8h35m3bscxz3i/mobile-fondo.jpg?dl=0" alt="profile image"/></div>
            <div className="col-12 text-white"><h1>Dalthon Mamani Hualpa</h1><p>Front-End Developer</p></div>
            <div className="col-12"><button className="button-primary">Download CV</button></div>
        </div>
    )
}
export default Header;


// cambiar https://www.dropbox.com/ por https://dl.dropboxusercontent.com/