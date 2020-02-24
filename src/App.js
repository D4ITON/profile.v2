import React, { useState } from 'react';
import Context from './utils/context';

import Header from './components/layout/header';
import About from './components/layout/about';
import Abilities from './components/layout/abilities';
import Portafolio from './components/layout/portafolio';
import Contacto from './components/layout/contacto';
import Footer from './components/layout/footer';

const App = () => {

  const [ darkMode, setDarkMode ] = useState(false);

  const handleChangeDarkMode = (event) => {
    // console.log(event.target.checked);
    (event.target.checked) ? (
      setDarkMode(true)
    ) : (
      setDarkMode(false)
    )
  }

  return (
    <Context.Provider
      value={{ 
        darkmode: darkMode,
        handleChangeDarkMode: (event) => handleChangeDarkMode(event)
       }}
    >
      <div className={ !darkMode ?'App' : 'App darkmode'} >
        <Header/>
        <About/>
        <Abilities/>
        <Portafolio/>
        <Contacto/>
        <Footer/>
      </div>
    </Context.Provider>
  );
}

export default App;


/**
 * Notas:
 * creas tu contexto
 * creas el provider
 * creas el useState
 * creas el context provider
 * envias valores que son el estado la funcion de cambio
 */