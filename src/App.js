import React from 'react';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Qualification from './Components/Qualification/Qualification';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
    
    </main>
    </>
  );
}

export default App;
