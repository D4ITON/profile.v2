import React from 'react';
import Header from './components/layout/header';
import About from './components/layout/about';
import Abilities from './components/layout/abilities';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Abilities/>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default App;
