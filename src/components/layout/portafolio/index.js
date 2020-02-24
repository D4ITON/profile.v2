import React from 'react'
import * as ICON from '../../../assets/icons_svg';

import projects from './projects';


const Portafolio = () => { 
    return (
        <div className="portafolio" id="portafolio">
            <h2 className="title-section">Mi portafolio</h2>
            <div className="pf-list">
                {
                    projects.map(pj => (
                        <div className="pf-item" key={pj.id}>
                            <div className="pf-item-img"><img src={pj.prev_img} alt={pj.title}/></div>
                            <div className="pf-item-body">
                                <div>
                                    <h3 className="pf-item-title">{pj.title}</h3>
                                    <p className="pf-item-desc">{pj.description}</p>
                                </div>
                                <div className="pf-item-footer">
                                    <div className="pf-item-ft-category"><ICON.MOBILE width={20} height={20} /><p>{pj.categoria}</p></div>
                                    <a href={pj.url}>Ver proyecto</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Portafolio;





// Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>