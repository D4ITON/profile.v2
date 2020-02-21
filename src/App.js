import React from 'react';
import Header from './components/layout/header';
import About from './components/layout/about';
import Abilities from './components/layout/abilities';
import Portafolio from './components/layout/portafolio';
import Contacto from './components/layout/contacto';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Abilities/>
      <Portafolio/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
