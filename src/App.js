import React, { useState, useEffect } from 'react';
import Context from './utils/context';

import Header from './components/layout/header';
import About from './components/layout/about';
import Abilities from './components/layout/abilities';
import Portafolio from './components/layout/portafolio';
import Contacto from './components/layout/contacto';
import Footer from './components/layout/footer';

const App = () => {

  const [ darkMode, setDarkMode ] = useState(false);


  const setDarkTheme = () => {
    setDarkMode(true)
    localStorage.setItem('theme', 'darkTheme')
  }

  const setLightTheme = () => {
    setDarkMode(false)
    localStorage.removeItem('theme')
    localStorage.removeItem('colorScheme')
  }

  const handleChangeDarkMode = (event) => {

    if(event.target.checked){
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }
  
  const currentTheme = ( localStorage.getItem('theme') ) ? localStorage.getItem('theme') : null;
  
  

  useEffect(() => {

    if(currentTheme) {
      console.log('currentTheme =>' + currentTheme);
      setDarkTheme();
    }
    
  })

  

  return (
    <Context.Provider
      value={{ 
        darkmode: darkMode,
        handleChangeDarkMode: (event) => handleChangeDarkMode(event)
       }}
    >
      <div className={ !darkMode ? 'App lightTheme' : 'App darkTheme'} >
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

// if(window.matchMedia("(prefers-color-scheme: dark)").matches){
