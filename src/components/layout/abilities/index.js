import React from 'react';
import abilities from './abilities';
import img_react from '../../../assets/react.png';

const Abilities = () => {
    
    return (
        <div className="abilities" id="abilities">
            <h2 className="title-section">Mis habilidades</h2>
            <div className="a-container">
                <div className="a-c-logo-react-animated">
                    {/* <img src={img_react} alt="react"/> */}
                    <div className="circles">
                        <div></div>
                        <div></div>
                        <div></div>
                        <span></span>
                    </div>
                    <cite>created by: <a href="https://github.com/jkomyno" target="_blank" >Alberto Schiabel</a></cite>
                </div>
                <div className="abilities-list">
                    <div className="group">
                        {
                            abilities.map((item, index) => (
                                (index < 3) ? (
                                    <div className="item" key={item.id}>
                                        <div className="img"><img src={item.img} alt={item.title} /></div>
                                        <p>{item.title}</p>
                                    </div>
                                ) : false ))
                        }
                    </div>
                    <div className="group">
                        {
                            abilities.map((item, index) => (
                                (index >= 3) ? (
                                    <div className="item" key={item.id}>
                                        <div className="img"><img src={item.img} alt={item.title} /></div>
                                        <p>{item.title}</p>
                                    </div>
                                ) : false ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Abilities;