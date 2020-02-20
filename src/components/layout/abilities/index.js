import React from 'react';
import abilities from './abilities';
import img_react from '../../../assets/logo-react.png';

const Abilities = () => {
    
    return (
        <div className="abilities">
            <h2 className="title-section">Mis habilidades</h2>
            <div className="abilities-list">
                {
                    abilities.map(item => (
                        <div className="item" key={item.id}>
                            <div className="img"><img src={item.img} alt="image"/></div>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Abilities;