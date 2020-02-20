import React from 'react'
import icon_app from '../../../assets/app.png';
import icon_web from '../../../assets/web.png';
import projects from './projects';


const Portafolio = () => { 
    return (
        <div className="portafolio">
            <h2 className="title-section">Mi portafolio</h2>
            <div className="pf-list">
                {
                    projects.map(pj => (
                        <div className="pf-item" key={pj.id}>
                            <div className="pf-item-img"><img src={pj.prev_img} alt={pj.title}/></div>
                            <div className="pf-item-body">
                                <h3 className="pf-item-title">{pj.title}</h3>
                                <p className="pf-item-desc">{pj.description}</p>
                                <div className="pf-item-footer">
                                    <div className="pf-item-ft-category"><img src={(pj.categoria == 'Mobile aplication') ? icon_app : icon_web} alt="icon-app"/>&nbsp;{pj.categoria}</div>
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