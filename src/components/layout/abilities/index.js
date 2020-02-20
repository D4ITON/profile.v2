import React from 'react';
import abilities from './abilities';

const Abilities = () => {
    
    return (
        <div className="abilities">
            <h2 className="title-section">Mis habilidades</h2>
            <div className="abilities-list">
                {
                    abilities.map(item => (
                    <div className="item">{item.title}</div>
                    ))
                }
            </div>
        </div>
    )
}
export default Abilities;