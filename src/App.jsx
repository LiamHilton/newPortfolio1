import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
