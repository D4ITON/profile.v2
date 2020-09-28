import React from "react";
import * as ICON from "../../../assets/icons_svg";

import projects, { design_items } from "./projects";

const Portafolio = () => {
  /**
   * Muestra el icono si es moble desktop o web
   * @param {Number} categoryId
   */
  const showAppIcon = (categoryId) => {
    switch (categoryId) {
      case 1:
        return <ICON.GLOBAL width={20} height={20} />;
      case 2:
        return <ICON.MOBILE width={20} height={20} />;
      case 3:
        return <ICON.DESKTOP width={15} height={15} />;
      default:
        break;
    }
  };

  return (
    <div className="portafolio" id="portafolio">
      <h2 className="title-section">Mi portafolio</h2>
      {/* ------- PROGRAMACIÓN SECTION ------- */}
      <h3 className="sub-title-section">Programación</h3>
      <div className="pf-list">
        {projects.map((pj) => (
          <div className="pf-item" key={pj.id}>
            <div className="pf-item-img">
              <img src={pj.image} alt={pj.title} />
            </div>
            <div className="pf-item-body">
              <div>
                <h3 className="pf-item-title">{pj.title}</h3>
                <p className="pf-item-desc">{pj.description}</p>
              </div>
              <div className="pf-item-footer">
                <div className="pf-item-ft-category">
                  {showAppIcon(pj.categoria)}
                  <p>{pj.categoriaText}</p>
                </div>
                <a href={pj.url} rel="noopener noreferrer" target="_blank">
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ------- DISEÑO SECTION ------- */}
      <div className="pf-design">
        <h3 className="sub-title-section">Diseño</h3>
        <div className="pf-design-container">
          {design_items.map((item, index) => (
            <div key={index} className="pf-design-item">
              <div className="pf-design-item-head">
                <img src={item.previewUrl} alt="imagen" />
              </div>
              <div className="pf-design-item-footer">
                <a href={item.url} target="_blanck" className="pf-design-title">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portafolio;

// Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
